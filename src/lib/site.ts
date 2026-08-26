import type { Metadata } from "next";

export const siteConfig = {
  name: "Daniel Kasem",
  title: "Daniel Kasem | Backend & AI Software Engineer",
  description:
    "Backend and AI software engineer building scalable platforms and production AI integrations with Node.js, Python, PostgreSQL, AWS, and Docker. Relocating to Dortmund, Germany.",
  url: "https://danielkasem.com",
  ogImage: "/opengraph-image.webp",
  locale: "en_US",
  keywords: [
    "Daniel Kasem",
    "backend software engineer",
    "AI engineer",
    "Python developer",
    "RAG systems",
    "semantic search",
    "FastAPI",
    "Next.js portfolio",
    "backend engineer",
    "software engineer Dortmund",
    "portfolio",
  ],
} as const;

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const resolvedTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const resolvedDescription = description ?? siteConfig.description;
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: resolvedTitle,
    description: resolvedDescription,
    keywords: [...siteConfig.keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [siteConfig.ogImage],
    },
  };
}
