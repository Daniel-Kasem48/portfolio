import { ImageResponse } from 'next/og'
import { siteConfig } from './seo-config'

export function generateOGImage(
  title: string,
  description?: string,
  bgColor: string = '#0a0a0a'
) {
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
          backgroundColor: bgColor,
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: '24px',
              color: '#a0a0a0',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            {siteConfig.author.name}
          </div>
          
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '30px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              lineHeight: '1.1',
            }}
          >
            {title}
          </h1>
          
          {description && (
            <p
              style={{
                fontSize: '28px',
                color: '#e5e5e5',
                maxWidth: '900px',
                lineHeight: '1.3',
                marginBottom: '40px',
              }}
            >
              {description}
            </p>
          )}
          
          <div
            style={{
              fontSize: '20px',
              color: '#06b6d4',
              fontWeight: '600',
            }}
          >
            Full-Stack Developer • Backend Focus
          </div>
        </div>
        
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            right: '30px',
            fontSize: '18px',
            color: '#888',
          }}
        >
          {siteConfig.url.replace('https://', '')}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

export const ogImageConfig = {
  size: {
    width: 1200,
    height: 630,
  },
  contentType: 'image/png' as const,
}