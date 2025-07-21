import WorkExperiences from '@/components/WorkExperiences'
import { Metadata } from 'next'
import { siteConfig, pageMetadata } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: pageMetadata.workExperiences.title,
  description: pageMetadata.workExperiences.description,
  alternates: {
    canonical: `${siteConfig.url}/work-experiences`,
  },
}

export default function WorkExperiencesPage() {
  return <WorkExperiences />
}