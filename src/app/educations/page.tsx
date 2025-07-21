import Educations from '@/components/EducationsData'
import { Metadata } from 'next'
import { siteConfig, pageMetadata } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: pageMetadata.education.title,
  description: pageMetadata.education.description,
  alternates: {
    canonical: `${siteConfig.url}/educations`,
  },
}

export default function EducationsPage() {
  return <Educations />
}