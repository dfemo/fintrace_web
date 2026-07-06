'use client'

import { CountrySelect } from './CountrySelect'

export const inputClass =
  'w-full rounded-xl border border-border bg-surface px-4 py-3 text-ink placeholder:text-ink-subtle outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20'

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
        <span className="text-sm font-medium text-ink">Email address</span>
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
        <span className="text-sm font-medium text-ink">
          Name <span className="font-normal text-ink-subtle">(optional)</span>
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
