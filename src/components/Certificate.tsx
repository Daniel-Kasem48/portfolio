import React from 'react';
import {getImage} from "./Projects.tsx";

export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    imageUrl: string; // URL to the certificate image or logo
    link: string; // URL to view/download the certificate
}

export const certificates: Certificate[] = [
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
        title: 'Prokoders Certificate', // Update this title if you have a specific one
        issuer: 'Prokoders', // Update the issuer if needed
        date: 'Mar 2023', // Update the date if needed
        imageUrl: getImage("certificates/prokoders.jpg"),
        link:""
    },
];

interface CertificateCardProps {
    certificate: Certificate;
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