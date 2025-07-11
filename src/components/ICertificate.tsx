import React from 'react';
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
        details: '7 hours (approximately) | Grade Achieved: 100% | Coursera certifies successful completion.'
    },
];


interface CertificateCardProps {
    certificate: ICertificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({certificate}) => {
    return (
        <div className="bg-[black] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
                src={certificate.imageUrl}
                alt={certificate.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                <p className="text-gray-600 mb-1">Issued by: {certificate.issuer}</p>
                <p className="text-gray-600 mb-4">Date: {certificate.date}</p>

                {Boolean(certificate.link)
                    &&
                    (
                        <a
                            href={certificate.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline "
                        >
                            View Certificate
                        </a>

                    )
                }

            </div>
        </div>
    );
};

export default CertificateCard;