'use client'

import Link from 'next/link'

type Props = {
  onNotifyClick: () => void
}

export function Footer({ onNotifyClick }: Props) {
  return (
    <footer className="border-t border-white/5 bg-brand-900/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-white">
            FinTrace <span className="text-accent-400">SME</span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-slate-400">
            AI-powered financial and risk intelligence for UK micro-businesses selling online.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-200">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/" className="hover:text-accent-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent-400">
                About us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent-400">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-200">Early access</p>
          <p className="mt-2 text-sm text-slate-400">
            Join the waitlist for launch updates and founder pricing.
          </p>
          <button
            type="button"
            onClick={onNotifyClick}
            className="mt-4 rounded-xl bg-accent-500 px-4 py-2 text-sm font-semibold text-brand-950 transition hover:bg-accent-400"
          >
            Notify me
          </button>
        </div>
      </div>
      <p className="mx-auto max-w-6xl px-4 pb-8 text-center text-xs text-slate-500 sm:px-6">
        © {new Date().getFullYear()} FinTrace SME. All rights reserved.
      </p>
    </footer>
  )
}
