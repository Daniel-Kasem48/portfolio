"use client";

import LanguageCard, { languages } from "./ILanguage";
import { FC } from "react";
import { motion } from "framer-motion";
import SectionShell from "./SectionShell";

const LanguagesSection: FC = () => {
    return (
        <SectionShell
            id="languages"
            track="Languages"
            eyebrow="Communication"
            title="Languages"
            subtitle="Language proficiencies that enable global communication and collaboration"
        >
            <motion.div
                className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                {languages.map((language, index) => (
                    <motion.div
                        key={language.id}
                        className="glass-card overflow-hidden"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <LanguageCard language={language} />
                    </motion.div>
                ))}
            </motion.div>
        </SectionShell>
    );
};

export default LanguagesSection;
