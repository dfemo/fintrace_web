'use client'

import Link from 'next/link'
import { PrimaryButton } from './ui/PrimaryButton'

type Props = {
  onNotifyClick: () => void
}

const columns = [
  {
    title: 'Product',
    links: [
      { href: '/#products', label: 'Cashflow intelligence' },
      { href: '/#products', label: 'Payout forecasting' },
      { href: '/#products', label: 'Order-risk scoring' },
      { href: '/#products', label: 'Unified dashboard' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { href: '/about', label: 'Shopify sellers' },
      { href: '/about', label: 'TikTok Shop' },
      { href: '/about', label: 'Multi-channel SMEs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About us' },
      { href: '/contact', label: 'Contact' },
      { href: '/#early-bird', label: 'Early access' },
    ],
  },
]

export function Footer({ onNotifyClick }: Props) {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold">
              FinTrace<span className="text-primary">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              AI-powered financial and risk intelligence for UK micro-businesses selling online.
            </p>
            <PrimaryButton onClick={onNotifyClick} className="mt-6">
              Get Started
            </PrimaryButton>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-white">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/60 transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} FinTrace SME Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
