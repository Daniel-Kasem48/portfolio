"use client";

import { FC } from "react";
import Link from "next/link";
import GitHub from "../assets/icons/Github";
import LinkedIn from "../assets/icons/LinkedIn";
import Stackoverflow from "../assets/icons/StackOverFlow";
import Email from "../assets/icons/Email";

const socials = [
    { icon: <GitHub />, href: "https://github.com/specture48", label: "GitHub" },
    { icon: <LinkedIn />, href: "https://www.linkedin.com/in/daniel-kasem-70bba9a4/", label: "LinkedIn" },
    { icon: <Stackoverflow />, href: "https://stackoverflow.com/users/21441411/daniel-kasem", label: "Stack Overflow" },
    { icon: <Email />, href: "mailto:daniel.f.kasem@gmail.com", label: "Email" },
];

const links = [
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/work-experiences", label: "Experience" },
    { href: "/certificates", label: "Certificates" },
];

const Footer: FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden border-t border-white/5 bg-ink-950">
            <div className="container mx-auto px-5 py-14 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">
                    {/* Brand */}
                    <div className="max-w-sm">
                        <Link href="/" className="flex items-center justify-center gap-1 text-2xl font-extrabold tracking-tight md:justify-start">
                            <span className="text-white">Daniel</span>
                            <span className="text-gradient">.</span>
                        </Link>
                        <p className="mt-3 text-sm leading-relaxed text-slate-400">
                            Backend &amp; AI Software Engineer building scalable platforms and production
                            AI integrations. Relocating to Dortmund, Germany.
                        </p>
                    </div>

                    {/* Quick links */}
                    <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                        {links.map((l) => (
                            <Link key={l.href} href={l.href} className="text-sm text-slate-400 transition-colors hover:text-aurora-cyan">
                                {l.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Socials */}
                    <div className="flex items-center gap-3">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-aurora-cyan/50 hover:text-aurora-cyan"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/5 pt-6 sm:flex-row sm:justify-between">
                    <p className="text-sm text-slate-500">© {year} Daniel Kasem. All rights reserved.</p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-aurora-cyan"
                    >
                        Back to top
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
