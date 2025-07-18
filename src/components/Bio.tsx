import {FC, useEffect, useRef} from "react";
import Email from "../assets/icons/Email";
import Phone from "../assets/icons/Phone";
import WhatsApp from "../assets/icons/WhatsApp";
import LinkedIn from "../assets/icons/LinkedIn";
import Location from "../assets/icons/Location";
import Date from "../assets/icons/Date";
import Stackoverflow from "../assets/icons/StackOverFlow";
import Typewriter from "typewriter-effect";
import GitHub from "../assets/icons/Github.tsx";
import { usePostHogEvent } from '../hooks/usePostHogEvent';
import { motion } from "framer-motion";
import { getImage } from "./Projects.tsx";

export const bioText = `
Full-Stack Developer with a backend focus, experienced in Laravel, Node.js (Express, NestJS), and Golang. Proficient in React.js for building responsive UIs. Skilled in integrating AI solutions, including RAG (Retrieval-Augmented Generation) and building autonomous bots. Strong experience with both SQL and NoSQL databases. Passionate about clean architecture, scalable APIs, real-time systems, and continuous learning.
`;

// 3D Background Component
const ThreeDBackground: FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    animation: 'gridMove 20s linear infinite'
                }}></div>
            </div>
            
            {/* Floating Geometric Shapes */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-cyan-400/20 sm:bg-cyan-400/30 rounded-full hidden sm:block"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: Math.random() * 15 + 15,
                        repeat: Infinity,
                        delay: Math.random() * 10,
                    }}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}
            
            {/* Additional Floating Elements */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={`large-${i}`}
                    className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-purple-400/10 sm:bg-purple-400/20 rounded-full hidden sm:block"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 50, 0],
                        scale: [1, 2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: Math.random() * 20 + 20,
                        repeat: Infinity,
                        delay: Math.random() * 15,
                    }}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}
            
            {/* Glowing Orbs - Only on larger screens */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`glow-${i}`}
                    className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-cyan-400/20 sm:from-cyan-400/40 to-purple-400/20 sm:to-purple-400/40 rounded-full blur-sm hidden md:block"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: Math.random() * 25 + 25,
                        repeat: Infinity,
                        delay: Math.random() * 20,
                    }}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}
            
            {/* CSS Animation for Grid */}
            <style>{`
                @keyframes gridMove {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(50px, 50px); }
                }
            `}</style>
        </div>
    );
};

