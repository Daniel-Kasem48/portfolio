import type { Metadata } from "next";
import Bio from "@/components/Bio";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "Learn about Daniel Kasem, his background, specialties in AI systems, backend architecture, and full-stack product development.",
  path: "/about",
});

export default function AboutPage() {
  return <Bio />;
}
