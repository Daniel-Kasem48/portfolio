import {FC, useEffect, useRef} from "react";
import { motion } from "framer-motion";
import { usePostHogEvent } from '../hooks/usePostHogEvent';
import React from "react";
import {IEducation} from "./Education.tsx";
import {getImage} from "./Projects.tsx";

export const educationsData: IEducation[] = [
    {
        institution: "Syrian Virtual University",
        title: "Master's in Web Science",
        date: "Oct 2022 - Present",
        color: "from-blue-500 to-cyan-500",
        gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)"
    },
    {
        institution: "Tishreen University",
        title: "Bachelor of Informatics Engineering",
        date: "Sep 2016 - Dec 2022",
        certificateImage: getImage("certificates/graduation.jpeg"),
        color: "from-purple-500 to-pink-500",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)"
    },
];

const Educations: FC = () => {
    const educationsRef = useRef<HTMLDivElement>(null);
    const track = usePostHogEvent();
    const [isVisible, setIsVisible] = React.useState(false);

    useEffect(() => {
        if (window.innerWidth < 640) {
            setIsVisible(true);
            return;
        }
        const ref = educationsRef.current;
        if (!ref) return;
        let hasTracked = false;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTracked) {
                    setIsVisible(true);
                    track('section_viewed', { section: 'Education' });
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
                staggerChildren: 0.1,
                delayChildren: 0.2
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
        <section id="educations" ref={educationsRef} className="pt-24 pb-20 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
            
            {/* Floating Particles Effect */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(12)].map((_, i) => (
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
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                        </svg>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Education
                        </h2>
                        <svg className="w-8 h-8 text-purple-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                        </svg>
                    </div>
                    <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
                        Academic journey and continuous learning in technology and engineering
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
                        <span className="text-green-400 text-sm font-medium">Lifelong learning</span>
                    </motion.div>
                </motion.div>

                {/* Enhanced Education Timeline */}
                <motion.div 
                    className="relative max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 transform -translate-x-1/2 hidden md:block"></div>
                    
                    <div className="space-y-12">
                        {educationsData.map((education, index) => {
                            const isEven = index % 2 === 0;
                            
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="group relative"
                                >
                                    {/* Timeline Item */}
                                    <div className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}>
                                        
                                        {/* Content Card */}
                                        <motion.div 
                                            className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}
                                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                            animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                        >
                                            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 shadow-[0_8px_32px_0_rgba(58,199,255,0.25)] hover:shadow-cyan-500/20 group-hover:scale-105">
                                                
                                                {/* Gradient Overlay */}
                                                <div 
                                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                                                    style={{ background: education.gradient }}
                                                ></div>
                                                
                                                {/* Header */}
                                                <div className="relative z-10 mb-4">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <div className="flex items-center gap-3">
                                                            <div className="p-2 rounded-lg bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 group-hover:border-cyan-500/50 transition-all duration-300">
                                                                <svg className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                                                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                                                                    {education.institution}
                                                                </h3>
                                                                <p className="text-gray-400 text-sm">{education.title}</p>
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
                                                                {education.date}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Certificate Image */}
                                                {education.certificateImage && (
                                                    <div className="relative z-10">
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <div className="overflow-hidden rounded-lg w-16 h-16 flex-shrink-0">
                                                                <motion.img
                                                                    src={education.certificateImage}
                                                                    alt={`${education.title} Certificate from ${education.institution}`}
                                                                    className="w-full h-full rounded-lg border border-gray-600/50 group-hover:border-cyan-500/50 transition-all duration-300 object-cover"
                                                                    whileHover={{ scale: 1.05 }}
                                                                    loading="lazy"
                                                                />
                                                            </div>
                                                            <motion.a
                                                                href={education.certificateImage}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                                                                whileHover={{ scale: 1.05 }}
                                                                whileTap={{ scale: 0.95 }}
                                                            >
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                                                </svg>
                                                                View Certificate
                                                            </motion.a>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Hover Effect Glow */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                                            </div>
                                        </motion.div>


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
                            Continuously expanding knowledge and expertise
                        </p>
                </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Educations;