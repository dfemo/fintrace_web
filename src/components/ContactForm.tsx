'use client'

import { useState, type FormEvent } from 'react'
import { sendContact } from '@/lib/api/client'
import { inputClass } from './WaitlistFormFields'

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
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-surface p-6 shadow-sm">
      <label className="block">
        <span className="text-sm font-medium text-ink">Name</span>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`mt-1.5 ${inputClass}`}
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-ink">Email</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`mt-1.5 ${inputClass}`}
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-ink">Message</span>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`mt-1.5 resize-none ${inputClass}`}
        />
      </label>
      {feedback && (
        <p
          className={`text-sm ${status === 'success' ? 'text-success' : 'text-red-600'}`}
          role="status"
        >
          {feedback}
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-full bg-primary py-3 font-semibold text-white transition hover:bg-primary-hover disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
