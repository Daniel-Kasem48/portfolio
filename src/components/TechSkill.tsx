import {ReactNode, useEffect, useRef} from "react";
import NewSkills from "./NewSkills.tsx";
import { usePostHogEvent } from '../hooks/usePostHogEvent';
import useIntersectionObserver from '../hooks/use-intersection-observer';
import React from "react";

export const techSkillsData = [
    {
        category: "Languages",
        skills: ["JavaScript", "TypeScript", "Node.js", "Go", "Python", "PHP"],
    },
    {
        category: "Frameworks & Libraries",
        skills: ["NestJS", "ExpressJS", "Laravel", "Django", "FastApi", "Echo"],
    },
    {
        category: "Databases",
        skills: ["MongoDB", "PostgreSQL", "MySQL", "RDS", "REDIS"],
    },
    {
        category: "Messaging & Streaming",
        skills: ["RabbitMQ", "Redis", "MQTT"],
    },
    {
        category: "Real-Time Communication",
        skills: ["LiveKit", "FreeSWITCH", "WebRTC", "SIP"],
    },
    {
        category: "AI & Automation Tools",
        skills: [
            "Autobots", "CursorIDE", "RAG", "OpenAI", "Prompt Engineering"
        ],
    },
    {
        category: "Integrations",
        skills: [
            "IOT Integrations: Airthings, Webex, Cisco, Salto Lockers",
            "Calendar Integrations: Google Calendar, Office365 Calendar, MsExchange",
            "Payment Gateways: Stripe, PerfectMoney, Tasdid, Switch, ZainCash, Paypal",
        ],
    },
    {
        category: "ORMS",
        skills: ["TypeORM", "MikroORM", "DjangoORM", "Mongoose", "Eloquent", "SQLC"],
    },
    {
        category: "RealTime And Push Notifications",
        skills: ["Websockets", "Firebase", "MQTT"],
    },
];

const TechSkillsSection = () => {
    const categoryIcons:{
        [key in string]: ReactNode;
    } = {
        "Databases": (
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        ),
        "Languages": (
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        "Frameworks & Libraries": (
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        "ORMS": (
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
        "Integrations": (
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
            </svg>
        ),
        "RealTime And Push Notifications": (
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
        ),
    }

    const skillsRef = useRef(null);
    const track = usePostHogEvent();
    const [isVisible, setIsVisible] = React.useState(true);
    useEffect(() => {
        // Only enable observer and analytics on screens >= 640px (sm)
        if (window.innerWidth < 640) {
            setIsVisible(true);
            return;
        }
        setIsVisible(false);
        const ref = skillsRef.current;
        if (!ref) return;
        let hasTracked = false;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTracked) {
                    setIsVisible(true);
                    track('section_viewed', { section: 'Tech Skills' });
                    hasTracked = true;
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(ref);
        return () => observer.disconnect();
    }, [track]);

    return (
        <section id="skills" ref={skillsRef} className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="container mx-auto px-2 sm:px-4">
                {/* Section Title */}
                <div className="container mx-auto">
                    <p
                        className="
          text-3xl sm:text-4xl md:text-6xl lg:text-8xl
    w-full
    mt-6
    text-center
    font-extrabold
    mb-4
    text-navy-blue
    bg-black
    border-b-4 border-cyan-500
    tracking-tight
    shadow-lg
    inline-block
  "
                    >
                        Tech Skills
                    </p>
                </div>

                {/* Grid */}
                <div className={`grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                    {techSkillsData.map((category, index) => (
                        <div
                            key={index}
                            className="group bg-gray-800 bg-opacity-80 backdrop-blur-md p-3 sm:p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:z-10 hover:shadow-cyan-500/30"
                        >
                            {/* Category Title */}
                            <h3 className="text-base sm:text-lg font-semibold text-cyan-400 mb-2 flex items-center justify-center group-hover:text-cyan-300 transition-colors duration-300">
                                {
                                    categoryIcons[category.category]
                                }
                                {category.category}
                            </h3>

                            {/* Skills List */}
                            <ul className="space-y-1 text-sm sm:text-base text-gray-400">
                                <NewSkills skills={category.skills}/>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechSkillsSection;