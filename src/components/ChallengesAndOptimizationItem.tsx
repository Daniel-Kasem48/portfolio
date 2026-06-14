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
    const item = challengeAndOptimizationItem;

    return (
        <article className="glass-card flex h-full flex-col p-6 sm:p-8">
            <h3 className="mb-6 text-lg font-bold text-white sm:text-xl">
                {item.title}
            </h3>

            <div className="flex flex-1 flex-col gap-5">
                <div>
                    <span className="chip mb-2 text-aurora-cyan">Context</span>
                    <p className="text-sm leading-relaxed text-slate-300">{item.context}</p>
                </div>

                <div>
                    <span className="chip mb-2 text-aurora-fuchsia">Challenge</span>
                    <p className="text-sm leading-relaxed text-slate-300">{item.problem}</p>
                </div>

                <div>
                    <span className="chip mb-2 text-aurora-violet">Investigation & Approach</span>
                    <p className="text-sm leading-relaxed text-slate-300">{item.investigationAndApproach}</p>
                </div>

                <div>
                    <span className="chip mb-2 text-aurora-cyan">Solution</span>
                    <p className="text-sm leading-relaxed text-slate-300">{item.solution}</p>
                </div>

                <div className="mt-auto border-t border-white/10 pt-4">
                    <span className="chip mb-2 text-aurora-violet">Results</span>
                    <p className="text-sm leading-relaxed text-slate-300">{item.results}</p>
                </div>
            </div>
        </article>
    );
};

export default ChallengeAndOptimizationItem;
