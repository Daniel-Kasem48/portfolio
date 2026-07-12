import type { Metadata } from "next";
import LanguagesSection from "@/components/LanguagesSection";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Languages",
  description: "Languages spoken by Daniel Kasem for international communication and collaboration.",
  path: "/languages",
});

export default function LanguagesPage() {
  return <LanguagesSection />;
}
