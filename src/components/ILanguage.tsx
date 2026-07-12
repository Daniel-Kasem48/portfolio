import React from 'react';
import { motion } from "framer-motion";
import { getImage } from "./Projects";

export interface ILanguage {
    id: number;
    name: string;
    proficiency: 'Native' | 'C2' | 'C1' | 'B2' | 'B1' | 'A2' | 'A1';
    description?: string;
    certificateImage?: string;
    certificateLink?: string;
    flag?: string;
}

export const languages: ILanguage[] = [
    {
        id: 1,
        name: 'Arabic',
        proficiency: 'Native',
        description: 'Native speaker',
        flag: '🇸🇾'
    },
    {
        id: 2,
        name: 'English',
        proficiency: 'C1',
        description: 'IELTS Academic Certified - Advanced proficiency',
        certificateImage: getImage("certificates/ielts-certificate.jpg"),
        certificateLink: getImage("certificates/ielts-certificate.pdf"),
        flag: '🇬🇧'
    },
    {
        id: 3,
        name: 'German',
        proficiency: 'A1',
        description: 'Beginner proficiency',
        flag: '🇩🇪'
    }
];

interface LanguageCardProps {
    language: ILanguage;
}

const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
        case 'Native':
            return 'from-emerald-500 to-green-600';
        case 'C2':
            return 'from-cyan-500 to-blue-600';
        case 'C1':
            return 'from-blue-500 to-indigo-600';
        case 'B2':
            return 'from-purple-500 to-indigo-500';
        case 'B1':
            return 'from-purple-500 to-pink-600';
        case 'A2':
            return 'from-orange-500 to-yellow-600';
        case 'A1':
            return 'from-red-500 to-orange-600';
        default:
            return 'from-gray-500 to-gray-600';
    }
};

const getProficiencyLevel = (proficiency: string) => {
    switch (proficiency) {
        case 'Native':
            return 100;
        case 'C2':
            return 95;
        case 'C1':
            return 85;
        case 'B2':
            return 75;
        case 'B1':
            return 60;
        case 'A2':
            return 40;
        case 'A1':
            return 20;
        default:
            return 0;
    }
};

const LanguageCard: React.FC<LanguageCardProps> = ({ language }) => {
    const proficiencyColor = getProficiencyColor(language.proficiency);
    const proficiencyLevel = getProficiencyLevel(language.proficiency);

    return (
        <motion.div 
            className="group relative rounded-2xl transition-all duration-500
                flex-col text-white border border-gray-700/50
                bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl
                hover:border-cyan-500/50 shadow-[0_8px_32px_0_rgba(58,199,255,0.25)] hover:shadow-cyan-500/20
                transform hover:-translate-y-2 overflow-hidden
                h-auto w-full flex flex-col"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            <div className="relative z-10 p-6">
                {/* Language Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                        {language.flag && (
                            <span className="text-4xl">{language.flag}</span>
                        )}
                        <div>
                            <h3 className="text-2xl font-extrabold tracking-tight leading-tight
                                text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-blue-200
                                group-hover:from-cyan-200 group-hover:via-white group-hover:to-cyan-100 
                                transition-all duration-500">
                                {language.name}
                            </h3>
                            {language.description && (
                                <p className="text-gray-400 text-sm mt-1">{language.description}</p>
                            )}
                        </div>
                    </div>
                    
                    {/* Proficiency Badge */}
                    <div className={`px-3 py-1.5 bg-gradient-to-r ${proficiencyColor} rounded-full`}>
                        <span className="text-sm text-white font-semibold tracking-wide">{language.proficiency}</span>
                    </div>
                </div>

                {/* Proficiency Bar */}
                <div className="mb-6">
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                        <motion.div
                            className={`h-full bg-gradient-to-r ${proficiencyColor} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${proficiencyLevel}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        />
                    </div>
                </div>

                {/* Certificate Preview if available */}
                {language.certificateImage && (
                    <div className="mb-4">
                        <a href={language.certificateLink || language.certificateImage} target="_blank" rel="noopener noreferrer">
                            <img
                                src={language.certificateImage}
                                alt={`${language.name} certificate`}
                                className="w-full h-32 object-cover rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105"
                                loading="lazy"
                            />
                        </a>
                    </div>
                )}

                {/* View Certificate Button */}
                {language.certificateLink && (
                    <motion.a
                        href={language.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2
                            rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500
                            transition-all duration-300 text-white font-semibold tracking-wide shadow-lg shadow-cyan-500/25
                            hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 w-full"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="text-sm">View Certificate</span>
                    </motion.a>
                )}
            </div>

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>
    );
};

export default LanguageCard;
