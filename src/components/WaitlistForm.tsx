'use client'

import { useState, type FormEvent } from 'react'
import { joinWaitlist } from '@/lib/api/client'
import { DEFAULT_COUNTRY_CODE } from '@/lib/countries'
import { WaitlistFormFields } from './WaitlistFormFields'

type Props = {
  source?: string
  compact?: boolean
}

export function WaitlistForm({ source = 'hero', compact = false }: Props) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [countryCode, setCountryCode] = useState(DEFAULT_COUNTRY_CODE)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')
    try {
      const result = await joinWaitlist({
        email,
        name: name || undefined,
        countryCode,
        source,
      })
      setStatus('success')
      setMessage(result.message)
      setEmail('')
      setName('')
      setCountryCode(DEFAULT_COUNTRY_CODE)
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div
        className={`rounded-xl border border-success/30 bg-success-bg text-center ${
          compact ? 'px-4 py-3' : 'px-6 py-5'
        }`}
      >
        <p className="font-medium text-success">You&apos;re on the early bird list</p>
        <p className="mt-1 text-sm text-ink-muted">{message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? 'space-y-3' : 'space-y-4'}>
      <WaitlistFormFields
        idPrefix={`waitlist-${source}`}
        compact={compact}
        countryCode={countryCode}
        onCountryChange={setCountryCode}
        email={email}
        onEmailChange={setEmail}
        name={name}
        onNameChange={setName}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`rounded-full bg-primary font-semibold text-white transition hover:bg-primary-hover disabled:opacity-60 ${
          compact ? 'w-full px-5 py-3 text-sm sm:w-auto' : 'w-full px-6 py-3.5 sm:w-auto'
        }`}
      >
        {status === 'loading' ? 'Joining…' : 'Notify me at launch'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-600" role="alert">
          {message}
        </p>
      )}
    </form>
  )
}
