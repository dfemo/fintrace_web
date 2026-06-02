export const DEFAULT_COUNTRY_CODE = 'GB'

export type CountryOption = {
  code: string
  name: string
  flag: string
}

/** ISO 3166-1 alpha-2 → flag emoji */
export function flagEmoji(code: string): string {
  const upper = code.toUpperCase()
  if (upper.length !== 2) return ''
  return String.fromCodePoint(
    ...[...upper].map((c) => 0x1f1e6 - 65 + c.charCodeAt(0)),
  )
}

export const WAITLIST_COUNTRIES: CountryOption[] = [
  { code: 'GB', name: 'United Kingdom', flag: flagEmoji('GB') },
  { code: 'IE', name: 'Ireland', flag: flagEmoji('IE') },
  { code: 'US', name: 'United States', flag: flagEmoji('US') },
  { code: 'CA', name: 'Canada', flag: flagEmoji('CA') },
  { code: 'AU', name: 'Australia', flag: flagEmoji('AU') },
  { code: 'NZ', name: 'New Zealand', flag: flagEmoji('NZ') },
  { code: 'DE', name: 'Germany', flag: flagEmoji('DE') },
  { code: 'FR', name: 'France', flag: flagEmoji('FR') },
  { code: 'NL', name: 'Netherlands', flag: flagEmoji('NL') },
  { code: 'BE', name: 'Belgium', flag: flagEmoji('BE') },
  { code: 'ES', name: 'Spain', flag: flagEmoji('ES') },
  { code: 'IT', name: 'Italy', flag: flagEmoji('IT') },
  { code: 'PT', name: 'Portugal', flag: flagEmoji('PT') },
  { code: 'SE', name: 'Sweden', flag: flagEmoji('SE') },
  { code: 'NO', name: 'Norway', flag: flagEmoji('NO') },
  { code: 'DK', name: 'Denmark', flag: flagEmoji('DK') },
  { code: 'FI', name: 'Finland', flag: flagEmoji('FI') },
  { code: 'PL', name: 'Poland', flag: flagEmoji('PL') },
  { code: 'CH', name: 'Switzerland', flag: flagEmoji('CH') },
  { code: 'AT', name: 'Austria', flag: flagEmoji('AT') },
  { code: 'AE', name: 'United Arab Emirates', flag: flagEmoji('AE') },
  { code: 'IN', name: 'India', flag: flagEmoji('IN') },
  { code: 'SG', name: 'Singapore', flag: flagEmoji('SG') },
  { code: 'HK', name: 'Hong Kong', flag: flagEmoji('HK') },
  { code: 'JP', name: 'Japan', flag: flagEmoji('JP') },
  { code: 'ZA', name: 'South Africa', flag: flagEmoji('ZA') },
  { code: 'BR', name: 'Brazil', flag: flagEmoji('BR') },
  { code: 'MX', name: 'Mexico', flag: flagEmoji('MX') },
]

export function countryLabel(code: string): string {
  const match = WAITLIST_COUNTRIES.find((c) => c.code === code)
  return match ? `${match.flag} ${match.name}` : code
}
