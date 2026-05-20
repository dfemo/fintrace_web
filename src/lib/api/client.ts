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

  const data = (await response.json()) as T
  if (!response.ok) {
    const err = data as ApiResult
    throw new Error(err.message ?? 'Something went wrong. Please try again.')
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
