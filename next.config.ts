import type { NextConfig } from 'next'

const apiUrl =
  process.env.FINTRACE_API_URL ?? process.env.LANDING_API_URL ?? 'http://localhost:5280'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${apiUrl}/api/:path*`,
      },
    ]
  },
}

export default nextConfig
