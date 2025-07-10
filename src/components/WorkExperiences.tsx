import {FC} from "react";
import WorkExperience, {IWorkExperience} from "./WorkExperience";


export const workExperiencesData: IWorkExperience[] = [
    {
        company: "CogentSoft",
        location: "Beirut, Lebanon",
        title: "Backend Engineer",
        date: "May 2022 – Present",
        description: [
            "Developed and maintained microservices using NestJS, Node.js, and Golang to design scalable backend architectures and Restfull APIs.",
            "Containerized projects (React.js, Next.js, Nest.js, PHP) and established a CI/CD pipeline for seamless deployment to ECS servers.",
            "Used GitLab CI/CD for containerization, pushing images to Amazon ECR, and deploying on ECS tasks.",
            "Revamped legacy systems, improving API performance by 30% using profiling tools.",
            "Designed and implemented database and system architectures for ERP, Medical, E-commerce, and POS systems.",
            "Led a cross-functional team of frontend, backend, and mobile developers while optimizing SEO and website performance.",
            "Contributed to system analysis efforts and delivered high-performance solutions.",
        ],
    },
    {
        company: "Ordro",
        location: "Remote, Saudi Arabia, Jeddah",
        title: "Backend Engineer",
        date: "May 2022 – Jan 2024",
        description: [
            "Developed a B2B eCommerce platform using open-source Medusa.js.",
            "Converted the platform to a multitenant architecture, enabling scalability for multiple clients.",
            "Created two mobile applications: one for drivers and another for retailers.",
            "Designed and implemented a comprehensive dashboard for suppliers and super admins.",
            "Integrated ZATCA-compliant e-invoicing standards and BNPL (Buy Now, Pay Later) functionality.",
            "Leveraged Google's Optimization AI to solve the Vehicle Routing Problem (VRP), optimizing delivery routes.",
            "Developing A Point of Sale system designed for retailers"
        ],
    },
    {
        company: "Yawar",
        location: "Iraq",
        title: "Backend Developer",
        date: "May 2023 – Aug 2024",
        description: [
            "Led the conversion of a large JavaScript application to TypeScript, improving maintainability and performance.",
            "Implemented dependency injection and TypeORM for enhanced database management.",
            "Refactored complex, unstructured code into modular and scalable components, improving performance by 25%.",
        ],
    },
    {
        company: "Prokoders",
        location: "Remote, United Arab Emirates",
        title: "Backend Developer",
        date: "Dec 2021 – Jan 2023",
        description: [
            "Worked extensively with Laravel on ERP systems, Learning Management Systems (LMS), and various websites.",
            "Developed core functionalities, optimized performance, and implemented scalable backend solutions.",
            "Expanded technical expertise by learning .NET Core, contributing to cross-platform application development.",
        ],
    },
    {
        company: "Flexsol",
        location: "",
        title: "Fullstack Developer (Laravel / HTML / CSS / JS)",
        date: "Jan 2021 – Dec 2021",
        description: [
            "Designed and developed a comprehensive dashboard and API for a university library mobile app.",
            "Implemented features enabling the sale of lectures and video courses, as well as subject tests for student exam preparation.",
        ],
    },
    {
        company: "Freelance",
        location: "Remote",
        title: "Backend Developer",
        date: "Various (2023 – 2025)",
        description: [
            "Worked as a freelance backend developer for multiple clients and projects, delivering scalable and robust solutions.",
            "• Numbers5 (Mar 2025 – Jul 2025): Developed and maintained backend services, integrated AI-powered features and automation flows for virtual phone number management.",
            "• CleanCody: Contributed to backend development and API integrations for e-commerce and automation projects."
        ],
    },
];


//TODO mention that we use NX,SAAS Multi tenancy Structure
const WorkExperiences: FC = () => {
    return (

        <section className="min-h-screen overflow-y-auto" id="work-experiences">
            <div className="pt-[80px]">
                <div className=" mx-auto container ">
                    <p className="
          text-4xl md:text-6xl lg:text-8xl

    w-full
    mt-10
    text-center
    font-extrabold
    mb-10
    text-navy-blue
    bg-black
    py-4
    border-b-4
    border-navy-blue
    tracking-tight
    shadow-lg
  ">
                        Work Experience
                    </p>
                </div>
                <div className="
        my-5
     w-full
 mx-auto
    container
    ">
                    {
                        workExperiencesData.map((p, index) => {
                            return (<WorkExperience key={index} workExperience={p}/>)
                        })
                    }
                </div>
            </div>
        </section>)
}
export default WorkExperiences