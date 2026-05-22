/** Backend URL for Next.js route handlers (runtime env on Vercel). */
export function getBackendApiBase(): string {
  const url = process.env.FINTRACE_API_URL ?? process.env.LANDING_API_URL ?? 'http://localhost:5280'
  return url.replace(/\/$/, '')
}

export async function proxyToBackend(path: string, init: RequestInit): Promise<Response> {
  const target = `${getBackendApiBase()}${path}`
  const res = await fetch(target, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init.headers,
    },
  })
  const text = await res.text()
  return new Response(text || '{}', {
    status: res.status,
    headers: { 'Content-Type': 'application/json' },
  })
}
