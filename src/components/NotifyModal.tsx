'use client'

import { useState, type FormEvent } from 'react'
import { joinWaitlist } from '@/lib/api/client'
import { DEFAULT_COUNTRY_CODE } from '@/lib/countries'
import { WaitlistFormFields } from './WaitlistFormFields'

type Props = {
  open: boolean
  onClose: () => void
}

export function NotifyModal({ open, onClose }: Props) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [countryCode, setCountryCode] = useState(DEFAULT_COUNTRY_CODE)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  if (!open) return null

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')
    try {
      const result = await joinWaitlist({
        email,
        name: name || undefined,
        countryCode,
        source: 'notify-modal',
      })
      setStatus('success')
      setMessage(result.message)
      setEmail('')
      setName('')
      setCountryCode(DEFAULT_COUNTRY_CODE)
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Unable to subscribe right now.')
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="notify-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-2xl shadow-ink/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="notify-title" className="text-2xl font-bold text-ink">
            Get early access
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-ink-subtle transition hover:bg-surface-muted hover:text-ink"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <p className="mt-2 text-sm text-ink-muted">
          Be first to know when FinTrace SME launches — predictive cashflow, payout forecasting, and
          order-risk intelligence for UK online sellers.
        </p>

        {status === 'success' ? (
          <div className="mt-6 rounded-xl border border-success/30 bg-success-bg px-4 py-5 text-center">
            <p className="text-lg font-medium text-success">You&apos;re on the list</p>
            <p className="mt-2 text-sm text-ink-muted">{message}</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary-hover"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <WaitlistFormFields
              idPrefix="notify-modal"
              countryCode={countryCode}
              onCountryChange={setCountryCode}
              email={email}
              onEmailChange={setEmail}
              name={name}
              onNameChange={setName}
              emailPlaceholder="you@yourshop.co.uk"
            />
            {status === 'error' && (
              <p className="text-sm text-red-600" role="alert">
                {message}
              </p>
            )}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full rounded-full bg-primary py-3.5 text-sm font-semibold text-white transition hover:bg-primary-hover disabled:opacity-60"
            >
              {status === 'loading' ? 'Joining…' : 'Notify me at launch'}
            </button>
            <p className="text-center text-xs text-ink-subtle">
              No spam. Unsubscribe anytime. We respect your privacy (GDPR).
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
