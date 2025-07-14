import CertificateCard, {ICertificate, certificates} from "./ICertificate.tsx";
import {FC, useRef, useEffect} from "react";
import { motion } from "framer-motion";
import { usePostHogEvent } from '../hooks/usePostHogEvent';

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
            
            {/* Additional Floating Elements */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={`large-${i}`}
                    className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
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
            
            {/* Glowing Orbs */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`glow-${i}`}
                    className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400/40 to-purple-400/40 rounded-full blur-sm"
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
        <section id="certificates" ref={certificatesRef} className="py-20 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
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
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {certificates.map((certificate, index) => (
                        <motion.div
                            key={certificate.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
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