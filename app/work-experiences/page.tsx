import type { Metadata } from "next";
import WorkExperiences from "@/components/WorkExperiences";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Work Experience",
  description: "Professional experience of Daniel Kasem across platform engineering, backend systems, AI-enabled products, and full-stack delivery.",
  path: "/work-experiences",
});

export default function WorkExperiencesPage() {
  return <WorkExperiences />;
}
