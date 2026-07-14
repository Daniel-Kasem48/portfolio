"use client";

import { FC, useEffect, useRef } from "react";
import Link from "next/link";
import Email from "../assets/icons/Email";
import Phone from "../assets/icons/Phone";
import WhatsApp from "../assets/icons/WhatsApp";
import LinkedIn from "../assets/icons/LinkedIn";
import Location from "../assets/icons/Location";
import DateIcon from "../assets/icons/Date";
import Stackoverflow from "../assets/icons/StackOverFlow";
import GitHub from "../assets/icons/Github";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { usePostHogEvent } from "../hooks/usePostHogEvent";
import { getImage } from "./Projects";

export const bioText = `Full-Stack Developer specializing in Python AI solutions and backend architecture. Expert in building RAG systems with FastAPI, implementing semantic search using FAISS vector databases, and developing intelligent AI assistants. Experienced in Python, Node.js (Express, NestJS), Laravel, and Golang for comprehensive backend development. Proficient in React.js for building responsive UIs. Passionate about clean architecture, scalable APIs, real-time systems, and cutting-edge AI technologies.`;

const stats = [
    { value: "5+", label: "Years building" },
    { value: "20+", label: "Projects shipped" },
    { value: "8+", label: "Tech stacks" },
];

const highlights = ["Python AI Expert", "RAG Systems", "Semantic Search", "AI Assistants"];

const socials = [
    { icon: <GitHub />, href: "https://github.com/specture48", label: "GitHub" },
    { icon: <LinkedIn />, href: "https://www.linkedin.com/in/daniel-kasem-70bba9a4/", label: "LinkedIn" },
    { icon: <Stackoverflow />, href: "https://stackoverflow.com/users/21441411/daniel-kasem", label: "Stack Overflow" },
    { icon: <Email />, href: "mailto:daniel.f.kasem@gmail.com", label: "Email" },
];

