import {FC, useState, useEffect, useRef} from "react";
import {IEducation} from "./Education.tsx";
import {IWorkExperience} from "./WorkExperience.tsx";
import {IProject} from "./Project.tsx";
import {certificates, ICertificate} from "./ICertificate.tsx";
import {educationsData} from "./EducationsData.tsx";
import {projectsDataWithCategories as projectsData} from "./Projects.tsx";
import {workExperiencesData} from "./WorkExperiences.tsx";
import {techSkillsData} from "./TechSkill.tsx";
import ReactMarkdown from "react-markdown";
import {bioText} from "./Bio.tsx";

export interface SkillCategory {
    category: string;
    skills: string[];
}

interface PortfolioData {
    projects: IProject[];
    educations: IEducation[];
    workExperiences: IWorkExperience[];
    certificates: ICertificate[];
    skills: SkillCategory[];
}

interface ChatMessage {
    id: string;
    type: 'user' | 'ai';
    content: string;
    timestamp: Date;
}

const jsonToPortfolioString = (data: PortfolioData): string => {
    const {certificates, projects, skills, educations, workExperiences} = data;

    const certificatesStr = certificates.length
        ? `Certificates: ${certificates
            .map((c) => `${c.title} from ${c.issuer} (${c.date}, Link: ${c.link})`)
            .join(", ")}.`
        : "Certificates: None.";

    const projectsStr = projects.length
        ? `Projects: ${projects
            .map(
                (p) =>
                    `${p.title} - ${p.description} (Tech: ${p.stack.join(", ")}, Link: ${
                        p.link
                    })`
            )
            .join("; ")}.`
        : "Projects: None.";

    const skillsStr = skills.length
        ? `Skills: ${skills
            .map((s) => `${s.category}: ${s.skills.join(", ")}`)
            .join("; ")}.`
        : "Skills: None.";

    const educationsStr = educations.length
        ? `Education: ${educations
            .map((e) => `${e.title} from ${e.institution} (${e.date})`)
            .join(", ")}.`
        : "Education: None.";

    const workExperiencesStr = workExperiences.length
        ? `Work Experience: ${workExperiences
            .map(
                (w) =>
                    `${w.title} at ${w.company} in ${w.location} (${w.date}) - ${w.description.join(
                        ", "
                    )}`
            )
            .join("; ")}.`
        : "Work Experience: None.";

    return `bornYear:1999,phone:+963931869085\n
    email:daniel.f.kasem@gmail.com\n
    links:${[
        'Download CV:https://daniel-kasem48.github.io/portfolio/cv.pdf',
        'https://www.linkedin.com/in/daniel-kasem-70bba9a4/',
        'https://stackoverflow.com/users/21441411/daniel-kasem',
    ].join(',')}\nBIO:${bioText}\n${certificatesStr}\n${projectsStr}\n${skillsStr}\n${educationsStr}\n${workExperiencesStr}`;
};

