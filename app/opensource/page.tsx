import type { Metadata } from "next";
import OpenSource from "@/components/Opensource";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Open Source",
  description: "Open-source contributions and packages published by Daniel Kasem across backend, AI, and product engineering workflows.",
  path: "/opensource",
});

export default function OpenSourcePage() {
  return <OpenSource />;
}
