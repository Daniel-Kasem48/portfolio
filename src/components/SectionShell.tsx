import { FC, ReactNode, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { usePostHogEvent } from "../hooks/usePostHogEvent";

interface SectionShellProps {
    id: string;
    /** PostHog section name; falls back to title */
    track?: string;
    eyebrow?: string;
    title: string;
    subtitle?: ReactNode;
    children: ReactNode;
    /** extra classes on the inner container */
    className?: string;
}

/**
 * Shared page/section wrapper that gives every section a consistent
 * dark aurora backdrop, faint grid, max-width container and an animated
 * heading block (eyebrow, gradient title, subtitle, divider).
 */
const SectionShell: FC<SectionShellProps> = ({
    id,
    track,
    eyebrow,
    title,
    subtitle,
    children,
    className = "",
}) => {
    const ref = useRef<HTMLElement>(null);
    const trackEvent = usePostHogEvent();

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        let done = false;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !done) {
                    trackEvent("section_viewed", { section: track || title });
                    done = true;
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [trackEvent, track, title]);

    return (
        <section
            id={id}
            ref={ref}
            className="relative isolate overflow-hidden aurora-bg min-h-screen pt-28 pb-20 sm:pt-32 sm:pb-24"
        >
            {/* faint moving grid */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
                style={{ backgroundSize: "56px 56px", animation: "gridMove 22s linear infinite" }}
            />

            <div className={`container relative z-10 mx-auto px-5 sm:px-6 lg:px-8 ${className}`}>
                {/* Heading */}
                <motion.header
                    className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    {eyebrow && (
                        <span className="mb-4 inline-block rounded-full border border-aurora-cyan/30 bg-aurora-cyan/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-aurora-cyan">
                            {eyebrow}
                        </span>
                    )}
                    <h2 className="text-headline font-extrabold text-white">
                        <span className="text-gradient">{title}</span>
                    </h2>
                    {subtitle && (
                        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
                            {subtitle}
                        </p>
                    )}
                    <div className="aurora-divider mx-auto mt-6" />
                </motion.header>

                {children}
            </div>
        </section>
    );
};

export default SectionShell;
