'use client'
import { useEffect, useRef} from "react";
import { motion } from "framer-motion";
import { usePostHogEvent } from '../hooks/usePostHogEvent';
import React from "react";

export const techSkillsData = [
    {
        category: "Backend Development",
        skills: ["Node.js", "TypeScript", "NestJS", "Express.js", "Laravel", "Go", "Python", "PHP"],
        color: "from-blue-500 to-cyan-500",
        proficiency: 95,
        gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)"
    },
    {
        category: "Frontend Development",
        skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML/CSS"],
        color: "from-purple-500 to-pink-500",
        proficiency: 85,
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)"
    },
    {
        category: "Databases & ORMs",
        skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "TypeORM", "MikroORM", "Eloquent", "Mongoose"],
        color: "from-green-500 to-emerald-500",
        proficiency: 90,
        gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
    },
    {
        category: "AI & Machine Learning",
        skills: ["OpenAI API", "RAG (Retrieval-Augmented Generation)", "LangChain", "Prompt Engineering", "AI Agents", "Autobots"],
        color: "from-orange-500 to-red-500",
        proficiency: 88,
        gradient: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)"
    },
    {
        category: "Cloud & DevOps",
        skills: ["AWS (ECS, ECR, RDS)", "Docker", "CI/CD", "GitLab", "Microservices", "Containerization"],
        color: "from-indigo-500 to-blue-500",
        proficiency: 82,
        gradient: "linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)"
    },
    {
        category: "Real-Time & Communication",
        skills: ["WebSockets", "Socket.io", "WebRTC", "LiveKit", "FreeSWITCH", "SIP", "Firebase"],
        color: "from-yellow-500 to-orange-500",
        proficiency: 87,
        gradient: "linear-gradient(135deg, #eab308 0%, #f97316 100%)"
    },
    {
        category: "Integrations & APIs",
        skills: ["REST APIs", "GraphQL", "Payment Gateways", "IoT Integrations", "Calendar APIs", "Third-party Services"],
        color: "from-teal-500 to-cyan-500",
        proficiency: 85,
        gradient: "linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)"
    },
    {
        category: "Architecture & Patterns",
        skills: ["Microservices", "Event-Driven Architecture", "Multi-tenancy", "SaaS", "Clean Architecture", "API Design"],
        color: "from-gray-500 to-slate-500",
        proficiency: 90,
        gradient: "linear-gradient(135deg, #6b7280 0%, #475569 100%)"
    },
];

const TechSkillsSection = () => {
    const skillsRef = useRef(null);
    const track = usePostHogEvent();
    const [isVisible, setIsVisible] = React.useState(false);

    // Animation state
    const [animations, setAnimations] = React.useState(techSkillsData.map(() => ({ opacity: 0, y: 50, scale: 0.9 })));

    useEffect(() => {
        if (window.innerWidth < 640) {
            setIsVisible(true);
            setAnimations(techSkillsData.map(() => ({ opacity: 1, y: 0, scale: 1 })));
            return;
        }
        const ref = skillsRef.current;
        if (!ref) return;
        let hasTracked = false;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTracked) {
                    setIsVisible(true);
                    setAnimations(techSkillsData.map(() => ({ opacity: 1, y: 0, scale: 1 })));
                    track('section_viewed', { section: 'Tech Skills' });
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
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

 

    const skillVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                type: "spring",
                stiffness: 200
            }
        }
    };

    return (
        <section id="skills" ref={skillsRef} className="pt-24 pb-20 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
            
            {/* Floating Particles Effect */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -100, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>
            
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
                            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0L9.937 15.5z"></path>
                        </svg>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Tech Skills
                        </h2>
                        <svg className="w-8 h-8 text-purple-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0L9.937 15.5z"></path>
                        </svg>
                    </div>
                    <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
                        Full-stack expertise with cutting-edge technologies and modern development practices
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
                        <span className="text-green-400 text-sm font-medium">Continuously evolving</span>
                    </motion.div>
                </motion.div>

                {/* Enhanced Skills Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    {techSkillsData.map((category, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                animate={animations[index]}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group relative"
                            >
                                {/* Enhanced Card */}
                                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full overflow-hidden transition-all duration-500 hover:border-cyan-500/50 shadow-[0_8px_32px_0_rgba(58,199,255,0.25)] hover:shadow-cyan-500/20 group-hover:scale-105">
                                    
                                    {/* Enhanced Gradient Overlay */}
                                    <div 
                                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                                        style={{ background: category.gradient }}
                                    ></div>
                                    
                                    {/* Enhanced Header */}
                                    <div className="relative z-10 mb-6">
                                        <div className="flex items-center mb-4">
                                            <div className="p-3 rounded-xl bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 group-hover:border-cyan-500/50 transition-all duration-300">
                                                <svg className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path d="M9 12l2 2 4-4"></path>
                                                    <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"></path>
                                                    <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"></path>
                                                    <path d="M12 3c0 1-1 2-2 2s-2 1-2 2 1 2 2 2 2-1 2-2 1-2 2-2 2-1 2-2-1-2-2-2-2 1-2 2z"></path>
                                                </svg>
                                            </div>
                </div>

                                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                                {category.category}
                            </h3>
                        </div>

                                    {/* Enhanced Skills List */}
                                    <div className="relative z-10">
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill, skillIndex) => (
                                                <motion.span
                                                    key={skillIndex}
                                                    variants={skillVariants}
                                                    className="inline-block px-3 py-1 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-full text-sm text-gray-300 hover:text-white hover:bg-gray-600/70 hover:border-cyan-500/50 transition-all duration-300 cursor-default"
                                                    whileHover={{ 
                                                        scale: 1.05,
                                                        backgroundColor: "rgba(6, 182, 212, 0.2)",
                                                        borderColor: "rgba(6, 182, 212, 0.5)"
                                                    }}
                                                >
                                                    {skill}
                                                </motion.span>
                    ))}
                </div>
                                    </div>

                                    {/* Enhanced Hover Effect Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                                    
                                    {/* Corner Accent */}
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                                            </motion.div>
                            );
                        })}
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
                            Continuously learning and adapting to new technologies
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechSkillsSection;