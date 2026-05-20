'use client'

import { WaitlistForm } from './WaitlistForm'
import { useNotify } from './NotifyProvider'

const features = [
  {
    title: 'Predictive cashflow',
    description:
      'See 7, 14, and 30-day cashflow forecasts across Shopify, TikTok Shop, Stripe, and PayPal — before shortages hit.',
    icon: '📈',
  },
  {
    title: 'Payout intelligence',
    description:
      'Know when money lands. Forecast payout delays, reserves, and platform holds across every channel.',
    icon: '💷',
  },
  {
    title: 'Order-risk scoring',
    description:
      'Flag high-risk orders before you ship. Reduce refunds, chargebacks, and losses with seller-side protection.',
    icon: '🛡️',
  },
  {
    title: 'Unified dashboard',
    description:
      'One view of orders, payments, refunds, and true profit — no more spreadsheet reconciliation.',
    icon: '◇',
  },
]

const platforms = ['Shopify', 'TikTok Shop', 'Stripe', 'PayPal', 'Etsy', 'Amazon']

export function HomePage() {
  const { openNotify } = useNotify()

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(20,184,166,0.18),transparent)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pt-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-sm text-accent-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent-400" />
            Early access — launching soon for UK sellers
          </div>

          <h1 className="mt-8 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            One platform for your{' '}
            <span className="bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
              true financial picture
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
            FinTrace SME unifies sales, payouts, and risk across every channel you sell on. Built for UK
            micro-businesses who need clarity — not another spreadsheet.
          </p>

          <div className="mt-10 max-w-xl">
            <WaitlistForm source="hero" />
            <p className="mt-3 text-sm text-slate-500">
              Join early birds for launch updates and founder pricing.{' '}
              <button
                type="button"
                onClick={openNotify}
                className="text-accent-400 underline-offset-2 hover:underline"
              >
                Or open the full form
              </button>
            </p>
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
            {platforms.map((p) => (
              <span
                key={p}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-400"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-brand-900/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Stop guessing. Start knowing.
            </h2>
            <p className="mt-4 text-slate-400">
              E-commerce platforms show what happened yesterday. Payment providers react after disputes.
              FinTrace predicts what&apos;s coming — so you can ship, stock, and scale with confidence.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <article
                key={f.title}
                className="rounded-2xl border border-white/10 bg-brand-950/60 p-6 transition hover:border-accent-500/30"
              >
                <span className="text-2xl" aria-hidden>
                  {f.icon}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="early-bird" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-3xl border border-accent-500/20 bg-gradient-to-br from-brand-800 to-brand-900 p-8 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="lg:max-w-lg">
              <h2 className="font-display text-3xl font-semibold text-white">Be an early bird</h2>
              <p className="mt-4 text-slate-300">
                We&apos;re building FinTrace SME for sellers like you. Leave your email and we&apos;ll notify
                you at launch — plus exclusive early-adopter benefits.
              </p>
            </div>
            <div className="mt-8 w-full lg:mt-0 lg:max-w-md">
              <WaitlistForm source="cta" compact />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
