import {FC, useEffect, useRef} from "react";
import { motion } from "framer-motion";
import { usePostHogEvent } from '../hooks/usePostHogEvent';
import React from "react";
import WorkExperience, {IWorkExperience} from "./WorkExperience";

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
                    className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
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

export const workExperiencesData: IWorkExperience[] = [
    {
        company: "CogentSoft",
        location: "Beirut, Lebanon",
        title: "Backend Engineer",
        date: "May 2022 – Present",
        description: [
            "Developed and maintained microservices using NestJS, Node.js, and Golang to design scalable backend architectures and Restfull APIs.",
            "Containerized projects (React.js, Next.js, Nest.js, PHP) and established a CI/CD pipeline for seamless deployment to ECS servers.",
            "Used GitLab CI/CD for containerization, pushing images to Amazon ECR, and deploying on ECS tasks.",
            "Revamped legacy systems, improving API performance by 30% using profiling tools.",
            "Designed and implemented database and system architectures for ERP, Medical, E-commerce, and POS systems.",
            "Led a cross-functional team of frontend, backend, and mobile developers while optimizing SEO and website performance.",
            "Contributed to system analysis efforts and delivered high-performance solutions.",
        ],
        highlights: ["Microservices", "CI/CD", "Performance Optimization", "Team Leadership"],
        color: "from-blue-500 to-cyan-500",
        gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)"
    },
    {
        company: "Ordro",
        location: "Remote, Saudi Arabia, Jeddah",
        title: "Backend Engineer",
        date: "May 2022 – Jan 2024",
        description: [
            "Developed a B2B eCommerce platform using open-source Medusa.js.",
            "Converted the platform to a multitenant architecture, enabling scalability for multiple clients.",
            "Created two mobile applications: one for drivers and another for retailers.",
            "Designed and implemented a comprehensive dashboard for suppliers and super admins.",
            "Integrated ZATCA-compliant e-invoicing standards and BNPL (Buy Now, Pay Later) functionality.",
            "Leveraged Google's Optimization AI to solve the Vehicle Routing Problem (VRP), optimizing delivery routes.",
            "Developing A Point of Sale system designed for retailers"
        ],
        highlights: ["B2B E-commerce", "Multi-tenancy", "Mobile Apps", "AI Integration"],
        color: "from-purple-500 to-pink-500",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)"
    },
    {
        company: "Yawar",
        location: "Iraq",
        title: "Backend Developer",
        date: "May 2023 – Aug 2024",
        description: [
            "Led the conversion of a large JavaScript application to TypeScript, improving maintainability and performance.",
            "Implemented dependency injection and TypeORM for enhanced database management.",
            "Refactored complex, unstructured code into modular and scalable components, improving performance by 25%.",
        ],
        highlights: ["TypeScript Migration", "Code Refactoring", "Performance Optimization"],
        color: "from-green-500 to-emerald-500",
        gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
    },
    {
        company: "Prokoders",
        location: "Remote, United Arab Emirates",
        title: "Backend Developer",
        date: "Dec 2021 – Jan 2023",
        description: [
            "Worked extensively with Laravel on ERP systems, Learning Management Systems (LMS), and various websites.",
            "Developed core functionalities, optimized performance, and implemented scalable backend solutions.",
            "Expanded technical expertise by learning .NET Core, contributing to cross-platform application development.",
        ],
        highlights: ["Laravel", "ERP Systems", "LMS", ".NET Core"],
        color: "from-orange-500 to-red-500",
        gradient: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)"
    },
    {
        company: "Flexsol",
        location: "",
        title: "Fullstack Developer (Laravel / HTML / CSS / JS)",
        date: "Jan 2021 – Dec 2021",
        description: [
            "Designed and developed a comprehensive dashboard and API for a university library mobile app.",
            "Implemented features enabling the sale of lectures and video courses, as well as subject tests for student exam preparation.",
        ],
        highlights: ["Fullstack Development", "Mobile API", "E-learning"],
        color: "from-indigo-500 to-blue-500",
        gradient: "linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)"
    },
    {
        company: "Freelance",
        location: "Remote",
        title: "Backend Developer",
        date: "Various (2023 – 2025)",
        description: [
            "Worked as a freelance backend developer for multiple clients and projects, delivering scalable and robust solutions.",
            "• Numbers5 (Mar 2025 – Jul 2025): Developed and maintained backend services, integrated AI-powered features and automation flows for virtual phone number management.",
            "• CleanCody: Contributed to backend development and API integrations for e-commerce and automation projects."
        ],
        highlights: ["Freelance", "AI Integration", "Automation", "E-commerce"],
        color: "from-teal-500 to-cyan-500",
        gradient: "linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)"
    },
];

