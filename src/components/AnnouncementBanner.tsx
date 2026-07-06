'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'fintrace-announcement-dismissed'

type Announcement = {
  id: string
  message: string
  highlight?: string
  href: string
  cta: string
}

const announcements: Announcement[] = [
  {
    id: 'early-access',
    message: 'Early access is open — predictive cashflow & payout intelligence for UK sellers',
    highlight: '💷',
    href: '/#early-bird',
    cta: 'Join the waitlist',
  },
  {
    id: 'founder-pricing',
    message: 'Be an early bird — founder pricing & launch updates for multi-channel sellers',
    highlight: '🚀',
    href: '/#early-bird',
    cta: 'Get Started',
  },
]

export function AnnouncementBanner() {
  const [visible, setVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    setVisible(dismissed !== 'true')
  }, [])

  useEffect(() => {
    if (!visible || announcements.length <= 1) return
    const timer = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % announcements.length)
    }, 8000)
    return () => window.clearInterval(timer)
  }, [visible])

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, 'true')
    setVisible(false)
  }

  if (!visible) return null

  const item = announcements[activeIndex]

  return (
    <div className="relative bg-ink text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-10 py-2.5 text-center sm:px-12">
        <p className="text-xs font-medium leading-snug sm:text-sm">
          {item.message}
          {item.highlight && (
            <span className="mx-1.5" aria-hidden>
              {item.highlight}
            </span>
          )}
          <Link
            href={item.href}
            className="ml-1 inline-flex items-center gap-1 font-semibold underline decoration-white/40 underline-offset-2 transition hover:decoration-white"
          >
            {item.cta}
            <span aria-hidden>👉</span>
          </Link>
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-white/60 transition hover:bg-white/10 hover:text-white"
          aria-label="Dismiss announcement"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
