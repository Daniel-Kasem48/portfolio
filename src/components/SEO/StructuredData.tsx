import { siteConfig } from '@/lib/seo-config'

interface StructuredDataProps {
  type: 'Person' | 'Portfolio' | 'Project'
  data?: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData: any = {}

  switch (type) {
    case 'Person':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: siteConfig.author.name,
        jobTitle: siteConfig.author.role,
        description: siteConfig.description,
        url: siteConfig.url,
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        knowsAbout: siteConfig.keywords,
        birthDate: siteConfig.author.birthDate,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Latakia',
          addressCountry: 'Syria',
        },
        sameAs: [
          siteConfig.links.github,
          siteConfig.links.linkedin,
          siteConfig.links.stackoverflow,
        ],
      }
      break
    
    case 'Portfolio':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        '@id': siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        author: {
          '@type': 'Person',
          name: siteConfig.author.name,
          jobTitle: siteConfig.author.role,
        },
        mainEntity: {
          '@type': 'Person',
          name: siteConfig.author.name,
        },
      }
      break
    
    case 'Project':
      if (data) {
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: data.title,
          description: data.description,
          url: data.link,
          applicationCategory: 'WebApplication',
          operatingSystem: 'Any',
          author: {
            '@type': 'Person',
            name: siteConfig.author.name,
          },
          programmingLanguage: data.stack,
        }
      }
      break
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}