import { FC } from "react";

export interface IChallengeAndOptimizationItem {
    title: string;
    context: string;
    problem: string;
    investigationAndApproach: string;
    solution: string;
    results: string;
}

const ChallengeAndOptimizationItem: FC<{
    challengeAndOptimizationItem: IChallengeAndOptimizationItem;
}> = ({ challengeAndOptimizationItem }) => {
    return (
        <div
            className="group flex flex-col rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 p-8 text-white relative overflow-hidden hover:scale-[1.03] hover:bg-gradient-to-br hover:from-gray-800/70 hover:to-gray-900/70"
        >
            {/* Animated Gradient Background - Matching Skills */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            {/* Enhanced Accent Bar with Skills Colors */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-80 rounded-t-2xl animate-gradient-x"></div>
            
            {/* Corner Gradient Accents - Matching Skills */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Enhanced Title with Skills Color Scheme */}
            <h3 className="text-xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-blue-200 group-hover:from-cyan-200 group-hover:via-white group-hover:to-cyan-100 transition-all duration-500 drop-shadow-lg flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                    </svg>
                </div>
                {challengeAndOptimizationItem.title}
            </h3>
            
            {/* Enhanced Content Sections with Skills Color Scheme */}
            <div className="space-y-4">
                <div className="relative p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-transparent border-l-4 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300">
                    <h4 className="font-semibold flex items-center gap-2 text-cyan-300 mb-2">
                        <span className="text-lg">🧩</span>
                        <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Context</span>
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{challengeAndOptimizationItem.context}</p>
                </div>
                
                <div className="relative p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-transparent border-l-4 border-blue-500/50 hover:border-blue-500 transition-all duration-300">
                    <h4 className="font-semibold flex items-center gap-2 text-blue-300 mb-2">
                        <span className="text-lg">🚩</span>
                        <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Problem</span>
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{challengeAndOptimizationItem.problem}</p>
                </div>
                
                <div className="relative p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-transparent border-l-4 border-purple-500/50 hover:border-purple-500 transition-all duration-300">
                    <h4 className="font-semibold flex items-center gap-2 text-purple-300 mb-2">
                        <span className="text-lg">🔎</span>
                        <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">Investigation & Approach</span>
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{challengeAndOptimizationItem.investigationAndApproach}</p>
                </div>
                
                <div className="relative p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-transparent border-l-4 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300">
                    <h4 className="font-semibold flex items-center gap-2 text-cyan-300 mb-2">
                        <span className="text-lg">💡</span>
                        <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Solution</span>
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{challengeAndOptimizationItem.solution}</p>
            </div>
                
                <div className="relative p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-transparent border-l-4 border-blue-500/50 hover:border-blue-500 transition-all duration-300">
                    <h4 className="font-semibold flex items-center gap-2 text-blue-300 mb-2">
                        <span className="text-lg">🏆</span>
                        <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Results</span>
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{challengeAndOptimizationItem.results}</p>
            </div>
            </div>
            
            {/* Decorative Element - Matching Skills */}
            <div className="mt-6 flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
            
            {/* Floating Gradient Particles - Skills Colors */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full animate-pulse ${
                            i % 3 === 0 ? 'bg-cyan-400' :
                            i % 3 === 1 ? 'bg-blue-500' :
                            'bg-purple-600'
                        }`}
                        style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                            animationDuration: `${Math.random() * 2 + 1}s`,
                            animationDelay: `${Math.random() * 1}s`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ChallengeAndOptimizationItem;