const AIChat: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const portfolioData = jsonToPortfolioString({
        certificates: certificates,
        educations: educationsData,
        projects: projectsData,
        workExperiences: workExperiencesData,
        skills: techSkillsData,
    });

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Focus input when modal opens
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    // Open chat modal only once per day
    useEffect(() => {
        const lastSeen = localStorage.getItem('aiChatPopupSeen');
        const now = Date.now();
        const oneDay = 24 * 60 * 60 * 1000;
        
        if (!lastSeen || (now - parseInt(lastSeen)) > oneDay) {
            setIsOpen(true);
            localStorage.setItem('aiChatPopupSeen', now.toString());
        }
    }, []);

    // Replace with your actual Gemini API key
    const API_KEY = "AIzaSyCKRVn92ORlYJYWY8somJsAma3WLXQMBwc";
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

    const TELEGRAM_BOT_TOKEN = "7636512900:AAHhTpTDA1UY73FzcQuD97tiEV2kLTyT6Jc"
    const TELEGRAM_CHAT_ID = "1002448649276"
    const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const addMessage = (type: 'user' | 'ai', content: string) => {
        const newMessage: ChatMessage = {
            id: Date.now().toString(),
            type,
            content,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, newMessage]);
    };

    const handleSubmit = async (e: React.FormEvent, question: string = input) => {
        e.preventDefault();
        if (!question.trim() || isLoading) return;

        addMessage('user', question);
        setIsLoading(true);
        setIsTyping(true);
        setInput("");

        const prompt = `
You are Daniel Kasem, and the following is your complete portfolio data:

${portfolioData}

A recruiter will ask you a question about your background, skills, or experience. Please answer as yourself, using ONLY the information provided above. Do NOT invent or assume any details not present in the portfolio.

Instructions for your response:
- Answer directly and concisely (max 250 words).
- Do NOT use introductory phrases (e.g., "Sure," "Here's my answer," etc.).
- Use markdown formatting for clarity: headings, bullet points, and code blocks where appropriate.
- If the answer is not in the portfolio, politely state that the information is not available.

Recruiter's Question: ${question}
`;

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [{text: prompt}],
                        },
                    ],
                }),
            });

            if (!response.ok) throw new Error("API request failed");

            const data = await response.json();
            const aiResponse = data.candidates[0]?.content?.parts[0]?.text || "Sorry, I couldn't process that.";
            
            // Simulate typing effect
            setTimeout(() => {
                setIsTyping(false);
                addMessage('ai', aiResponse);
            }, 1000);

            // Send to Telegram
            fetch(TELEGRAM_API_URL, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    chat_id: -TELEGRAM_CHAT_ID,
                    text: `Question:${question}`,
                    parse_mode: "Markdown",
                }),
            }).catch((error) => console.error("Error sending to Telegram:", error));

        } catch (error) {
            console.error("Error fetching Gemini API:", error);
            setIsTyping(false);
            addMessage('ai', "Oops, something went wrong. Try again!");
        } finally {
            setIsLoading(false);
        }
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        });
    };

    return (
        <>
            {/* Modern Floating Button - Hidden on Mobile */}
            <div className="hidden md:block fixed bottom-6 right-6 z-[100] group">
                <button
                    onClick={() => setIsOpen(true)}
                    className="
                        relative w-16 h-16 sm:w-20 sm:h-20
                        bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600
                        text-white rounded-full
                        shadow-2xl shadow-cyan-500/30
                        hover:shadow-cyan-500/50
                        transition-all duration-500 ease-out
                        transform hover:scale-110 hover:rotate-12
                        group-hover:shadow-cyan-500/60
                        backdrop-blur-sm border border-cyan-400/20
                    "
                >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full animate-pulse"></div>
                    
                    {/* Icon */}
                    <div className="relative z-10 flex items-center justify-center">
                    <svg
                            className="w-8 h-8 sm:w-10 sm:h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                    </svg>
                    </div>

                    {/* Pulse effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 animate-ping opacity-20"></div>
                </button>

                {/* Tooltip */}
                <div className="
                    absolute bottom-full right-0 mb-3
                    bg-gradient-to-r from-gray-900/95 to-gray-800/95
                    backdrop-blur-xl border border-gray-700/50
                    text-white text-sm rounded-2xl
                    px-4 py-3 shadow-2xl
                    opacity-0 group-hover:opacity-100
                    transform translate-y-2 group-hover:translate-y-0
                    transition-all duration-300 ease-out
                    whitespace-nowrap z-50
                ">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        Chat with my AI about my portfolio!
                    </div>
                    <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/95"></div>
                </div>
            </div>

            {/* Modern Chat Modal */}
            {isOpen && (
                <div 
                    className="fixed inset-0 z-[9999] bg-black flex items-center justify-center p-4"
                    style={{backgroundColor: 'black'}}
                >
                    <div
                        className="relative w-full max-w-4xl h-[80vh] max-h-[700px] bg-gray-900 border border-gray-700 rounded-3xl overflow-hidden shadow-2xl shadow-black/50 flex flex-col"
                        style={{backgroundColor: '#111827'}}
                    >
                        {/* Removed animated background elements for solid background */}

                        {/* Header */}
                        <div 
                            className="relative z-10 bg-gray-800 border-b border-gray-700 p-6"
                            style={{backgroundColor: '#1f2937'}}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">
                                            AI Portfolio Assistant
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            Ask me anything about my skills, projects, or experience!
                                        </p>
                                    </div>
                                </div>
                                
                        <button
                            onClick={() => setIsOpen(false)}
                            className="
                                        p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50
                                        text-gray-400 hover:text-white
                                        transition-all duration-300
                                        hover:scale-110
                            "
                        >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                            </div>
                        </div>

                        {/* Messages Container */}
                        <div className="relative z-10 flex-1 overflow-hidden flex flex-col">
                            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {messages.length === 0 && (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-semibold text-white mb-2">
                                            Welcome to my AI Assistant!
                                        </h4>
                                        <p className="text-gray-400 max-w-md mx-auto">
                                            I'm here to answer questions about my portfolio, skills, projects, and experience. Feel free to ask anything!
                                        </p>
                                </div>
                            )}

                                {messages.map((message) => (
                                <div
                                        key={message.id}
                                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div 
                                            className={`
                                                max-w-[80%] lg:max-w-[70%]
                                                ${message.type === 'user' 
                                                    ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white' 
                                                    : 'bg-gray-800 border border-gray-600 text-gray-200'
                                                }
                                                rounded-2xl px-4 py-3 shadow-lg
                                                animate-fadeInUp
                                            `}
                                            style={message.type === 'ai' ? {backgroundColor: '#1f2937'} : {}}
                                        >
                                            <div className="prose prose-invert max-w-none">
                                                {message.type === 'ai' ? (
                                                    <ReactMarkdown>{message.content}</ReactMarkdown>
                                                ) : (
                                                    <p className="text-sm sm:text-base">{message.content}</p>
                                                )}
                                            </div>
                                            <div className={`
                                                text-xs mt-2 opacity-70
                                                ${message.type === 'user' ? 'text-cyan-100' : 'text-gray-400'}
                                            `}>
                                                {formatTime(message.timestamp)}
                                            </div>
                                        </div>
                                </div>
                            ))}

                                {/* Typing indicator */}
                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div 
                                            className="bg-gray-800 border border-gray-600 rounded-2xl px-4 py-3 shadow-lg"
                                            style={{backgroundColor: '#1f2937'}}
                                        >
                                            <div className="flex items-center gap-2">
                                                <div className="flex space-x-1">
                                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                                </div>
                                                <span className="text-gray-400 text-sm">AI is typing...</span>
                                            </div>
                                        </div>
                                </div>
                            )}

                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Input Area */}
                        <div 
                            className="relative z-10 bg-gray-800 border-t border-gray-700 p-6"
                            style={{backgroundColor: '#1f2937'}}
                        >
                            <form onSubmit={handleSubmit} className="flex gap-3">
                                <div className="flex-1 relative">
                            <input
                                        ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="
                                            w-full bg-gray-800
                                            text-white placeholder-gray-400
                                            px-4 py-3 pr-12
                                            rounded-2xl border border-gray-600
                                            focus:outline-none focus:ring-2 focus:ring-cyan-500
                                            focus:border-cyan-500
                                            transition-all duration-300
                                            text-sm sm:text-base
                                "
                                style={{backgroundColor: '#1f2937'}}
                                        placeholder="Ask about my skills, projects, or experience..."
                                        disabled={isLoading || isTyping}
                            />
                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                                
                            <button
                                type="submit"
                                    disabled={isLoading || isTyping || !input.trim()}
                                className="
                                        px-6 py-3
                                        bg-gradient-to-r from-cyan-500 to-blue-600
                                        hover:from-cyan-400 hover:to-blue-500
                                        text-white font-semibold
                                        rounded-2xl shadow-lg
                                        transition-all duration-300
                                        transform hover:scale-105
                                        disabled:opacity-50 disabled:cursor-not-allowed
                                        disabled:hover:scale-100
                                        flex items-center gap-2
                                    "
                            >
                                    {isLoading || isTyping ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                            Send
                                        </>
                                    )}
                            </button>
                        </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AIChat;