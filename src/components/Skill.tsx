import {FC} from "react";
import { motion } from "framer-motion";

export interface ISkill{
    title:string
    description:string
}

const Skill: FC<{ skill: ISkill }> = ({skill}) => {
    const {description,title}=skill
    
    return (
        <motion.div 
            className="group relative rounded-2xl transition-all duration-500
                flex-col p-8 text-white border border-gray-700/50
                bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl
                hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20
                transform hover:-translate-y-2 h-full overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            <div className="relative z-10 flex h-full flex-col justify-between">
                {/* Title */}
                <div className="mb-6">
                    <h3 className="text-2xl font-extrabold tracking-tight leading-tight
                        text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-blue-200
                        group-hover:from-cyan-200 group-hover:via-white group-hover:to-cyan-100 
                        transition-all duration-500 mb-4">
                {title}
                    </h3>
            </div>

                {/* Description */}
                <div className="flex-grow">
                    <p className="text-gray-300 text-base leading-relaxed font-light tracking-wide">
                    {description}
                </p>
            </div>

                {/* Decorative Element */}
                <div className="mt-6 flex justify-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
        </div>

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>
    );
}

export default Skill