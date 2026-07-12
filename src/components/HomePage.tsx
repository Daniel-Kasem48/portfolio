"use client";

import Bio from "@/components/Bio";
import TechSkillsSection from "@/components/TechSkill";
import Projects from "@/components/Projects";
import OpenSource from "@/components/Opensource";
import WorkExperiences from "@/components/WorkExperiences";
import Educations from "@/components/EducationsData";
import CertificatesSection from "@/components/CertificatesSection";
import LanguagesSection from "@/components/LanguagesSection";
import ChallengesAndOptimizations from "@/components/ChallengesAndOptimizations";

export default function HomePage() {
  return (
    <>
      <Bio />
      <TechSkillsSection />
      <Projects />
      <OpenSource />
      <WorkExperiences />
      <Educations />
      <CertificatesSection />
      <LanguagesSection />
      <ChallengesAndOptimizations />
    </>
  );
}
