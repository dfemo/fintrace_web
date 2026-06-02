'use client'

import { useState, type FormEvent } from 'react'
import { joinWaitlist } from '@/lib/api/client'
import { DEFAULT_COUNTRY_CODE } from '@/lib/countries'
import { CountrySelect } from './CountrySelect'

type Props = {
  source?: string
  compact?: boolean
}

export function WaitlistForm({ source = 'hero', compact = false }: Props) {
  const [email, setEmail] = useState('')
  const [countryCode, setCountryCode] = useState(DEFAULT_COUNTRY_CODE)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')
    try {
      const result = await joinWaitlist({ email, countryCode, source })
      setStatus('success')
      setMessage(result.message)
      setEmail('')
      setCountryCode(DEFAULT_COUNTRY_CODE)
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div
        className={`rounded-xl border border-accent-500/30 bg-accent-500/10 text-center ${
          compact ? 'px-4 py-3' : 'px-6 py-5'
        }`}
      >
        <p className="font-medium text-accent-300">You&apos;re on the early bird list</p>
        <p className="mt-1 text-sm text-slate-300">{message}</p>
      </div>
    )
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <CountrySelect value={countryCode} onChange={setCountryCode} />
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email for early access"
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none ring-accent-500/50 focus:border-accent-500/50 focus:ring-2"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="shrink-0 rounded-xl bg-accent-500 px-5 py-3 text-sm font-semibold text-brand-950 transition hover:bg-accent-400 disabled:opacity-60"
          >
            {status === 'loading' ? 'Joining…' : 'Notify me at launch'}
          </button>
        </div>
        {status === 'error' && (
          <p className="text-sm text-red-400" role="alert">
            {message}
          </p>
        )}
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <CountrySelect value={countryCode} onChange={setCountryCode} />
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email for early access"
        className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-white placeholder:text-slate-500 outline-none ring-accent-500/50 focus:border-accent-500/50 focus:ring-2"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-xl bg-accent-500 px-6 py-3.5 font-semibold text-brand-950 transition hover:bg-accent-400 disabled:opacity-60 sm:w-auto"
      >
        {status === 'loading' ? 'Joining…' : 'Notify me at launch'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-400" role="alert">
          {message}
        </p>
      )}
    </form>
  )
}
