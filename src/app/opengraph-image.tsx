import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/seo-config'

export const runtime = 'edge'

export const alt = siteConfig.title
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '20px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            Daniel Kasem
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#e5e5e5',
              marginBottom: '30px',
              maxWidth: '800px',
              lineHeight: '1.4',
            }}
          >
            {siteConfig.author.role}
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '15px',
              justifyContent: 'center',
            }}
          >
            {['Laravel', 'Node.js', 'Golang', 'React.js', 'AI Integration'].map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  color: '#ffffff',
                  fontSize: '20px',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '30px',
            fontSize: '24px',
            color: '#cccccc',
          }}
        >
          {siteConfig.url.replace('https://', '')}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}