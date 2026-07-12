import type { Metadata } from "next";
import TechSkillsSection from "@/components/TechSkill";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Skills",
  description: "Technical skills of Daniel Kasem across Python AI, FastAPI, Node.js, Next.js, databases, cloud infrastructure, and scalable systems.",
  path: "/skills",
});

export default function SkillsPage() {
  return <TechSkillsSection />;
}
