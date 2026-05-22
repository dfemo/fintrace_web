import { proxyToBackend } from '@/lib/api/server-proxy'

export async function POST(request: Request) {
  const body = await request.text()
  return proxyToBackend('/api/v1/contact', { method: 'POST', body })
}
