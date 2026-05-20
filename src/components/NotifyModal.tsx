'use client'

import { useState, type FormEvent } from 'react'
import { joinWaitlist } from '@/lib/api/client'

type Props = {
  open: boolean
  onClose: () => void
}

export function NotifyModal({ open, onClose }: Props) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  if (!open) return null

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')
    try {
      const result = await joinWaitlist({ email, name: name || undefined, source: 'notify-modal' })
      setStatus('success')
      setMessage(result.message)
      setEmail('')
      setName('')
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Unable to subscribe right now.')
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="notify-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-white/10 bg-brand-900 p-6 shadow-2xl shadow-black/50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="notify-title" className="font-display text-2xl font-semibold text-white">
            Get early access
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <p className="mt-2 text-sm text-slate-400">
          Be first to know when FinTrace SME launches — predictive cashflow, payout forecasting, and
          order-risk intelligence for UK online sellers.
        </p>

        {status === 'success' ? (
          <div className="mt-6 rounded-xl border border-accent-500/30 bg-accent-500/10 px-4 py-5 text-center">
            <p className="text-lg font-medium text-accent-300">You&apos;re on the list</p>
            <p className="mt-2 text-sm text-slate-300">{message}</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 rounded-lg bg-accent-500 px-5 py-2 text-sm font-semibold text-brand-950 transition hover:bg-accent-400"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-slate-300">Email address</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourshop.co.uk"
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none ring-accent-500/50 focus:border-accent-500/50 focus:ring-2"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-300">
                Name <span className="font-normal text-slate-500">(optional)</span>
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none ring-accent-500/50 focus:border-accent-500/50 focus:ring-2"
              />
            </label>
            {status === 'error' && (
              <p className="text-sm text-red-400" role="alert">
                {message}
              </p>
            )}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full rounded-xl bg-accent-500 py-3.5 text-sm font-semibold text-brand-950 transition hover:bg-accent-400 disabled:opacity-60"
            >
              {status === 'loading' ? 'Joining…' : 'Notify me at launch'}
            </button>
            <p className="text-center text-xs text-slate-500">
              No spam. Unsubscribe anytime. We respect your privacy (GDPR).
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
