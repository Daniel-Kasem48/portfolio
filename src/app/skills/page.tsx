import TechSkillsSection from '@/components/TechSkill'
import { Metadata } from 'next'
import { siteConfig, pageMetadata } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: pageMetadata.skills.title,
  description: pageMetadata.skills.description,
  alternates: {
    canonical: `${siteConfig.url}/skills`,
  },
}

export default function Skills() {
  return <TechSkillsSection />
}