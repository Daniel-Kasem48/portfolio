import type { Metadata } from "next";
import ChallengesAndOptimizations from "@/components/ChallengesAndOptimizations";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Challenges and Optimizations",
  description: "Engineering challenges solved by Daniel Kasem, covering AI performance optimization, architecture decisions, and system scalability work.",
  path: "/challenges",
});

export default function ChallengesPage() {
  return <ChallengesAndOptimizations />;
}
