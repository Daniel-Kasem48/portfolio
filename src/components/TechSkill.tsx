import { motion } from "framer-motion";
import SectionShell from "./SectionShell";

export const techSkillsData = [
    {
        category: "Backend Development",
        skills: ["Python", "FastAPI", "Node.js", "TypeScript", "NestJS", "Express.js", "Laravel", "Go", "PHP"],
        color: "from-blue-500 to-cyan-500",
        proficiency: 95,
        gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)"
    },
    {
        category: "Frontend Development",
        skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML/CSS"],
        color: "from-purple-500 to-pink-500",
        proficiency: 85,
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)"
    },
    {
        category: "Databases & ORMs",
        skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "TypeORM", "MikroORM", "Eloquent", "Mongoose"],
        color: "from-green-500 to-emerald-500",
        proficiency: 90,
        gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
    },
    {
        category: "AI & Machine Learning",
        skills: ["Python AI", "FastAPI", "RAG (Retrieval-Augmented Generation)", "Qdrant Vector DB", "FAISS Vector Database", "Semantic Search", "AI Assistants", "LangChain", "OpenAI API", "Prompt Engineering", "Vector Embeddings"],
        color: "from-orange-500 to-red-500",
        proficiency: 92,
        gradient: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)"
    },
    {
        category: "Cloud & DevOps",
        skills: ["AWS (ECS, ECR, RDS)", "Docker", "CI/CD", "GitLab", "Microservices", "Containerization"],
        color: "from-indigo-500 to-blue-500",
        proficiency: 82,
        gradient: "linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)"
    },
    {
        category: "Real-Time & Communication",
        skills: ["WebSockets", "Socket.io", "WebRTC", "LiveKit", "FreeSWITCH", "SIP", "Firebase"],
        color: "from-yellow-500 to-orange-500",
        proficiency: 87,
        gradient: "linear-gradient(135deg, #eab308 0%, #f97316 100%)"
    },
    {
        category: "Integrations & APIs",
        skills: ["REST APIs", "GraphQL", "Payment Gateways", "IoT Integrations", "Calendar APIs", "Third-party Services"],
        color: "from-teal-500 to-cyan-500",
        proficiency: 85,
        gradient: "linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)"
    },
    {
        category: "Architecture & Patterns",
        skills: ["Microservices", "Event-Driven Architecture", "Multi-tenancy", "SaaS", "Clean Architecture", "API Design"],
        color: "from-gray-500 to-slate-500",
        proficiency: 90,
        gradient: "linear-gradient(135deg, #6b7280 0%, #475569 100%)"
    },
];

const TechSkillsSection = () => {
    return (
        <SectionShell
            id="skills"
            track="Tech Skills"
            eyebrow="Tech Stack"
            title="Tech Skills"
            subtitle="Full-stack expertise with cutting-edge technologies and modern development practices"
        >
            {/* Skills Grid */}
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {techSkillsData.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="glass-card group h-full p-6"
                    >
                        {/* Header */}
                        <div className="mb-5 flex items-center">
                            <div className="rounded-xl border border-white/10 bg-white/5 p-3 transition-colors duration-300 group-hover:border-aurora-cyan/40">
                                <svg
                                    className="h-6 w-6 transition-colors duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    style={{ stroke: "url(#skill-grad-" + index + ")" }}
                                >
                                    <defs>
                                        <linearGradient id={"skill-grad-" + index} x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="0%" stopColor="#22d3ee" />
                                            <stop offset="100%" stopColor="#8b5cf6" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M9 12l2 2 4-4"></path>
                                    <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"></path>
                                    <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"></path>
                                    <path d="M12 3c0 1-1 2-2 2s-2 1-2 2 1 2 2 2 2-1 2-2 1-2 2-2 2-1 2-2-1-2-2-2-2 1-2 2z"></path>
                                </svg>
                            </div>
                        </div>

                        <h3 className="mb-4 text-lg font-bold text-white">
                            {category.category}
                        </h3>

                        {/* Skills List */}
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="chip">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
                className="mt-14 text-center sm:mt-16"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="glass-card inline-flex items-center gap-2 rounded-full px-6 py-3">
                    <svg className="h-5 w-5 text-aurora-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0L9.937 15.5z"></path>
                    </svg>
                    <p className="text-sm font-medium text-slate-300 sm:text-base">
                        Continuously learning and adapting to new technologies
                    </p>
                </div>
            </motion.div>
        </SectionShell>
    );
};

export default TechSkillsSection;
