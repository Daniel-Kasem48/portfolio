import {FC} from "react";
import Skill, {ISkill} from "./Skill";

const Skills: FC = () => {
        const mySkills: ISkill[] = [{
            title: "Rest Api & Graphql",
            description: "I utilized both Restful API and GraphQL to build scalable applications."
        },
        {
            title: "RealTime Tech",
            description: "Dived into the realm of real-time technologies such as Socket.io, Firebase."
        },
        {
            title: "Integrations with 3dparty",
            description: "IOT [Airthings, Webex, Cisco], Payment Gateways, Social Media Platforms, Smart Workspaces."
        },
        // {
        //     title: "Microservices",
        //     description: "Architected and implemented microservices-based systems, enhancing scalability, fault tolerance, and deployment agility through containerization (Docker) "
        // },
        {
            title: "Project Leadership & Management",
            description: "Led cross-functional teams in the successful delivery of complex software projects. Managed project timelines, coordinated tasks among team members, and ensured alignment with business goals, resulting in a consistent track record of on-time and on-budget deliveries."
        }
    ]

    return <div className="
    w-full
    mx-auto
    container
    mb-10
    ">
        <div>
            <p className="text-4xl  font-extrabold my-5"> Skills </p>
        </div>
        <div className="
                grid
                md:grid-cols-3
                grid-cols-1
                gap-5
                mt-10
                ">
            {mySkills.map((skill) => (
                <Skill  skill={skill}/>
            ))}
        </div>

    </div>
}
export default Skills
