import type { Metadata } from "next";
import Educations from "@/components/EducationsData";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Education",
  description: "Education background, academic achievements, and training history of Daniel Kasem.",
  path: "/educations",
});

export default function EducationsPage() {
  return <Educations />;
}
