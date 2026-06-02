'use client'

import { DEFAULT_COUNTRY_CODE, WAITLIST_COUNTRIES } from '@/lib/countries'

type Props = {
  value: string
  onChange: (code: string) => void
  id?: string
  label?: string
  className?: string
  selectClassName?: string
  required?: boolean
}

export function CountrySelect({
  value,
  onChange,
  id = 'country',
  label = 'Country',
  className = '',
  selectClassName = '',
  required = true,
}: Props) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium text-slate-300">{label}</span>
      <div className="relative mt-1.5">
        <select
          id={id}
          required={required}
          value={value || DEFAULT_COUNTRY_CODE}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full appearance-none rounded-xl border border-white/10 bg-white/5 py-3 pl-4 pr-10 text-white outline-none ring-accent-500/50 focus:border-accent-500/50 focus:ring-2 ${selectClassName}`}
        >
          {WAITLIST_COUNTRIES.map((c) => (
            <option key={c.code} value={c.code} className="bg-brand-900 text-white">
              {c.flag} {c.name}
            </option>
          ))}
        </select>
        <span
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-lg"
          aria-hidden
        >
          {WAITLIST_COUNTRIES.find((c) => c.code === (value || DEFAULT_COUNTRY_CODE))?.flag}
        </span>
      </div>
    </label>
  )
}
