import type { Metadata } from "next";
import CertificatesSection from "@/components/CertificatesSection";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Certificates",
  description: "Professional certificates and recognized achievements validating Daniel Kasem's technical expertise and continued learning.",
  path: "/certificates",
});

export default function CertificatesPage() {
  return <CertificatesSection />;
}
