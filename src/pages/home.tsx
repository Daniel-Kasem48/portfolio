import Bio from "../components/Bio.tsx";
import Projects from "../components/Projects.tsx";
import Footer from "../components/Footer.tsx";
import Educations from "../components/EducationsData.tsx";
import WorkExperiences from "../components/WorkExperiences.tsx";
import ChallengesAndOptimizations from "../components/ChallengesAndOptimizations.tsx";
import TechSkillsSection from "../components/TechSkill.tsx";
import CertificatesSection from "../components/CertificatesSection.tsx";
import AIChat from "../components/AiChat.tsx";
import OpenSource from "../components/Opensource.tsx";

// import OpenSource from "../components/Opensource.tsx";

function Home() {
    return (
        <div className="h-full   pt-[100px]  mx-10">
            <div className="">
                <AIChat/>


                {/*<TestSkills/>*/}
                {/*<Timeline/>*/}
                <TechSkillsSection/>
                {/*<Skills/>*/}
                <Projects/>
                <OpenSource/>
                <WorkExperiences  />
                <Educations/>
                <CertificatesSection/>
                <ChallengesAndOptimizations/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home