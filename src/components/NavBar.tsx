"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
    { href: "/", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/opensource", label: "Open Source" },
    { href: "/work-experiences", label: "Experience" },
    { href: "/educations", label: "Education" },
    { href: "/certificates", label: "Certificates" },
    { href: "/languages", label: "Languages" },
    { href: "/challenges", label: "Challenges" },
];

const NavBar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Lock body scroll while the mobile drawer is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Close drawer on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Subtle elevation once scrolled
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isActive = (href: string) => pathname === href;

    return (
        <header
            className={`fixed top-0 z-[90] w-full transition-all duration-300 ${
                scrolled
                    ? "glass border-b border-white/5 shadow-glass"
                    : "border-b border-transparent bg-transparent"
            }`}
        >
            <nav className="container mx-auto flex h-[72px] items-center justify-between px-5 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-1 text-2xl font-extrabold tracking-tight">
                    <span className="text-white transition-colors group-hover:text-aurora-cyan">Daniel</span>
                    <span className="text-gradient">.</span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden items-center gap-1 lg:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                                isActive(item.href)
                                    ? "text-white"
                                    : "text-slate-400 hover:text-white"
                            }`}
                        >
                            {item.label}
                            {isActive(item.href) && (
                                <motion.span
                                    layoutId="nav-active"
                                    className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-aurora-line"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                    <a
                        href="/cv.pdf"
                        download="Daniel-Kasem-CV.pdf"
                        className="ml-3 inline-flex items-center gap-2 rounded-xl border border-aurora-cyan/40 bg-aurora-cyan/10 px-4 py-2 text-sm font-semibold text-aurora-cyan transition-all duration-300 hover:bg-aurora-cyan hover:text-ink-950 hover:shadow-glow-cyan"
                    >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Resume
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    className="relative flex h-11 w-11 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/5 lg:hidden"
                    onClick={() => setIsOpen((v) => !v)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <div className="relative flex h-5 w-6 flex-col justify-center">
                        <span className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-1.5"}`} />
                        <span className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                        <span className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-1.5"}`} />
                    </div>
                </button>
            </nav>

            {/* Mobile drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 top-[72px] z-40 bg-black/60 backdrop-blur-sm lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            className="fixed inset-x-0 top-[72px] z-50 max-h-[calc(100vh-72px)] overflow-y-auto glass border-t border-white/5 lg:hidden"
                            initial={{ opacity: 0, y: -16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="flex flex-col gap-1 px-4 py-5">
                                <a
                                    href="/cv.pdf"
                                    download="Daniel-Kasem-CV.pdf"
                                    className="mb-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-aurora-cyan to-aurora-violet px-4 py-3 text-sm font-semibold text-ink-950 transition-opacity hover:opacity-90"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Download Resume
                                </a>
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                                            isActive(item.href)
                                                ? "bg-aurora-cyan/10 text-aurora-cyan"
                                                : "text-slate-300 hover:bg-white/5 hover:text-white"
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                        <svg className="h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default NavBar;
