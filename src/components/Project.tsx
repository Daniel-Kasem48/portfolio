import { FC } from "react";
import { motion } from "framer-motion";
import useModal from "../hooks/useModal.tsx";
import Carousel from "./Carousel.tsx";

export interface IProject {
    images: string[];
    title: string;
    stack: any[];
    link: string;
    description: string;
    category?: string;
    priority?: number;
}

const Project: FC<{ project: IProject }> = ({ project }) => {
    const { link, title, images, description, category, priority } = project;
    const [SliderModal, { open }] = useModal();
    const featuredImage = images.length > 0 ? images[0] : null;

    return (
        <div className="group relative rounded-2xl transition-all duration-500
            flex-col p-6 text-white border border-gray-700/50
            bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl
            hover:border-cyan-500/50 shadow-[0_8px_32px_0_rgba(58,199,255,0.25)] hover:shadow-cyan-500/20
            transform hover:-translate-y-2 h-full overflow-hidden">

            <SliderModal className="z-50">
                <Carousel slides={images} />
            </SliderModal>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            <div className="relative z-10 flex h-full flex-col justify-between">
                {/* Featured Image */}
                {featuredImage && (
                    <div className="mb-6 overflow-hidden rounded-xl">
                        <motion.img
                            src={featuredImage}
                            alt={`${title} preview`}
                            className="w-full h-48 object-cover
                                transform transition-transform duration-500
                                group-hover:scale-110"
                            loading="lazy"
                            whileHover={{ scale: 1.05 }}
                        />
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
                    </div>
                )}

                {/* Category Badge */}
                {category && (
                    <div className="mb-4">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-sm font-semibold tracking-wide text-cyan-200 uppercase">
                            {category}
                        </span>
                    </div>
                )}

                {/* Title */}
                <div className="mb-4">
                    <h3 className="text-2xl font-extrabold tracking-tight leading-tight
                        text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-blue-200
                        group-hover:from-cyan-200 group-hover:via-white group-hover:to-cyan-100 
                        transition-all duration-500">
                    {title}
                    </h3>
                </div>

                {/* Description */}
                <div className="mb-6 flex-grow">
                    <p className="text-gray-300 text-base leading-relaxed font-light tracking-wide line-clamp-4">
                        {description}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.slice(0, 4).map((skill, index) => (
                        <span
                            key={index}
                            className="inline-block px-3 py-2 bg-gradient-to-r from-gray-800/60 to-gray-700/60 backdrop-blur-sm 
                                border border-gray-600/40 rounded-lg text-sm font-medium tracking-wide text-gray-200 
                                hover:text-white hover:from-gray-700/80 hover:to-gray-600/80 hover:border-cyan-500/50 
                                transition-all duration-300 shadow-sm"
                        >
                            {skill}
                        </span>
                    ))}
                    {project.stack.length > 4 && (
                        <span className="inline-block px-3 py-2 bg-gradient-to-r from-gray-800/40 to-gray-700/40 backdrop-blur-sm 
                            border border-gray-600/30 rounded-lg text-sm font-medium tracking-wide text-gray-400">
                            +{project.stack.length - 4} more
                        </span>
                    )}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 justify-center">
                    {Boolean(images.length) && (
                        <motion.button
                            className="flex items-center justify-center gap-2.5 px-6 py-3
                                rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500
                                transition-all duration-300 text-white font-semibold tracking-wide shadow-lg shadow-cyan-500/25
                                hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105"
                            onClick={open}
                            title="show screenshots"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21,15 16,10 5,21"></polyline>
                            </svg>
                            <span className="text-base">Screenshots</span>
                        </motion.button>
                    )}

                    {Boolean(link) && (
                        <motion.a
                            className="flex items-center justify-center gap-2.5 px-6 py-3
                                rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500
                                transition-all duration-300 text-white font-semibold tracking-wide shadow-lg shadow-purple-500/25
                                hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105"
                            target="_blank"
                            href={link}
                            title="open website"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15,3 21,3 21,9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            <span className="text-base">Visit Site</span>
                        </motion.a>
                    )}
                </div>

                {/* Priority Indicator */}
                {priority && priority <= 2 && (
                    <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full">
                            <svg className="w-4 h-4 text-yellow-300 fill-current" fill="currentColor" viewBox="0 0 24 24">
                                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                            </svg>
                            <span className="text-sm text-yellow-200 font-semibold tracking-wide">Featured</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
    );
};

export default Project;