import {FC, useRef} from "react";

interface OpenSourceProject {
    name: string;
    description: string;
    features: string[];
    github: string;
    npm?: string;
}

const projects: OpenSourceProject[] = [
    {
        name: "Flowtify",
        description: "A flexible and robust TypeScript library for defining and executing workflows.",
        features: [
            "Sequential/parallel execution",
            "Compensation handling",
            "Dependency injection",
        ],
        github: "https://github.com/specture48/flowtify",
        npm: "https://www.npmjs.com/package/flowtify",
    },
    {
        name: "Medusa FCM Notification",
        description: "Firebase Cloud Messaging (FCM) notification provider for Medusa.",
        features: [
            "Push notifications for Medusa",
            "FCM integration",
            "Customizable channels",
        ],
        github: "https://github.com/specture48/medusa-fcm-notification",
        npm: "https://www.npmjs.com/package/medusa-fcm-notification",
    },
    {
        name: "Medusa Documents (Arabic Support Fork)",
        description: "A plugin for Medusa.js that generates PDF documents (e.g., invoices, packing slips) with added Arabic language support.",
        features: [
            "Arabic language support",
            "Invoice and packing slip generation",
            "Seamless Medusa.js integration",
        ],
        github: "https://github.com/specture48/medusa-documents-arabic",
        npm: "https://www.npmjs.com/package/medusa-documents-arabic",
    },
    {
        name: "Medusa AI Shopping Assistant",
        description: "A conversational commerce plugin for Medusa.js that leverages AI to assist users in shopping, answering questions, and providing recommendations.",
        features: [
            "Conversational AI for e-commerce",
            "Medusa.js plugin integration",
            "Product recommendations and Q&A",
            "Open source TypeScript code"
        ],
        github: "https://github.com/specture48/medusa-ai-shopping-assistant"
    },
];


const OpenSourceCard: FC<{ project: OpenSourceProject }> = ({project}) => {

    return (

        <div
            className="bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-xl p-5 shadow-md hover:bg-gray-700 transition-all duration-300">
            <h3 className="text-xl font-bold text-white">{project.name}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <ul className="text-gray-300 mt-2 list-disc list-inside">
                {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <div className="mt-4 flex gap-4">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-navy-blue text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 transition-all duration-300"
                >
                    GitHub
                </a>
                {project.npm && (
                    <a
                        href={project.npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-navy-blue text-green-400 px-4 py-2 rounded-lg hover:bg-green-400  transition-all duration-300"
                    >
                        NPM
                    </a>
                )}
            </div>
        </div>
    );
};

const OpenSource: FC = () => {
    const openSourceRef = useRef(null);

    return (
        <section  id="opensource" ref={openSourceRef} className=" bg-gradient-to-b  pt-[80px] from-gray-900 to-navy-blue text-white">
            <div className="container mx-auto px-4 pt-16">
                <p
                    className="
                        text-4xl md:text-6xl lg:text-8xl
                        w-full text-center font-extrabold mb-10
                        text-navy-blue bg-black py-4 border-b-4
                        tracking-tight shadow-lg
                    "
                >
                    Open Source
                </p>
                {/*<p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">*/}
                {/*    As a backend developer, I'm passionate about building scalable and efficient tools that enhance developer productivity. Check out my open-source contributions and join the journey!*/}
                {/*</p>*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <OpenSourceCard key={index} project={project}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OpenSource;