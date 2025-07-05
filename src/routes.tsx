import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts";
import Home from "./pages/home.tsx";
import Bio from './components/Bio';
import TechSkillsSection from './components/TechSkill.tsx';
import Projects from './components/Projects.tsx';
import OpenSource from './components/Opensource.tsx';
import WorkExperiences from './components/WorkExperiences.tsx';
import Educations from './components/EducationsData.tsx';
import CertificatesSection from './components/CertificatesSection.tsx';
import ChallengesAndOptimizations from './components/ChallengesAndOptimizations.tsx';


const routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Bio/>,
            },
            {
                path: "about",
                element: <Bio/>,
            },
            {
                path: "skills",
                element: <TechSkillsSection/>,
            },
            {
                path: "projects",
                element: <Projects/>,
            },
            {
                path: "opensource",
                element: <OpenSource/>,
            },
            {
                path: "work-experiences",
                element: <WorkExperiences/>,
            },
            {
                path: "educations",
                element: <Educations/>,
            },
            {
                path: "certificates",
                element: <CertificatesSection/>,
            },
            {
                path: "challenges",
                element: <ChallengesAndOptimizations/>,
            },
        ],
    },
    // {
    //   path: "*",
    //   element: <PageNotFound />,
    // },
]);
export {routers};
