import Projects from '@/components/Projects'
import { Metadata } from 'next'
import { siteConfig, pageMetadata } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: pageMetadata.projects.title,
  description: pageMetadata.projects.description,
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
}

export default function ProjectsPage() {
  return <Projects />
}