"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import SectionShell from "./SectionShell";

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
];

const OpenSourceCard: FC<{ project: OpenSourceProject; index: number }> = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative"
        >
            <div className="glass-card relative h-full overflow-hidden rounded-2xl p-6">
                {/* Header */}
                <div className="relative z-10 mb-6">
                    <div className="mb-4 flex items-center justify-between">
                        <div className="rounded-xl border border-white/10 bg-white/5 p-3 transition-colors duration-300 group-hover:border-aurora-cyan/40">
                            <svg className="h-6 w-6 text-aurora-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="h-4 w-4 text-aurora-fuchsia" fill="currentColor" viewBox="0 0 24 24">
                                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                            </svg>
                            <span className="text-sm text-slate-400">Open Source</span>
                        </div>
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-aurora-cyan">
                        {project.name}
                    </h3>

                    <p className="mb-4 text-sm leading-relaxed text-slate-300">
                        {project.description}
                    </p>
                </div>

                {/* Features List */}
                <div className="relative z-10 mb-6">
                    <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, featureIndex) => (
                            <span key={featureIndex} className="chip text-sm">
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="relative z-10 flex flex-wrap gap-3">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-medium text-white transition-all duration-300 hover:border-aurora-cyan/40 hover:bg-white/10"
                    >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        <span>GitHub</span>
                    </a>

                    {project.npm && (
                        <a
                            href={project.npm}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-aurora-cyan to-aurora-violet px-4 py-2 font-medium text-ink-950 transition-all duration-300 hover:opacity-90"
                        >
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-10.454v3.456h7.082l-.01 10.375H5.13z" />
                            </svg>
                            <span>NPM</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const OpenSource: FC = () => {
    return (
        <SectionShell
            id="opensource"
            track="OpenSource"
            eyebrow="Open Source"
            title="Open Source"
            subtitle="Contributing to the developer community with open-source tools and libraries"
        >
            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
                {projects.map((project, index) => (
                    <OpenSourceCard key={index} project={project} index={index} />
                ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3">
                    <svg className="mr-2 h-5 w-5 text-aurora-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0L9.937 15.5z"></path>
                    </svg>
                    <p className="text-lg font-medium text-slate-300">
                        Building tools that empower developers worldwide
                    </p>
                </div>
            </motion.div>
        </SectionShell>
    );
};

export default OpenSource;
