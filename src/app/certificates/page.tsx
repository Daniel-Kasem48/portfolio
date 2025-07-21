import CertificatesSection from '@/components/CertificatesSection'
import { Metadata } from 'next'
import { siteConfig, pageMetadata } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: pageMetadata.certificates.title,
  description: pageMetadata.certificates.description,
  alternates: {
    canonical: `${siteConfig.url}/certificates`,
  },
}

export default function CertificatesPage() {
  return <CertificatesSection />
}