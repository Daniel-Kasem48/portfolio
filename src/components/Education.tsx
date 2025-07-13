import { FC } from "react";
import Graduation from "../assets/icons/Graduation";

export interface IEducation {
    institution: string;
    title: string;
    date: string;
    certificateImage?: string; // URL or path to the certificate image
    color?: string;
    gradient?: string;
}

const Education: FC<{ education: IEducation }> = ({ education }) => {
    const { title, institution, date, certificateImage } = education;

    return (
        <div
            className="
                flex flex-col
                bg-gray-800 bg-opacity-80 backdrop-blur-md
                rounded-xl
                p-5
                text-white
                transition-all duration-300
                hover:bg-navy-blue hover:bg-opacity-90
                shadow-md hover:shadow-lg hover:shadow-cyan-500/20
            "
        >
            {/* Education Details */}
            <div className="flex items-center">
                <div className="mr-4">
                    <Graduation />
                </div>
                <div className="flex justify-between w-full">
                    <div>
                        <p className="font-bold text-lg">{institution}</p>
                        <p className="text-gray-300">{title}</p>
                    </div>
                    <div className="ml-auto text-sm text-gray-400">{date}</div>
                </div>
            </div>

            {/* Certificate Image and Link */}
            {certificateImage && (
                <div className="mt-4 flex flex-col items-center">
                    <img
                        src={certificateImage}
                        alt={`${title} Certificate from ${institution}`}
                        className="w-full max-w-[250px] h-auto rounded-lg border border-navy-blue shadow-sm object-cover"
                    />
                    <a
                        href={certificateImage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 underline transition-colors duration-300"
                    >
                        View Full Certificate
                    </a>
                </div>
            )}
        </div>
    );
};

export default Education;