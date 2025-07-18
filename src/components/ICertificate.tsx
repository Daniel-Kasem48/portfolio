import React from 'react';
import { motion } from "framer-motion";
import {getImage} from "./Projects.tsx";

export interface ICertificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    imageUrl: string; // URL to the certificate image or logo
    link: string; // URL to view/download the certificate
    details?: string; // Optional details about the certificate
}

export const certificates: ICertificate[] = [
    {
        id: 1,
        title: 'AWS Cloud Technical Essentials',
        issuer: 'Amazon Web Services',
        date: 'September 2024',
        imageUrl: getImage("certificates/certificate-for-aws-cloud-technical-essentials.jpeg"),
        link: 'https://www.coursera.org/account/accomplishments/verify/0YN4W8W5M2ZW'
    },
    {
        id: 2,
        title: 'Getting Started with Go',
        issuer: 'University of California, Irvine',
        date: 'August 2024',
        imageUrl: getImage("certificates/certificate-for-getting-started-with-go.jpeg"),
        link: 'https://www.coursera.org/account/accomplishments/verify/T5W75ZHHU0UM'
    },
    {
        id: 3,
        title: 'Introduction to MongoDB',
        issuer: 'MongoDB Inc.',
        date: 'March 11, 2025',
        imageUrl: getImage("certificates/mongodb-intro.jpeg"),
        link: 'https://www.coursera.org/account/accomplishments/verify/I83NW1UK5NMU'
    },
    {
        id: 4,
        title: 'Introduction to Agile Development and Scrum',
        issuer: 'IBM',
        date: 'March 11, 2025',
        imageUrl: getImage("certificates/intro-to-agile-development-and-scrum.jpeg"),
        link: 'https://www.coursera.org/account/accomplishments/verify/6XM22UN91CH2'
    },
    {
        id: 7,
        title: 'Generative AI and LLMs: Architecture and Data Preparation',
        issuer: 'IBM',
        date: 'June 30 2025',
        imageUrl: getImage("certificates/generativeAi.jpeg"),
        link: 'https://www.coursera.org/account/accomplishments/certificate/JI27WBVBQRN2'
    },
    {
        id: 6,
        title: 'Prokoders Certificate',
        issuer: 'Prokoders',
        date: 'March 2022',
        imageUrl: getImage("certificates/prokoders.jpg"),
        link: ''
    },
    {
        id: 5,
        title: 'IELTS Writing Section Skills Mastery',
        issuer: 'University of California, Irvine',
        date: 'March 10, 2025',
        imageUrl: getImage("certificates/ielts-writing-section-skills-mastery.jpeg"),
        link: 'https://www.coursera.org/account/accomplishments/verify/7WMZFRXJR5L1'
    },
    {
        id: 8,
        title: 'Advanced Prompt Engineering for Everyone',
        issuer: 'Vanderbilt University',
        date: 'July 5, 2025',
        imageUrl: getImage("certificates/certificate-advanced-prompt-engineering-for-everyone.jpeg"),
        link: 'https://www.coursera.org/account/accomplishments/verify/Y07ZZPJ21GYZ',
    },
    {
        id: 9,
        title: 'Fundamentals of AI Agents Using RAG and LangChain',
        issuer: 'IBM',
        date: 'July 6, 2025',
        imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~LFRGQD2EIQ2W/CERTIFICATE_LANDING_PAGE~LFRGQD2EIQ2W.jpeg',
        link: 'https://www.coursera.org/account/accomplishments/verify/LFRGQD2EIQ2W',
    },
    {
        id: 10,
        title: 'Develop Generative AI Applications: Get Started',
        issuer: 'IBM',
        date: 'July 2025',
        imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~LFRGQD2EIQ2W/CERTIFICATE_LANDING_PAGE~LFRGQD2EIQ2W.jpeg',
        link: 'https://www.coursera.org/learn/develop-generative-ai-applications-get-started?utm_source=IBM&utm_medium=institutions&utm_campaign=IBMBadge',
    },
];

interface CertificateCardProps {
    certificate: ICertificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({certificate}) => {
    return (
        <motion.div 
            className="group relative rounded-2xl transition-all duration-500
                flex-col text-white border border-gray-700/50
                bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl
                hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20
                transform hover:-translate-y-2 overflow-hidden
                h-[400px] w-full flex flex-col"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            <div className="relative z-10">
                {/* Certificate Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                    <motion.img
                src={certificate.imageUrl}
                alt={certificate.title}
                        className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Certificate Badge */}
                    <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-full">
                            <svg className="w-4 h-4 text-green-300 fill-current" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                            </svg>
                            <span className="text-sm text-green-200 font-semibold tracking-wide">Verified</span>
                        </div>
                    </div>
                </div>

                {/* Certificate Details */}
                <div className="p-6 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-xl font-extrabold tracking-tight leading-tight mb-4
                        text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-blue-200
                        group-hover:from-cyan-200 group-hover:via-white group-hover:to-cyan-100 
                        transition-all duration-500">
                        {certificate.title}
                    </h3>

                    {/* Issuer */}
                    <div className="flex items-center gap-2 mb-3">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <p className="text-gray-300 text-sm font-medium">{certificate.issuer}</p>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 mb-4">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-gray-400 text-sm">{certificate.date}</p>
                    </div>

                    {/* Details */}
                    {certificate.details && (
                        <div className="mb-4">
                            <p className="text-gray-400 text-xs leading-relaxed font-light tracking-wide">
                                {certificate.details}
                            </p>
                        </div>
                    )}

                    {/* View Certificate Button */}
                    {Boolean(certificate.link) && (
                        <motion.a
                            href={certificate.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2
                                rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500
                                transition-all duration-300 text-white font-semibold tracking-wide shadow-lg shadow-cyan-500/25
                                hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 mt-auto"
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
            </div>

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>
    );
};

export default CertificateCard;