const Bio: FC = () => {

    const aboutRef = useRef(null);
    const track = usePostHogEvent();
    useEffect(() => {
        const ref = aboutRef.current;
        if (!ref) return;
        let hasTracked = false;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTracked) {
                    track('section_viewed', { section: 'About Me' });
                    hasTracked = true;
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(ref);
        return () => observer.disconnect();
    }, [track]);

    const contactItems = [
        {
            icon: <Email/>,
            text: "daniel.f.kasem@gmail.com",
            href: "mailto:daniel.f.kasem@gmail.com",
        },
        {
            icon: <Phone/>,
            text: "(+963)931869085",
            href: "tel:+963931869085",
            className: "font-firamono text-cyan-400 font-bold tabular-nums leading-none"
        },
        {
            icon: <WhatsApp/>,
            text: "(+963)931869085",
            href: "https://wa.me/+963931869085",
            target: "_blank",
            className: "font-firamono text-cyan-400 font-bold tabular-nums leading-none"
        },
        {
            icon: <Location/>,
            text: (
                <>
                    <a
                        href="https://www.google.com/maps/place/Latakia,+Syria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Syria, Latakia
                    </a>
                    <span className="text-cyan-400 text-sm italic ml-2">(Willing To Relocate)</span>
                </>
            ),
        },
        {
            icon: <Date/>,
            text: "March 22th, 1999",
        },
        {
            icon: <LinkedIn/>,
            text: "/in/daniel-kasem",
            href: "https://www.linkedin.com/in/daniel-kasem-70bba9a4/",
            target: "_blank",
        },
        {
            icon: <GitHub/>,
            text: "daniel-kasem",
            href: "https://github.com/specture48",
            target: "_blank",
        },
        {
            icon: <Stackoverflow/>,
            text: "daniel-kasem",
            href: "https://stackoverflow.com/users/21441411/daniel-kasem",
            target: "_blank",
        },
    ];

    return (
        <section id="aboutme" ref={aboutRef} className="pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
            
            {/* 3D Background Effect */}
            <ThreeDBackground />
            
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Enhanced Section Title */}
                <motion.div 
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        About Me
                        </h2>
                        <svg className="w-8 h-8 text-purple-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                </div>
                    <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
                        Full-Stack Developer passionate about building scalable solutions and innovative applications
                    </p>
                    <div className="mt-4 flex items-center justify-center md:hidden">
                        <span className="text-gray-500 text-sm mr-2">Tap the menu to explore</span>
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                    </div>
                    <motion.div 
                        className="mt-4 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
                    </motion.div>
                </motion.div>

                <div className="flex flex-col lg:flex-row-reverse gap-6 sm:gap-8 md:gap-12">
                    {/* Contact Info */}
                    <motion.div 
                        className="w-full lg:w-2/5 flex flex-col items-center mb-8 lg:mb-0"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-sm p-0">
                            {/* Vertical Gradient Accent Bar */}
                            <div className="absolute right-0 top-4 sm:top-6 bottom-4 sm:bottom-6 w-1.5 sm:w-2 rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 shadow-lg z-20"></div>
                            <div className="relative z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-cyan-500/30 shadow-[0_8px_32px_0_rgba(58,199,255,0.25)] w-full mr-2 sm:mr-4">
                                {/* Profile Header */}
                                <div className="text-center mb-6 sm:mb-8">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-1 tracking-tight">Daniel Kasem</h3>
                                    <p className="text-base sm:text-lg font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Full-Stack Developer</p>
                                </div>
                                <div className="space-y-4 sm:space-y-5">
                                    {contactItems.map((item, index) => (
                                        <motion.div 
                                            key={index} 
                                            className="flex items-center gap-3 sm:gap-4 group/item p-2 -ml-2 rounded-lg hover:bg-gray-800/30 transition-all duration-300"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <span className="text-cyan-400 group-hover/item:text-cyan-300 transition-colors duration-300 text-lg sm:text-xl flex-shrink-0">
                                                {item.icon}
                                            </span>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    target={item.target || "_self"}
                                                    rel={item.target ? "noopener noreferrer" : undefined}
                                                    className={`text-gray-200 group-hover/item:text-white transition-colors duration-300 text-sm sm:text-base md:text-lg hover:underline break-all active:text-cyan-400 ${item.className || ''}`}
                                                >
                                                    {item.text}
                                                </a>
                                            ) : (
                                                <span className={`text-gray-200 text-sm sm:text-base md:text-lg ${item.className || ''}`}>{item.text}</span>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Divider for mobile */}
                    <div className="block lg:hidden my-6 sm:my-8">
                        <div className="h-0.5 sm:h-1 w-1/2 sm:w-2/3 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-60"></div>
                    </div>
                    
                    {/* Bio Text */}
                    <motion.div 
                        className="w-full lg:w-2/3 flex flex-col justify-center items-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-gray-700/50 shadow-2xl w-full max-w-2xl relative group hover:border-cyan-500/50 transition-all duration-500">
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                            
                            <div className="relative z-10">
                                {/* Profile Header */}
                                <div className="flex flex-col items-center mb-6 sm:mb-8">
                                    <div className="relative w-48 h-56 sm:w-56 sm:h-64 flex items-center justify-center">
                                        {/* Blurred Gradient Glow */}
                                        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-cyan-400 via-purple-500 to-blue-500 blur-2xl opacity-60 scale-110"></div>
                                        <img
                                            src={getImage("/my_image.webp")}
                                            alt="Daniel Kasem portrait"
                                            className="w-full h-full object-cover rounded-2xl shadow-2xl"
                                            loading="lazy"
                                            draggable="false"
                                        />
                                    </div>
                                </div>
                                {/* Bio Header */}
                                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">Professional Summary</h3>
                                </div>
                                
                            {/* Bio Text with Typewriter */}
                            <div className="hidden md:block">
                                <Typewriter
                                    options={{
                                        cursor: "_",
                                            delay: 20,
                                        deleteSpeed: 30,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString(
                                                    `<blockquote class="text-lg leading-relaxed text-gray-300 font-light pl-6 border-l-4 border-cyan-500 rounded-bl-2xl">${bioText}</blockquote>`
                                            )
                                            .start();
                                    }}
                                />
                            </div>
                                <blockquote className="block md:hidden text-base sm:text-lg leading-relaxed text-gray-300 font-light pl-4 sm:pl-6 border-l-4 border-cyan-500 rounded-bl-2xl">
                                {bioText}
                            </blockquote>
                                
                                {/* Key Highlights */}
                                <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-gray-800/50 rounded-lg">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-300 text-xs sm:text-sm">Backend Focus</span>
                                    </div>
                                    <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-gray-800/50 rounded-lg">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-300 text-xs sm:text-sm">AI Integration</span>
                                    </div>
                                    <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-gray-800/50 rounded-lg">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-300 text-xs sm:text-sm">Clean Architecture</span>
                                    </div>
                                    <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-gray-800/50 rounded-lg">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-300 text-xs sm:text-sm">Real-time Systems</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
            
            {/* Section Preview Cards - Mobile Only */}
            {/* <div className="fixed bottom-6 left-4 right-4 md:hidden z-40">
                <div className="bg-black/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-cyan-400/30">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                            <span className="text-white text-sm font-medium">About Me</span>
                            <span className="text-gray-400 text-xs">1/8</span>
                        </div>
                        <span className="text-gray-400 text-xs">Swipe to explore →</span>
                    </div>
                    
                    {/* Mini Preview Cards */}
                    {/* <div className="flex gap-2 overflow-x-auto pb-2">
                        {[
                            { title: "Skills", icon: "⚡", desc: "Tech Stack & Tools", href: "/skills" },
                            { title: "Projects", icon: "🚀", desc: "Recent Work", href: "/projects" },
                            { title: "Experience", icon: "💼", desc: "Work History", href: "/work-experiences" },
                            { title: "Education", icon: "🎓", desc: "Academic Background", href: "/educations" },
                            { title: "Certificates", icon: "📜", desc: "Certifications", href: "/certificates" }
                        ].map((section) => (
                            <Link
                                key={section.href}
                                to={section.href}
                                className="flex-shrink-0 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg p-3 min-w-[120px] transition-all duration-200 hover:scale-105 border border-gray-700/30"
                            >
                                <div className="text-center">
                                    <div className="text-lg mb-1">{section.icon}</div>
                                    <div className="text-white text-xs font-medium mb-1">{section.title}</div>
                                    <div className="text-gray-400 text-xs">{section.desc}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div> */}
        </section>
    );
};

export default Bio;