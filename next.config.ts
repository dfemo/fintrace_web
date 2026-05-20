import type { NextConfig } from 'next'

const landingApiUrl = process.env.LANDING_API_URL ?? 'http://localhost:5280'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${landingApiUrl}/api/:path*`,
      },
    ]
  },
}

export default nextConfig
