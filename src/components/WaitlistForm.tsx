'use client'

import { useState, type FormEvent } from 'react'
import { joinWaitlist } from '@/lib/api/client'

type Props = {
  source?: string
  compact?: boolean
}

export function WaitlistForm({ source = 'hero', compact = false }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')
    try {
      const result = await joinWaitlist({ email, source })
      setStatus('success')
      setMessage(result.message)
      setEmail('')
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

  return (
    <form onSubmit={handleSubmit} className={compact ? 'flex flex-col gap-2 sm:flex-row' : 'space-y-3'}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email for early access"
        className={`flex-1 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 outline-none ring-accent-500/50 focus:border-accent-500/50 focus:ring-2 ${
          compact ? 'px-4 py-3 text-sm' : 'w-full px-5 py-3.5'
        }`}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`shrink-0 rounded-xl bg-accent-500 font-semibold text-brand-950 transition hover:bg-accent-400 disabled:opacity-60 ${
          compact ? 'px-5 py-3 text-sm' : 'w-full px-6 py-3.5 sm:w-auto'
        }`}
      >
        {status === 'loading' ? 'Joining…' : 'Notify me at launch'}
      </button>
      {status === 'error' && (
        <p className={`text-sm text-red-400 ${compact ? 'sm:col-span-2' : ''}`} role="alert">
          {message}
        </p>
      )}
    </form>
  )
}
