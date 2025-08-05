import {FC, useEffect, useRef, useState} from "react";
import { usePostHogEvent } from '../hooks/usePostHogEvent';
import  {IWorkExperience} from "./WorkExperience";

export const workExperiencesData: IWorkExperience[] = [
    {
        company: "CogentSoft",
        location: "Beirut, Lebanon",
        title: "Software Engineer",
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
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const ref = experiencesRef.current;
        if (!ref) return;
        let hasTracked = false;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTracked) {
                    track('section_viewed', { section: 'Work Experience' });
                    hasTracked = true;
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(ref);
        return () => observer.disconnect();
    }, [track]);

    return (
        <section id="work-experiences" ref={experiencesRef} className="pt-24 pb-20 sm:pt-28 sm:pb-20 md:pt-32 md:pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-bounce"></div>
                <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-r from-orange-500/15 to-red-500/15 rounded-full blur-2xl animate-bounce"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Creative Section Title */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <div className="relative inline-block">
                        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-4 sm:mb-6 animate-pulse">
                            Work Journey
                        </h2>
                        <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-4 h-4 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce"></div>
                        <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-3 h-3 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-gray-400 text-base sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed px-4">
                        My professional adventure through <span className="text-cyan-400 font-semibold">innovative companies</span> and <span className="text-purple-400 font-semibold">challenging projects</span>
                    </p>
                </div>

                {/* Creative Timeline */}
                <div className="relative">
                    {/* Floating Timeline Elements */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cyan-500 via-blue-500 via-purple-500 to-transparent transform -translate-x-1/2 hidden lg:block">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping"></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping"></div>
                    </div>

                    <div className="space-y-8 sm:space-y-12 lg:space-y-8 xl:space-y-10">
                        {workExperiencesData.map((experience, index) => {
                            const isEven = index % 2 === 0;
                            const isHovered = hoveredIndex === index;
                            
                            return (
                                <div 
                                    key={index} 
                                    className="group relative"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    {/* Creative Card Container */}
                                    <div className={`relative transform transition-all duration-700 ease-out ${
                                        isEven 
                                            ? 'lg:translate-x-0 hover:lg:translate-x-4' 
                                            : 'lg:translate-x-0 hover:lg:-translate-x-4'
                                    } ${isHovered ? 'scale-105' : 'scale-100'}`}>
                                        
                                        {/* Main Card */}
                                        <div className={`relative ${
                                            isEven ? 'lg:mr-auto lg:max-w-2xl' : 'lg:ml-auto lg:max-w-2xl'
                                        }`}>
                                            {/* Card Background with Creative Effects */}
                                            <div className="relative bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0_8px_32px_0_rgba(58,199,255,0.25)] overflow-hidden group-hover:border-cyan-500/50 transition-all duration-500">
                                                
                                                {/* Animated Background Pattern */}
                                                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 animate-pulse"></div>
                                                </div>

                                                {/* Floating Elements */}
                                                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce"></div>
                                                <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>

                                                {/* Header Section */}
                                                <div className="relative z-10 mb-4 sm:mb-6">
                                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                                                        <div className="flex items-center gap-3 sm:gap-4">
                                                            {/* Creative Company Icon */}
                                                            <div className="relative">
                                                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl sm:rounded-2xl border border-gray-600/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                                                                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                {/* Floating dots around icon */}
                                                                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-ping"></div>
                                                                <div className="absolute -bottom-1 -left-1 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
                                                            </div>
                                                            
                                                            <div className="flex-1 min-w-0">
                                                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 truncate">
                                                                    {experience.company}
                                                                </h3>
                                                                <p className="text-gray-400 text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
                                                                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                                    </svg>
                                                                    <span className="truncate">{experience.location}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        
                                                        {/* Creative Date Badge */}
                                                        <div className="relative self-start">
                                                            <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 border border-gray-600/50 rounded-xl sm:rounded-2xl px-3 py-1.5 sm:px-4 sm:py-2 group-hover:border-cyan-500/50 transition-colors duration-300">
                                                                <div className="flex items-center gap-1.5 sm:gap-2 text-cyan-400 text-xs sm:text-sm font-medium">
                                                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                                                    </svg>
                                                                    <span className="whitespace-nowrap">{experience.date}</span>
                                                                </div>
                                                            </div>
                                                            {/* Floating element on date */}
                                                            <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                                                        </div>
                                                    </div>
                                                    
                                                    <h4 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4">
                                                        {experience.title}
                                                    </h4>
                                                    
                                                    {/* Creative Highlights */}
                                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                                                        {experience.highlights?.map((highlight, highlightIndex) => (
                                                            <span
                                                                key={highlightIndex}
                                                                className="inline-block px-2.5 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-gray-700/50 to-gray-800/50 border border-gray-600/50 rounded-full text-xs sm:text-sm text-gray-300 group-hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20"
                                                            >
                                                                {highlight}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Description with Creative Bullets */}
                                                <div className="relative z-10">
                                                    <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                                                        {experience.description.map((desc, descIndex) => (
                                                            <li key={descIndex} className="flex items-start gap-2 sm:gap-3 group/item">
                                                                <div className="relative flex-shrink-0 mt-1">
                                                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                                                                    <div className="absolute inset-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping opacity-50"></div>
                                                                </div>
                                                                <span className="leading-relaxed group-hover/item:text-white transition-colors duration-300">{desc}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Creative Timeline Dot - Desktop */}
                                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
                                            <div className="relative">
                                                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center shadow-2xl border-4 border-gray-800 group-hover:border-cyan-500/50 transition-colors duration-500">
                                                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                                                        <div className="w-2 h-2 lg:w-3 lg:h-3 bg-white rounded-full"></div>
                                                    </div>
                                                </div>
                                                {/* Floating elements around dot */}
                                                <div className="absolute -top-1.5 -right-1.5 lg:-top-2 lg:-right-2 w-2 h-2 lg:w-3 lg:h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce"></div>
                                                <div className="absolute -bottom-1.5 -left-1.5 lg:-bottom-2 lg:-left-2 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                                            </div>
                                        </div>

                                  
                                    </div>
                                    
                                    {/* Creative Connecting Elements */}
                                    {index < workExperiencesData.length - 1 && (
                                        <div className="flex justify-center mt-6 mb-6 sm:mt-8 sm:mb-8 lg:mt-6 lg:mb-6 xl:mt-8 xl:mb-8">
                                            <div className="relative">
                                                <div className="w-0.5 sm:w-1 h-8 sm:h-12 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-4 sm:h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce"></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperiences;