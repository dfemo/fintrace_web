export type WaitlistPayload = {
  email: string
  name?: string
  source?: string
}

export type ContactPayload = {
  name: string
  email: string
  message: string
}

type ApiResult = { success: boolean; message: string }

async function postJson<T>(path: string, body: unknown): Promise<T> {
  const response = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  const text = await response.text()

  if (!text.trim()) {
    throw new Error(
      response.ok
        ? 'Empty response from server.'
        : `Request failed (${response.status}). Check FINTRACE_API_URL on Vercel points to your Railway API.`,
    )
  }

  let data: T
  try {
    data = JSON.parse(text) as T
  } catch {
    throw new Error(
      `Invalid response from server (${response.status}). Ensure the API is running and FINTRACE_API_URL is set.`,
    )
  }

  if (!response.ok) {
    const err = data as ApiResult
    throw new Error(err.message ?? `Request failed (${response.status}).`)
  }

  return data
}

export function joinWaitlist(payload: WaitlistPayload) {
  return postJson<ApiResult>('/api/v1/waitlist', {
    email: payload.email,
    name: payload.name,
    source: payload.source ?? 'landing',
  })
}

export function sendContact(payload: ContactPayload) {
  return postJson<ApiResult>('/api/v1/contact', payload)
}
