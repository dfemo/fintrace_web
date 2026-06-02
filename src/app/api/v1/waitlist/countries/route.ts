import { proxyToBackend } from '@/lib/api/server-proxy'

export async function GET() {
  return proxyToBackend('/api/v1/waitlist/countries', { method: 'GET' })
}