const Bio: FC = () => {
    const ref = useRef<HTMLElement>(null);
    const track = usePostHogEvent();

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        let done = false;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !done) {
                    track("section_viewed", { section: "About Me" });
                    done = true;
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [track]);

    const contactItems = [
        { icon: <Email />, text: "daniel.f.kasem@gmail.com", href: "mailto:daniel.f.kasem@gmail.com" },
        { icon: <Phone />, text: "(+963) 931 869 085", href: "tel:+963931869085", mono: true },
        { icon: <WhatsApp />, text: "(+963) 931 869 085", href: "https://wa.me/+963931869085", target: "_blank", mono: true },
        {
            icon: <Location />,
            text: (
                <>
                    <a href="https://www.google.com/maps/place/Latakia,+Syria" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Syria, Latakia
                    </a>
                    <span className="ml-2 text-xs italic text-aurora-cyan">(Willing to relocate)</span>
                </>
            ),
        },
        { icon: <DateIcon />, text: "March 22, 1999" },
        { icon: <LinkedIn />, text: "/in/daniel-kasem", href: "https://www.linkedin.com/in/daniel-kasem-70bba9a4/", target: "_blank" },
        { icon: <GitHub />, text: "specture48", href: "https://github.com/specture48", target: "_blank" },
        { icon: <Stackoverflow />, text: "daniel-kasem", href: "https://stackoverflow.com/users/21441411/daniel-kasem", target: "_blank" },
    ];

    return (
        <section
            id="aboutme"
            ref={ref}
            className="relative isolate min-h-screen overflow-hidden aurora-bg pb-24 pt-28 sm:pt-32"
        >
            {/* faint grid */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
                style={{ backgroundSize: "56px 56px", animation: "gridMove 22s linear infinite" }}
            />

            <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8">
                {/* ===== HERO ===== */}
                <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
                    {/* Left: text */}
                    <motion.div
                        className="order-2 text-center lg:order-1 lg:col-span-7 lg:text-left"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h1 className="text-display font-extrabold leading-none text-white">
                            Daniel Kasem
                        </h1>

                        <div className="mt-3 flex items-center justify-center gap-2 text-xl font-semibold sm:text-2xl lg:justify-start">
                            <span className="text-slate-400">I build</span>
                            <span className="text-gradient">
                                <Typewriter
                                    options={{
                                        loop: true,
                                        delay: 55,
                                        deleteSpeed: 30,
                                        strings: [
                                            "AI-powered systems",
                                            "RAG pipelines",
                                            "scalable APIs",
                                            "semantic search",
                                            "real-time apps",
                                        ],
                                        autoStart: true,
                                    }}
                                />
                            </span>
                        </div>

                        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0">
                            Full-Stack Developer specializing in Python AI, RAG systems, and backend
                            architecture — turning complex problems into clean, scalable products.
                        </p>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-aurora-cyan to-aurora-violet px-6 py-3 text-sm font-semibold text-ink-950 transition-all duration-300 hover:shadow-glow-cyan hover:brightness-110"
                            >
                                View Projects
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                            <a
                                href="/cv.pdf"
                                download="Daniel-Kasem-CV.pdf"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-aurora-cyan/50 hover:bg-white/10"
                            >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download Resume
                            </a>
                        </div>

                        {/* Socials */}
                        <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-aurora-cyan/50 hover:text-aurora-cyan"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: portrait */}
                    <motion.div
                        className="order-1 flex justify-center lg:order-2 lg:col-span-5"
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                    >
                        <div className="relative">
                            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-aurora-cyan/30 via-aurora-violet/20 to-aurora-fuchsia/30 opacity-70 blur-3xl" />
                            <div className="glass-card relative overflow-hidden rounded-[1.75rem] p-2">
                                <img
                                    src={getImage("/my_image.webp")}
                                    alt="Daniel Kasem"
                                    className="h-72 w-64 rounded-[1.4rem] object-cover sm:h-96 sm:w-80"
                                    draggable={false}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ===== STATS ===== */}
                <motion.div
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {stats.map((s) => (
                        <div key={s.label} className="glass-card rounded-2xl p-5 text-center">
                            <p className="text-3xl font-extrabold text-gradient sm:text-4xl">{s.value}</p>
                            <p className="mt-1 text-xs text-slate-400 sm:text-sm">{s.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* ===== ABOUT ===== */}
                <div className="mt-24 text-center">
                    <span className="mb-4 inline-block rounded-full border border-aurora-violet/30 bg-aurora-violet/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-aurora-violet">
                        About Me
                    </span>
                    <h2 className="text-headline font-extrabold text-white">
                        <span className="text-gradient">Who I Am</span>
                    </h2>
                    <div className="aurora-divider mx-auto mt-6" />
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-5">
                    {/* Summary */}
                    <motion.div
                        className="glass-card p-7 sm:p-9 lg:col-span-3"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="mb-5 flex items-center gap-3 text-xl font-bold text-white">
                            <svg className="h-6 w-6 text-aurora-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Professional Summary
                        </h3>
                        <blockquote className="border-l-2 border-aurora-cyan/60 pl-5 text-base font-light leading-relaxed text-slate-300 sm:text-lg">
                            {bioText}
                        </blockquote>
                        <div className="mt-7 flex flex-wrap gap-2.5">
                            {highlights.map((h) => (
                                <span key={h} className="chip">
                                    <svg className="h-3.5 w-3.5 text-aurora-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {h}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        className="glass-card p-7 sm:p-9 lg:col-span-2"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="mb-5 flex items-center gap-3 text-xl font-bold text-white">
                            <svg className="h-6 w-6 text-aurora-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Get in Touch
                        </h3>
                        <div className="space-y-1">
                            {contactItems.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-white/5">
                                    <span className="flex-shrink-0 text-aurora-cyan">{item.icon}</span>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target={item.target || "_self"}
                                            rel={item.target ? "noopener noreferrer" : undefined}
                                            className={`break-all text-sm text-slate-300 transition-colors hover:text-white ${item.mono ? "font-firamono tabular-nums text-aurora-cyan" : ""}`}
                                        >
                                            {item.text}
                                        </a>
                                    ) : (
                                        <span className="text-sm text-slate-300">{item.text}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Bio;
