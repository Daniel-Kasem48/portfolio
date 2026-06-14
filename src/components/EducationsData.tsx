import { FC } from "react";
import { motion } from "framer-motion";
import { usePostHogEvent } from '../hooks/usePostHogEvent';
import { IEducation } from "./Education.tsx";
import { getImage } from "./Projects.tsx";
import SectionShell from "./SectionShell.tsx";

export const educationsData: IEducation[] = [
    {
        institution: "Syrian Virtual University",
        title: "Master's in Web Science",
        date: "Oct 2022 - Present",
        color: "from-blue-500 to-cyan-500",
        gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)"
    },
    {
        institution: "Tishreen University",
        title: "Bachelor of Informatics Engineering",
        date: "Sep 2016 - Dec 2022",
        certificateImage: getImage("certificates/graduation.jpeg"),
        color: "from-purple-500 to-pink-500",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)"
    },
];

const Educations: FC = () => {
    const track = usePostHogEvent();

    return (
        <SectionShell
            id="educations"
            track="Educations"
            eyebrow="Academics"
            title="Education"
            subtitle="Academic journey and continuous learning in technology and engineering"
        >
            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
                {educationsData.map((education, index) => (
                    <motion.div
                        key={index}
                        className="glass-card flex flex-col p-6"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="chip mb-4 self-start">{education.date}</span>

                        <h3 className="text-lg font-bold text-white">
                            {education.institution}
                        </h3>
                        <p className="mt-1 font-medium text-aurora-cyan">
                            {education.title}
                        </p>

                        {education.certificateImage && (
                            <div className="mt-4 flex items-center gap-3">
                                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-white/10">
                                    <motion.img
                                        src={education.certificateImage}
                                        alt={`${education.title} Certificate from ${education.institution}`}
                                        className="h-full w-full object-cover"
                                        whileHover={{ scale: 1.05 }}
                                        loading="lazy"
                                    />
                                </div>
                                <motion.a
                                    href={education.certificateImage}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-aurora-cyan transition-colors hover:text-aurora-violet"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => track('certificate_viewed', { section: 'Education', institution: education.institution })}
                                >
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                    View Certificate
                                </motion.a>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </SectionShell>
    );
};

export default Educations;