const WorkExperiences: FC = () => {
    const experiencesRef = useRef(null);
    const track = usePostHogEvent();
    const [isVisible, setIsVisible] = React.useState(false);

    // Animation state
    const [animations, setAnimations] = React.useState(workExperiencesData.map(() => ({ opacity: 0, x: -50, scale: 0.9 })));

    useEffect(() => {
        if (window.innerWidth < 640) {
            setIsVisible(true);
            setAnimations(workExperiencesData.map(() => ({ opacity: 1, x: 0, scale: 1 })));
            return;
        }
        const ref = experiencesRef.current;
        if (!ref) return;
        let hasTracked = false;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTracked) {
                    setIsVisible(true);
                    setAnimations(workExperiencesData.map(() => ({ opacity: 1, x: 0, scale: 1 })));
                    track('section_viewed', { section: 'Work Experience' });
                    hasTracked = true;
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(ref);
        return () => observer.disconnect();
    }, [track]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 50, 
            x: -30,
            scale: 0.9
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            x: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <section id="work-experiences" ref={experiencesRef} className="py-20 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
            
            {/* 3D Background Effect */}
            <ThreeDBackground />
            
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Enhanced Section Title */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Work Experience
                        </h2>
                        <svg className="w-8 h-8 text-purple-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                    </div>
                    <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
                        Professional journey through innovative companies and challenging projects
                    </p>
                    <motion.div 
                        className="mt-4 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                    >
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
                        </svg>
                        <span className="text-green-400 text-sm font-medium">Growing expertise</span>
                    </motion.div>
                </motion.div>

                {/* Enhanced Timeline */}
                <motion.div 
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 transform -translate-x-1/2 hidden md:block"></div>
                    
                    <div className="space-y-12">
                        {workExperiencesData.map((experience, index) => {
                            const isEven = index % 2 === 0;
                            
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                                    animate={animations[index]}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group relative"
                                >
                                    {/* Timeline Item */}
                                    <div className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}>
                                        
                                        {/* Content Card */}
                                        <motion.div 
                                            className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}
                                            variants={itemVariants}
                                        >
                                            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 group-hover:scale-105">
                                                
                                                {/* Gradient Overlay */}
                                                <div 
                                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                                                    style={{ background: experience.gradient }}
                                                ></div>
                                                
                                                {/* Header */}
                                                <div className="relative z-10 mb-4">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <div className="flex items-center gap-3">
                                                            <div className="p-2 rounded-lg bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 group-hover:border-cyan-500/50 transition-all duration-300">
                                                                <svg className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                                                                    {experience.company}
                                                                </h3>
                                                                <p className="text-gray-400 text-sm">{experience.location}</p>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                                                </svg>
                                                                {experience.date}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                                                        {experience.title}
                                                    </h4>
                                                    
                                                    {/* Highlights */}
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {experience.highlights?.map((highlight, highlightIndex) => (
                                                            <span
                                                                key={highlightIndex}
                                                                className="inline-block px-3 py-1 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-full text-xs text-gray-300 hover:text-white hover:bg-gray-600/70 hover:border-cyan-500/50 transition-all duration-300"
                                                            >
                                                                {highlight}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <div className="relative z-10">
                                                    <ul className="space-y-2 text-sm text-gray-300">
                                                        {experience.description.map((desc, descIndex) => (
                                                            <li key={descIndex} className="flex items-start gap-2">
                                                                <svg className="w-3 h-3 text-cyan-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                                    <polyline points="12,5 19,12 12,19"></polyline>
                                                                </svg>
                                                                <span>{desc}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Hover Effect Glow */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                                            </div>
                                        </motion.div>

                                        {/* Timeline Dot */}
                                        <div className="relative z-10">
                                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-900 group-hover:scale-110 transition-transform duration-300">
                                                <div className="w-4 h-4 bg-white rounded-full"></div>
                                            </div>
                                        </div>

                                        {/* Spacer for mobile */}
                                        <div className="flex-1 md:hidden"></div>
                                    </div>
                                </motion.div>
                            );
                        })}
                </div>
                </motion.div>

                {/* Enhanced Bottom CTA */}
                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full">
                        <svg className="w-5 h-5 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0L9.937 15.5z"></path>
                        </svg>
                        <p className="text-gray-300 text-lg font-medium">
                            Continuously growing and taking on new challenges
                        </p>
                </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WorkExperiences;