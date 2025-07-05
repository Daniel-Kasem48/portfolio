import {FC, useState, useEffect} from "react";
import {IEducation} from "./Education.tsx";
import {IWorkExperience} from "./WorkExperience.tsx";
import {IProject} from "./Project.tsx";
import {certificates, ICertificate} from "./ICertificate.tsx";
import {educationsData} from "./EducationsData.tsx";
import {projectsData} from "./Projects.tsx";
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
    const [isOpen, setIsOpen] = useState(false); // Start closed, but we'll open it with useEffect
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const portfolioData = jsonToPortfolioString({
        certificates: certificates,
        educations: educationsData,
        projects: projectsData,
        workExperiences: workExperiencesData,
        skills: techSkillsData,
    });

    // Open chat modal only once per day
    useEffect(() => {
        const lastSeen = localStorage.getItem('aiChatPopupSeen');
        const now = Date.now();
        const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
        
        if (!lastSeen || (now - parseInt(lastSeen)) > oneDay) {
            setIsOpen(true); // Automatically opens the modal once per day
            localStorage.setItem('aiChatPopupSeen', now.toString());
        }
    }, []);

    // Replace with your actual Gemini API key
    const API_KEY = "AIzaSyCKRVn92ORlYJYWY8somJsAma3WLXQMBwc";
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

    const TELEGRAM_BOT_TOKEN = "7636512900:AAHhTpTDA1UY73FzcQuD97tiEV2kLTyT6Jc"
    const TELEGRAM_CHAT_ID = "1002448649276"
    const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;


    // Placeholder for handleSubmit (assuming you'll add API logic here)
    const handleSubmit = async (e: React.FormEvent, question: string = input) => {
        e.preventDefault();
        if (!question.trim()) return;

        setMessages([...messages, `You: ${question}`]);
        setIsLoading(true);

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
            setMessages((prev) => [...prev, `AI: ${aiResponse}`]);

            // Send to Telegram directly
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
            setMessages((prev) => [...prev, "AI: Oops, something went wrong. Try again!"]);
        } finally {
            setIsLoading(false);
            setInput("");
        }
    };


    return (
        <>
            {/* Floating Button */}
            <div className="relative group">
                <button
                    onClick={() => setIsOpen(true)}
                    className="
                        fixed bottom-4 right-4 sm:bottom-8 sm:right-8
                        bg-gradient-to-br
                        from-navy-blue to-black
                        text-cyan-400
                        p-4
                        sm:p-5 rounded-full
                        shadow-xl
                        shadow-cyan-500/30
                        hover:bg-gradient-to-br
                        hover:from-cyan-400
                        hover:to-navy-blue
                        hover:text-white hover:shadow-cyan-500/60
                        transition-all duration-300 ease-in-out
                        transform hover:scale-110 hover:rotate-12
                        z-40
                    "
                >
                    <svg
                        className="w-6 h-6 sm:w-8 sm:h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5v-2a2 2 0 012-2h10a2 2 0 012 2v2h-4m-6 0v2a2 2 0 002 2h2a2 2 0 002-2v-2"
                        />
                    </svg>
                </button>
                <div className="
                    absolute bottom-16 right-0
                    hidden group-hover:block
                    bg-cyan-900 text-white
                    text-sm rounded-lg
                    px-3 py-2
                    shadow-lg
                    z-50
                    whitespace-nowrap
                ">
                    Chat with me about my portfolio!
                </div>
            </div>

            {/* Chat Modal - Opens on Load */}
            {isOpen && (
                <div className="
                    fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50
                    animate-fadeIn
                ">
                    <div
                        className="
                            bg-[gray]
                            w-full max-w-[90vw] sm:max-w-2xl mx-2 sm:mx-6 p-4 sm:p-8
                            rounded-2xl sm:rounded-3xl
                            border border-navy-blue
                            shadow-2xl shadow-cyan-500/20
                            relative
                            overflow-hidden
                            transform animate-bounceIn
                        "
                    >
                        <div className="
                            absolute top-0 left-0 w-full h-1 sm:h-2
                            bg-gradient-to-r from-cyan-400 via-blue-600 to-transparent
                        "/>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="
                                absolute top-3 right-3 sm:top-6 sm:right-6
                                text-cyan-400 hover:text-cyan-300
                                transition-colors duration-300
                            "
                        >
                            <svg
                                className="w-6 h-6 sm:w-8 sm:h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <h3 className="
                            text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-8
                            bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600
                        ">
                            Hey! Chat with My AI About My Portfolio
                        </h3>
                        <div className="
                            h-[60vh] sm:h-96 overflow-y-auto text-gray-200 mb-4 sm:mb-8
                            scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-gray-800
                            scrollbar-rounded scrollbar-hover:scrollbar-thumb-cyan-300
                        ">
                            {messages.length === 0 && (
                                <div className="text-center text-cyan-300 py-4">
                                    Ask me anything about my skills, projects, or experience!
                                </div>
                            )}
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`py-2 px-3 sm:py-3 sm:px-5 mb-2 sm:mb-3 rounded-lg sm:rounded-xl ${
                                        msg.startsWith("You:")
                                            ? "bg-navy-blue text-cyan-300 text-right ml-auto mr-1 sm:mr-2"
                                            : "bg-gray-600 text-gray-200"
                                    } max-w-[85%] w-fit shadow-sm`}
                                >
                                    {msg.startsWith("AI:") ? (
                                        <ReactMarkdown children={msg.replace("AI: ", "")}/>
                                    ) : (
                                        msg
                                    )}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="
                                    py-2 px-3 sm:py-3 sm:px-5 mb-2 sm:mb-3 rounded-lg sm:rounded-xl
                                    bg-gray-600 text-gray-200 max-w-[85%] w-fit shadow-sm animate-pulse
                                ">
                                    AI: Thinking...
                                </div>
                            )}
                        </div>
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="
                                    flex-1 bg-gray-600 text-[black] p-3 sm:p-4
                                    rounded-lg sm:rounded-xl border border-navy-blue
                                    focus:outline-none focus:ring-2 focus:ring-cyan-400
                                    placeholder-gray-300 transition-all duration-300
                                    text-base sm:text-lg
                                "
                                placeholder="Ask about my skills..."
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                className="
                                    bg-gradient-to-r from-cyan-400 to-blue-600
                                    text-white px-4 py-3 sm:px-6 sm:py-4
                                    rounded-lg sm:rounded-xl
                                    hover:bg-gradient-to-r hover:from-cyan-300 hover:to-blue-500
                                    transition-all duration-300 transform hover:scale-105
                                    font-semibold disabled:opacity-50 disabled:cursor-not-allowed
                                "
                                disabled={isLoading}
                            >
                                {isLoading ? "Sending..." : "Send"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

// const AIChat: FC = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [input, setInput] = useState("");
//     const [messages, setMessages] = useState<string[]>([]);
//     const [isLoading, setIsLoading] = useState(false);
//
//     const portfolioData = jsonToPortfolioString({
//         certificates: certificates,
//         educations: educationsData,
//         projects: projectsData,
//         workExperiences: workExperiencesData,
//         skills: techSkillsData
//     })
//
//     // Replace with your actual Gemini API key
//     const API_KEY = "AIzaSyCKRVn92ORlYJYWY8somJsAma3WLXQMBwc";
//     const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
//     const TELEGRAM_BOT_TOKEN = "7636512900:AAHhTpTDA1UY73FzcQuD97tiEV2kLTyT6Jc"
//     const TELEGRAM_CHAT_ID = "1002448649276"
//     const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
//
//     const handleSubmit = async (e: React.FormEvent, question: string = input) => {
//         e.preventDefault();
//         if (!question.trim()) return;
//
//         setMessages([...messages, `You: ${question}`]);
//         setIsLoading(true);
//
//         const prompt = `
//         ${portfolioData}
//
//         A recruiter will ask you a question based on this information. Answer the recruiter's question accurately, using ONLY the information provided in my portfolio. DO NOT generate any information outside of the portfolio data. Keep your answer concise and limit it to a maximum of 250 words. Respond DIRECTLY to the question, without any introductory phrases like 'Okay, I understand' or 'Here's my answer'. Format your response using markdown to make it usable by react-markdown, including bullet points, headings, and code blocks where appropriate
//
//         Recruiter's Question: ${question}
//     `;
//
//         try {
//             const response = await fetch(API_URL, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     contents: [
//                         {
//                             parts: [{text: prompt}],
//                         },
//                     ],
//                 }),
//             });
//
//             if (!response.ok) throw new Error("API request failed");
//
//             const data = await response.json();
//             const aiResponse = data.candidates[0]?.content?.parts[0]?.text || "Sorry, I couldn't process that.";
//             setMessages((prev) => [...prev, `AI: ${aiResponse}`]);
//
//             // Send to Telegram directly
//             fetch(TELEGRAM_API_URL, {
//                 method: "POST",
//                 headers: {"Content-Type": "application/json"},
//                 body: JSON.stringify({
//                     chat_id: -TELEGRAM_CHAT_ID,
//                     text: `Question:${question}`,
//                     parse_mode: "Markdown",
//                 }),
//             }).catch((error) => console.error("Error sending to Telegram:", error));
//
//         } catch (error) {
//             console.error("Error fetching Gemini API:", error);
//             setMessages((prev) => [...prev, "AI: Oops, something went wrong. Try again!"]);
//         } finally {
//             setIsLoading(false);
//             setInput("");
//         }
//     };
//
//     return (
//         <>
//             {/* Floating Button */}
//             <div className="relative group">
//                 <button
//                     onClick={() => setIsOpen(true)}
//                     className="
//             fixed bottom-4 right-4 sm:bottom-8 sm:right-8
//             bg-gradient-to-br
//             from-navy-blue to-black
//             text-cyan-400
//             p-4
//             sm:p-5 rounded-full
//             shadow-xl
//             shadow-cyan-500/30
//             hover:bg-gradient-to-br
//             hover:from-cyan-400
//             hover:to-navy-blue
//             hover:text-white hover:shadow-cyan-500/60
//             transition-all duration-300 ease-in-out
//             transform hover:scale-110 hover:rotate-12
//             z-40
//         "
//                 >
//                     <svg
//                         className="w-6 h-6 sm:w-8 sm:h-8"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M8 10h.01M12 10h.01M16 10h.01M9 16H5v-2a2 2 0 012-2h10a2 2 0 012 2v2h-4m-6 0v2a2 2 0 002 2h2a2 2 0 002-2v-2"
//                         />
//                     </svg>
//                 </button>
//                 {/* Tooltip */}
//                 <div className="
//         absolute bottom-16 right-0
//         hidden group-hover:block
//         bg-cyan-900 text-white
//         text-sm rounded-lg
//         px-3 py-2
//         shadow-lg
//         z-50
//         whitespace-nowrap
//     ">
//                     Chat with me about my portfolio!
//                 </div>
//             </div>
//
//             {/* Chat Modal */}
//             {isOpen && (
//                 <div
//                     className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 animate-fade-in">
//                     <div
//                         className="
//                             bg-[gray]
//                             w-full max-w-[90vw] sm:max-w-2xl mx-2 sm:mx-6 p-4 sm:p-8
//                             rounded-2xl sm:rounded-3xl
//                             border border-navy-blue
//                             shadow-2xl shadow-cyan-500/20
//                             relative
//                             overflow-hidden
//                         "
//                     >
//                         {/* Decorative Top Gradient */}
//                         <div
//                             className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-cyan-400 via-blue-600 to-transparent"/>
//
//                         {/* Close Button */}
//                         <button
//                             onClick={() => setIsOpen(false)}
//                             className="absolute top-3 right-3 sm:top-6 sm:right-6 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
//                         >
//                             <svg
//                                 className="w-6 h-6 sm:w-8 sm:h-8"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M6 18L18 6M6 6l12 12"
//                                 />
//                             </svg>
//                         </button>
//
//                         {/* Header */}
//                         <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
//                             Chat with My AI
//                         </h3>
//
//                         {/* Messages */}
//                         <div
//                             className="h-[60vh] sm:h-96 overflow-y-auto text-gray-200 mb-4 sm:mb-8 scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-gray-800 scrollbar-rounded scrollbar-hover:scrollbar-thumb-cyan-300">
//                             {messages.map((msg, idx) => (
//                                 <div
//                                     key={idx}
//                                     className={`py-2 px-3 sm:py-3 sm:px-5 mb-2 sm:mb-3 rounded-lg sm:rounded-xl ${
//                                         msg.startsWith("You:")
//                                             ? "bg-navy-blue text-cyan-300 text-right ml-auto mr-1 sm:mr-2"
//                                             : "bg-gray-600 text-gray-200"
//                                     } max-w-[85%] w-fit shadow-sm`}
//                                 >
//                                     {msg.startsWith("AI:") ? (
//                                         <ReactMarkdown children={msg.replace("AI: ", "")}/>
//                                     ) : (
//                                         msg
//                                     )}
//                                 </div>
//                             ))}
//                             {isLoading && (
//                                 <div
//                                     className="py-2 px-3 sm:py-3 sm:px-5 mb-2 sm:mb-3 rounded-lg sm:rounded-xl bg-gray-600 text-gray-200 max-w-[85%] w-fit shadow-sm animate-pulse">
//                                     AI: Thinking...
//                                 </div>
//                             )}
//                         </div>
//
//                         {/* Input Form */}
//                         <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
//                             <input
//                                 type="text"
//                                 value={input}
//                                 onChange={(e) => setInput(e.target.value)}
//                                 className="
//                                     flex-1
//                                     bg-gray-600
//                                     text-[black]
//                                     p-3 sm:p-4
//                                     rounded-lg sm:rounded-xl
//                                     border border-navy-blue
//                                     focus:outline-none focus:ring-2 focus:ring-cyan-400
//                                     placeholder-gray-300
//                                     transition-all duration-300
//                                     text-base sm:text-lg
//                                 "
//                                 placeholder="Ask about my skills..."
//                                 disabled={isLoading}
//                             />
//                             <button
//                                 type="submit"
//                                 className="
//                                     bg-gradient-to-r from-cyan-400 to-blue-600
//                                     text-white
//                                     px-4 py-3 sm:px-6 sm:py-4
//                                     rounded-lg sm:rounded-xl
//                                     hover:bg-gradient-to-r hover:from-cyan-300 hover:to-blue-500
//                                     transition-all duration-300
//                                     transform hover:scale-105
//                                     font-semibold
//                                     disabled:opacity-50 disabled:cursor-not-allowed
//                                 "
//                                 disabled={isLoading}
//                             >
//                                 {isLoading ? "Sending..." : "Send"}
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </>
//     )
// };

export default AIChat;