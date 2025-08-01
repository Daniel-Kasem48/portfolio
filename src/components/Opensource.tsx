import {FC, useEffect, useRef} from "react";
import { motion } from "framer-motion";
import { usePostHogEvent } from '../hooks/usePostHogEvent';
import React from "react";

interface OpenSourceProject {
    name: string;
    description: string;
    features: string[];
    github: string;
    npm?: string;
    stars?: number;
    downloads?: number;
    color?: string;
    gradient?: string;
}

const projects: OpenSourceProject[] = [
    {
        name: "Flowtify",
        description: "A flexible and robust TypeScript library for defining and executing workflows.",
        features: [
            "Sequential/parallel execution",
            "Compensation handling",
            "Dependency injection",
        ],
        github: "https://github.com/specture48/flowtify",
        npm: "https://www.npmjs.com/package/flowtify",
        color: "from-blue-500 to-cyan-500",
        gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)"
    },
    {
        name: "Medusa FCM Notification",
        description: "Firebase Cloud Messaging (FCM) notification provider for Medusa.",
        features: [
            "Push notifications for Medusa",
            "FCM integration",
            "Customizable channels",
        ],
        github: "https://github.com/specture48/medusa-fcm-notification",
        npm: "https://www.npmjs.com/package/medusa-fcm-notification",
        color: "from-purple-500 to-pink-500",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)"
    },
    {
        name: "Medusa Documents (Arabic Support Fork)",
        description: "A plugin for Medusa.js that generates PDF documents (e.g., invoices, packing slips) with added Arabic language support.",
        features: [
            "Arabic language support",
            "Invoice and packing slip generation",
            "Seamless Medusa.js integration",
        ],
        github: "https://github.com/specture48/medusa-documents-arabic",
        npm: "https://www.npmjs.com/package/medusa-documents-arabic",
        color: "from-green-500 to-emerald-500",
        gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
    },
    {
        name: "Medusa AI Shopping Assistant",
        description: "A conversational commerce plugin for Medusa.js that leverages AI to assist users in shopping, answering questions, and providing recommendations.",
        features: [
            "Conversational AI for e-commerce",
            "Medusa.js plugin integration",
            "Product recommendations and Q&A",
            "Open source TypeScript code"
        ],
        github: "https://github.com/specture48/medusa-ai-shopping-assistant",
        color: "from-orange-500 to-red-500",
        gradient: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)"
    },
    {
        name: "Medusa Abandoned Cart Recovery",
        description: "A plugin for Medusa.js that helps recover abandoned shopping carts through automated customer engagement.",
        features: [
            "Automated cart recovery",
            "Email notifications",
            "Customizable recovery strategies",
            "Analytics and insights"
        ],
        github: "https://github.com/specture48/medusa-abandoned-cart-recovery",
        color: "from-indigo-500 to-purple-500",
        gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
    },
    {
        name: "Medusa Twilio SMS",
        description: "A notification provider plugin for Medusa.js that enables SMS notifications through Twilio integration.",
        features: [
            "SMS notifications for Medusa",
            "Twilio integration",
            "Order updates via SMS",
            "Customizable notification templates"
        ],
        github: "https://github.com/specture48/medusa-twilio-sms",
        npm: "https://www.npmjs.com/package/medusa-twilio-sms",
        color: "from-red-500 to-orange-500",
        gradient: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)"
    },
];

const OpenSourceCard: FC<{ project: OpenSourceProject; index: number; isVisible: boolean }> = ({project, index, isVisible}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative"
        >
            {/* Enhanced Card */}
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full overflow-hidden transition-all duration-500 hover:border-cyan-500/50 shadow-[0_8px_32px_0_rgba(58,199,255,0.25)] hover:shadow-cyan-500/20 group-hover:scale-105">
                
                {/* Enhanced Gradient Overlay */}
                <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                    style={{ background: project.gradient }}
                ></div>
                
                {/* Enhanced Header */}
                <div className="relative z-10 mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 group-hover:border-cyan-500/50 transition-all duration-300">
                            <svg className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                                </svg>
                                <span className="text-sm text-gray-400">Open Source</span>
                            </div>
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                        {project.name}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {project.description}
                    </p>
                </div>

                {/* Enhanced Features List */}
                <div className="relative z-10 mb-6">
                    <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, featureIndex) => (
                            <motion.span
                                key={featureIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.3, delay: index * 0.05 + featureIndex * 0.1 }}
                                className="inline-block px-3 py-1 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-full text-sm text-gray-300 hover:text-white hover:bg-gray-600/70 hover:border-cyan-500/50 transition-all duration-300 cursor-default"
                                whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: "rgba(6, 182, 212, 0.2)",
                                    borderColor: "rgba(6, 182, 212, 0.5)"
                                }}
                            >
                                {feature}
                            </motion.span>
                ))}
                    </div>
                </div>

                {/* Enhanced Buttons */}
                <div className="relative z-10 flex flex-wrap gap-3">
                    <motion.a
                    href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 transition-all duration-300 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        <span>GitHub</span>
                    </motion.a>
                    
                    {project.npm && (
                        <motion.a
                            href={project.npm}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 transition-all duration-300 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-10.454v3.456h7.082l-.01 10.375H5.13z"/>
                            </svg>
                            <span>NPM</span>
                        </motion.a>
                )}
                </div>

                {/* Enhanced Hover Effect Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
        </motion.div>
    );
};

const OpenSource: FC = () => {
    const openSourceRef = useRef(null);
    const track = usePostHogEvent();
    const [isVisible, setIsVisible] = React.useState(false);

    useEffect(() => {
        if (window.innerWidth < 640) {
            setIsVisible(true);
            return;
        }
        const ref = openSourceRef.current;
        if (!ref) return;
        let hasTracked = false;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTracked) {
                    setIsVisible(true);
                    track('section_viewed', { section: 'Open Source' });
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

    return (
        <section id="opensource" ref={openSourceRef} className="pt-24 pb-20 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
            
            {/* Floating Particles Effect */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
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
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Open Source
                        </h2>
                        <svg className="w-8 h-8 text-purple-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </div>
                    <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
                        Contributing to the developer community with open-source tools and libraries
                    </p>
                    <motion.div 
                        className="mt-4 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                    >
                        <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <span className="text-green-400 text-sm font-medium">Free and open for everyone</span>
                    </motion.div>
                </motion.div>

                {/* Enhanced Projects Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    {projects.map((project, index) => (
                        <OpenSourceCard 
                            key={index} 
                            project={project} 
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
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
                            Building tools that empower developers worldwide
                        </p>
                </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OpenSource;