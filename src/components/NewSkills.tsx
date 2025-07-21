import { useMemo } from 'react';
import { useRandomValues } from '../hooks/useRandomValues';

const NewSkills = ({skills}: { skills: string[] }) => {
    const randomValues = useRandomValues(20 * 4); // 4 values per element
    
    const codeRainElements = useMemo(() => {
        return Array.from({length: 20}).map((_, i) => {
            const baseIndex = i * 4;
            return {
                left: randomValues[baseIndex] * 100,
                animationDelay: randomValues[baseIndex + 1] * 5,
                animationDuration: 3 + randomValues[baseIndex + 2] * 2,
                skillIndex: Math.floor(randomValues[baseIndex + 3] * skills.length)
            };
        });
    }, [randomValues, skills.length]);
    
    return (
        <section className="py-12 px-4 max-w-5xl mx-auto relative overflow-hidden">
            {/*<h2 className="text-4xl font-extrabold mb-12 text-center text-white tracking-wide relative z-10">*/}
            {/*    Skills*/}
            {/*</h2>*/}
            <div className="relative h-64 flex items-center justify-center">
                {/* Background "code rain" effect */}
                <div className="absolute inset-0 opacity-20">
                    {codeRainElements.map((element, i) => (
                        <span
                            key={i}
                            className="absolute text-cyan-400/50 text-xs animate-fall"
                            style={{
                                left: `${element.left}%`,
                                animationDelay: `${element.animationDelay}s`,
                                animationDuration: `${element.animationDuration}s`,
                            }}
                        >
                            {skills[element.skillIndex] || skills[0]}
                        </span>
                    ))}
                </div>
                {/* Main skill display */}
                <div className="relative z-10 flex flex-wrap justify-center gap-6">
                    {skills.map((skill, index) => (
                        <div>
                            <span
                                key={index}
                                className="px-4 py-2 text-gray-200  text-2xl font-mono bg-gray-900/80  border-cyan-400/30 rounded-md hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 animate-pulse-slow"
                                style={{animationDelay: `${index * 0.2}s`}}
                            >
                    {skill}
                </span>
                            {/*<svg width="40" height="40"  viewBox="0 0 24 24" className="fill-current"*/}
                            {/*     xmlns="http://www.w3.org/2000/svg">*/}
                            {/*    <path fill="#6881cb"*/}
                            {/*          d="M12.002.002c-.242 2.592-1.474 4.276-2.752 5.891-1.216 1.526-2.488 2.937-2.488 5.142 0 1.664.506 3.067 1.412 4.196a7.653 7.653 0 002.5 2.074l.002 2.336s.166.337.618.337h.77c.452 0 .608-.337.608-.337l.002-2.336a7.653 7.653 0 002.5-2.074c.906-1.129 1.412-2.532 1.412-4.196 0-2.205-1.272-3.616-2.488-5.142C13.476 4.278 12.244 2.594 12.002.002z"/>*/}
                            {/*</svg>*/}
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewSkills;