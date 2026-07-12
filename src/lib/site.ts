import type { Metadata } from "next";

export const siteConfig = {
  name: "Daniel Kasem",
  title: "Daniel Kasem | Full-Stack & AI Engineer",
  description:
    "Portfolio of Daniel Kasem, a full-stack developer focused on Python AI systems, RAG pipelines, semantic search, scalable backend architecture, and modern web platforms.",
  url: "https://danielkasem.com",
  ogImage: "/opengraph-image.webp",
  locale: "en_US",
  keywords: [
    "Daniel Kasem",
    "full-stack developer",
    "AI engineer",
    "Python developer",
    "RAG systems",
    "semantic search",
    "FastAPI",
    "Next.js portfolio",
    "backend engineer",
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
