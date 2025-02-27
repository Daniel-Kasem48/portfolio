import Bio from "../components/Bio.tsx";
import Projects from "../components/Projects.tsx";
import Footer from "../components/Footer.tsx";
import Educations from "../components/Educations.tsx";
import WorkExperiences from "../components/WorkExperiences.tsx";
import ChallengesAndOptimizations from "../components/ChallengesAndOptimizations.tsx";
import TechSkillsSection from "../components/TechSkill.tsx";
import CertificatesSection from "../components/CertificatesSection.tsx";
import Timeline from "../components/Timeline.tsx";

function Home() {
    return (
        <div className="h-full  pt-[100px]  mx-10">
            <div className="">
                <Bio/>
                {/*<Timeline/>*/}
                <TechSkillsSection/>
                {/*<Skills/>*/}
                <Projects/>
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