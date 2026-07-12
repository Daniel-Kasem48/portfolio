import type { Metadata } from "next";
import Projects from "@/components/Projects";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description: "Selected software projects by Daniel Kasem, including AI systems, SaaS platforms, e-commerce products, and mobile applications.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <Projects />;
}
