'use client'

import { useState, type FormEvent } from 'react'
import { sendContact } from '@/lib/api/client'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setFeedback('')
    try {
      const result = await sendContact({ name, email, message })
      setStatus('success')
      setFeedback(result.message)
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setStatus('error')
      setFeedback(err instanceof Error ? err.message : 'Failed to send message.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-white/10 bg-brand-900/40 p-6">
      <label className="block">
        <span className="text-sm font-medium text-slate-300">Name</span>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/30"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-slate-300">Email</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/30"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-slate-300">Message</span>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/30"
        />
      </label>
      {feedback && (
        <p
          className={`text-sm ${status === 'success' ? 'text-accent-300' : 'text-red-400'}`}
          role="status"
        >
          {feedback}
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-xl bg-accent-500 py-3 font-semibold text-brand-950 transition hover:bg-accent-400 disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
