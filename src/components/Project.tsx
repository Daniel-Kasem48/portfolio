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
        <div className="group glass-card flex h-full flex-col overflow-hidden p-5 hover:-translate-y-1.5">

            <SliderModal className="z-50">
                <Carousel slides={images} />
            </SliderModal>

            <div className="relative z-10 flex h-full flex-col">
                {/* Featured Image */}
                {featuredImage && (
                    <div className="relative mb-5 overflow-hidden rounded-xl border border-white/5">
                        <motion.img
                            src={featuredImage}
                            alt={`${title} preview`}
                            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    </div>
                )}

                {/* Category Badge */}
                {category && (
                    <div className="mb-3">
                        <span className="chip uppercase tracking-wide text-aurora-cyan">
                            {category}
                        </span>
                    </div>
                )}

                {/* Title */}
                <h3 className="mb-3 text-xl font-extrabold leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-aurora-cyan">
                    {title}
                </h3>

                {/* Description */}
                <p className="mb-5 flex-grow text-sm leading-relaxed font-light text-slate-400 line-clamp-4">
                    {description}
                </p>

                {/* Tech Stack */}
                <div className="mb-5 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((skill, index) => (
                        <span key={index} className="chip">
                            {skill}
                        </span>
                    ))}
                    {project.stack.length > 4 && (
                        <span className="chip text-slate-500">
                            +{project.stack.length - 4} more
                        </span>
                    )}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex flex-wrap gap-3">
                    {Boolean(images.length) && (
                        <motion.button
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-aurora-cyan to-aurora-violet px-4 py-2.5 text-sm font-semibold text-ink-950 transition-all duration-300 hover:shadow-glow-cyan hover:brightness-110"
                            onClick={open}
                            title="show screenshots"
                            whileTap={{ scale: 0.96 }}
                        >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21,15 16,10 5,21"></polyline>
                            </svg>
                            Screenshots
                        </motion.button>
                    )}

                    {Boolean(link) && (
                        <motion.a
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-aurora-cyan/50 hover:bg-white/10"
                            target="_blank"
                            href={link}
                            title="open website"
                            whileTap={{ scale: 0.96 }}
                        >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15,3 21,3 21,9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            Visit Site
                        </motion.a>
                    )}
                </div>

                {/* Priority Indicator */}
                {priority && priority <= 2 && (
                    <div className="absolute right-3 top-3">
                        <div className="flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 backdrop-blur-sm">
                            <svg className="h-3.5 w-3.5 fill-current text-amber-300" fill="currentColor" viewBox="0 0 24 24">
                                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                            </svg>
                            <span className="text-xs font-semibold text-amber-200">Featured</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Project;