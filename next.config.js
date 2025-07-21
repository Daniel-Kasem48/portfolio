/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'dist',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig