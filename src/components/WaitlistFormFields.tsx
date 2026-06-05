'use client'

import { CountrySelect } from './CountrySelect'

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none ring-accent-500/50 focus:border-accent-500/50 focus:ring-2'

type Props = {
  countryCode: string
  onCountryChange: (code: string) => void
  email: string
  onEmailChange: (email: string) => void
  name: string
  onNameChange: (name: string) => void
  emailPlaceholder?: string
  compact?: boolean
  idPrefix?: string
}

/** Shared waitlist fields: country, email, optional name — same on hero, CTA, and modal. */
export function WaitlistFormFields({
  countryCode,
  onCountryChange,
  email,
  onEmailChange,
  name,
  onNameChange,
  emailPlaceholder = 'Enter your email for early access',
  compact = false,
  idPrefix = 'waitlist',
}: Props) {
  return (
    <div className={compact ? 'flex flex-col gap-3' : 'space-y-3'}>
      <CountrySelect
        id={`${idPrefix}-country`}
        value={countryCode}
        onChange={onCountryChange}
      />
      <label className="block">
        <span className="text-sm font-medium text-slate-300">Email address</span>
        <input
          id={`${idPrefix}-email`}
          type="email"
          required
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder={emailPlaceholder}
          className={`mt-1.5 ${inputClass} ${compact ? 'text-sm' : ''}`}
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-slate-300">
          Name <span className="font-normal text-slate-500">(optional)</span>
        </span>
        <input
          id={`${idPrefix}-name`}
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Your name"
          className={`mt-1.5 ${inputClass} ${compact ? 'text-sm' : ''}`}
        />
      </label>
    </div>
  )
}
