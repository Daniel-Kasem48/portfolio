import { FC } from "react";
import { motion } from "framer-motion";
import { IWorkExperience } from "./WorkExperience";
import SectionShell from "./SectionShell";

export const workExperiencesData: IWorkExperience[] = [
    {
        company: "Roamify Solution Inc",
        location: "Remote",
        title: "Software Engineer",
        date: "Nov 11, 2025 – Present",
        description: [
            "Worked on building a large travel platform service covering hotels, eSIMs, flights, and more.",
        ],
        highlights: ["Travel Platform", "Hotels", "eSIMs", "Flights"],
        color: "from-cyan-500 to-violet-500",
        gradient: "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)"
    },
    {
        company: "CogentSoft",
        location: "Beirut, Lebanon",
        title: "Software Engineer",
        date: "May 2022 – Nov 11, 2025",
        description: [
            "Developed and maintained microservices using NestJS, Node.js, and Golang to design scalable backend architectures and Restfull APIs.",
            "Containerized projects (React.js, Next.js, Nest.js, PHP) and established a CI/CD pipeline for seamless deployment to ECS servers.",
            "Used GitLab CI/CD for containerization, pushing images to Amazon ECR, and deploying on ECS tasks.",
            "Revamped legacy systems, improving API performance by 30% using profiling tools.",
            "Designed and implemented database and system architectures for ERP, Medical, E-commerce, and POS systems.",
            "Led a cross-functional team of frontend, backend, and mobile developers while optimizing SEO and website performance.",
            "Contributed to system analysis efforts and delivered high-performance solutions.",
        ],
        highlights: ["Microservices", "CI/CD", "Performance Optimization", "Team Leadership"],
        color: "from-blue-500 to-cyan-500",
        gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)"
    },
    {
        company: "Ordro",
        location: "Remote, Saudi Arabia, Jeddah",
        title: "Backend Engineer",
        date: "May 2022 – Jan 2024",
        description: [
            "Developed a B2B eCommerce platform using open-source Medusa.js.",
            "Converted the platform to a multitenant architecture, enabling scalability for multiple clients.",
            "Created two mobile applications: one for drivers and another for retailers.",
            "Designed and implemented a comprehensive dashboard for suppliers and super admins.",
            "Integrated ZATCA-compliant e-invoicing standards and BNPL (Buy Now, Pay Later) functionality.",
            "Leveraged Google's Optimization AI to solve the Vehicle Routing Problem (VRP), optimizing delivery routes.",
            "Developing A Point of Sale system designed for retailers"
        ],
        highlights: ["B2B E-commerce", "Multi-tenancy", "Mobile Apps", "AI Integration"],
        color: "from-purple-500 to-pink-500",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)"
    },
    {
        company: "Yawar",
        location: "Iraq",
        title: "Backend Developer",
        date: "May 2023 – Aug 2024",
        description: [
            "Led the conversion of a large JavaScript application to TypeScript, improving maintainability and performance.",
            "Implemented dependency injection and TypeORM for enhanced database management.",
            "Refactored complex, unstructured code into modular and scalable components, improving performance by 25%.",
        ],
        highlights: ["TypeScript Migration", "Code Refactoring", "Performance Optimization"],
        color: "from-green-500 to-emerald-500",
        gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
    },
    {
        company: "Prokoders",
        location: "Remote, United Arab Emirates",
        title: "Backend Developer",
        date: "Dec 2021 – Jan 2023",
        description: [
            "Worked extensively with Laravel on ERP systems, Learning Management Systems (LMS), and various websites.",
            "Developed core functionalities, optimized performance, and implemented scalable backend solutions.",
            "Expanded technical expertise by learning .NET Core, contributing to cross-platform application development.",
        ],
        highlights: ["Laravel", "ERP Systems", "LMS", ".NET Core"],
        color: "from-orange-500 to-red-500",
        gradient: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)"
    },
    {
        company: "Flexsol",
        location: "",
        title: "Fullstack Developer (Laravel / HTML / CSS / JS)",
        date: "Jan 2021 – Dec 2021",
        description: [
            "Designed and developed a comprehensive dashboard and API for a university library mobile app.",
            "Implemented features enabling the sale of lectures and video courses, as well as subject tests for student exam preparation.",
        ],
        highlights: ["Fullstack Development", "Mobile API", "E-learning"],
        color: "from-indigo-500 to-blue-500",
        gradient: "linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)"
    },
    {
        company: "Freelance",
        location: "Remote",
        title: "Backend Developer",
        date: "Various (2023 – 2025)",
        description: [
            "Worked as a freelance backend developer for multiple clients and projects, delivering scalable and robust solutions.",
            "• Numbers5 (Mar 2025 – Jul 2025): Developed and maintained backend services, integrated AI-powered features and automation flows for virtual phone number management.",
            "• CleanCody: Contributed to backend development and API integrations for e-commerce and automation projects."
        ],
        highlights: ["Freelance", "AI Integration", "Automation", "E-commerce"],
        color: "from-teal-500 to-cyan-500",
        gradient: "linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)"
    },
];

const WorkExperiences: FC = () => {
    return (
        <SectionShell
            id="work"
            track="Work Experiences"
            eyebrow="Career"
            title="Work Experience"
            subtitle={
                <>
                    My professional adventure through{" "}
                    <span className="text-aurora-cyan font-semibold">innovative companies</span> and{" "}
                    <span className="text-aurora-violet font-semibold">challenging projects</span>.
                </>
            }
        >
            <div className="relative mx-auto max-w-3xl">
                {/* Vertical timeline line */}
                <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-aurora-cyan to-aurora-violet sm:left-5" />

                <div className="space-y-8 sm:space-y-10">
                    {workExperiencesData.map((experience, index) => (
                        <motion.article
                            key={index}
                            className="relative pl-12 sm:pl-16"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Timeline node */}
                            <span className="absolute left-[9px] top-6 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-aurora-cyan to-aurora-violet ring-4 ring-ink-900 sm:left-[13px]" />

                            <div className="glass-card p-5 sm:p-7">
                                <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                                    <h3 className="text-lg font-bold text-white sm:text-xl">
                                        {experience.company}
                                    </h3>
                                    <span className="text-sm text-slate-400 whitespace-nowrap">
                                        {experience.date}
                                    </span>
                                </div>

                                <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                                    <span className="font-semibold text-aurora-cyan">{experience.title}</span>
                                    {experience.location && (
                                        <span className="text-slate-400">· {experience.location}</span>
                                    )}
                                </div>

                                {experience.highlights && experience.highlights.length > 0 && (
                                    <div className="mb-5 flex flex-wrap gap-2">
                                        {experience.highlights.map((highlight, highlightIndex) => (
                                            <span key={highlightIndex} className="chip">
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <ul className="space-y-2.5 text-sm text-slate-300">
                                    {experience.description.map((desc, descIndex) => (
                                        <li key={descIndex} className="flex items-start gap-3">
                                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-aurora-cyan to-aurora-violet" />
                                            <span className="leading-relaxed">{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </SectionShell>
    );
};

export default WorkExperiences;