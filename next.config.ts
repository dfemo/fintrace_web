import type { NextConfig } from 'next'

// API calls use src/app/api/v1/*/route.ts proxies (runtime FINTRACE_API_URL).
// Rewrites kept as fallback for local dev without route handlers edge cases.
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
