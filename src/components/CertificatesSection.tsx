'use client'
import CertificateCard, { certificates} from "./ICertificate";
import {FC, useRef, useEffect, useMemo} from "react";
import { motion } from "framer-motion";
import { usePostHogEvent } from '../hooks/usePostHogEvent';

// Lightweight Background Component
const OptimizedBackground: FC = () => {
    // Pre-calculate positions to avoid Math.random() on every render
    const floatingElements = useMemo(() => 
        Array.from({ length: 3 }, (_, i) => ({
            id: i,
            left: [25, 75, 50][i],
            top: [20, 80, 60][i],
            duration: [20, 25, 30][i],
            delay: [0, 5, 10][i]
        })), []
    );

    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Simple animated grid */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                    animation: 'gridMove 30s linear infinite'
                }}></div>
            </div>
            
            {/* Reduced floating elements */}
            {floatingElements.map((element) => (
                <motion.div
                    key={element.id}
                    className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
                    animate={{
                        y: [-10, 10, -10],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: element.duration,
                        repeat: Infinity,
                        delay: element.delay,
                        ease: "linear"
                    }}
                    style={{
                        left: `${element.left}%`,
                        top: `${element.top}%`,
                    }}
                />
            ))}
            
            <style>{`
                @keyframes gridMove {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(60px, 60px); }
                }
            `}</style>
        </div>
    );
};

const CertificatesSection: FC = () => {
    const certificatesRef = useRef<HTMLElement>(null);
    const track = usePostHogEvent();

    // Section view tracking
    useEffect(() => {
        const ref = certificatesRef.current;
        if (!ref) return;
        let hasTracked = false;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTracked) {
                    track('section_viewed', { section: 'Certificates' });
                    hasTracked = true;
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(ref);
        return () => observer.disconnect();
    }, [track]);

    return (
        <section id="certificates" ref={certificatesRef} className="pt-24 pb-20 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
            
            {/* Optimized Background Effect */}
            <OptimizedBackground />
            
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Enhanced Section Title */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Certificates
                        </h2>
                        <svg className="w-8 h-8 text-purple-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                    </div>
                    <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
                        Professional certifications and achievements that validate my expertise
                    </p>
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

                {/* Certificates Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, staggerChildren: 0.1 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                    }}
                >
                    {certificates.map((certificate) => (
                        <motion.div
                            key={certificate.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <CertificateCard certificate={certificate}/>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CertificatesSection;