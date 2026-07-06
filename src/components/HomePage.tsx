'use client'

import Link from 'next/link'
import { WaitlistForm } from './WaitlistForm'
import { useNotify } from './NotifyProvider'
import { SectionLabel } from './ui/SectionLabel'
import { PrimaryButton } from './ui/PrimaryButton'
import { WAITLIST_COUNTRIES } from '@/lib/countries'

const platforms = ['Shopify', 'TikTok Shop', 'Stripe', 'PayPal', 'Etsy', 'Amazon', 'eBay', 'WooCommerce']

const products = [
  {
    title: 'Cashflow intelligence',
    description:
      'See 7, 14, and 30-day cashflow forecasts across every channel — before shortages hit your operations.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Payout forecasting',
    description:
      'Know when money lands. Forecast payout delays, reserves, and platform holds across every payment provider.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Order-risk scoring',
    description:
      'Flag high-risk orders before you ship. Reduce refunds, chargebacks, and losses with seller-side protection.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Unified dashboard',
    description:
      'One view of orders, payments, refunds, and true profit — no more spreadsheet reconciliation.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '6+', label: 'Sales & payment channels unified' },
  { value: '30', label: 'Day cashflow forecasting' },
  { value: '100%', label: 'Read-only & secure by design' },
]

const solutions = [
  {
    title: 'Shopify sellers',
    description: 'Unify Shopify orders with Stripe and PayPal payouts in one financial view.',
  },
  {
    title: 'TikTok Shop',
    description: 'Track TikTok sales alongside traditional channels without manual reconciliation.',
  },
  {
    title: 'Multi-channel SMEs',
    description: 'See true profit across every marketplace, payment provider, and refund.',
  },
  {
    title: 'Growing micro-businesses',
    description: 'Predict cash gaps before they stall inventory, payroll, or growth plans.',
  },
]

const testimonials = [
  {
    quote:
      'We were drowning in spreadsheets across Shopify and PayPal. FinTrace gives us the clarity we needed to plan stock and payouts with confidence.',
    author: 'Sarah M.',
    role: 'Founder, UK homeware brand',
    stat: '14-day',
    statLabel: 'cashflow visibility',
  },
  {
    quote:
      'Knowing when payouts actually land — not when platforms say they will — has changed how we manage cash. This is what small sellers have been missing.',
    author: 'James T.',
    role: 'TikTok Shop seller',
    stat: '40%',
    statLabel: 'less time on reconciliation',
  },
]

export function HomePage() {
  const { openNotify } = useNotify()

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(92,62,232,0.08),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:pt-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light px-4 py-1.5 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Early access — launching soon for UK sellers
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Financial intelligence platform for{' '}
              <span className="text-primary">frictionless commerce</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted sm:text-xl">
              Predict cashflow, forecast payouts, and score order risk across Shopify, TikTok Shop, Stripe,
              and PayPal — through one simple, read-only intelligence layer.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <PrimaryButton onClick={openNotify}>Get Started</PrimaryButton>
              <Link href="/about">
                <PrimaryButton variant="outline">Explore our API</PrimaryButton>
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-xl rounded-2xl border border-border bg-surface p-6 shadow-lg shadow-ink/5">
            <p className="mb-4 text-center text-sm font-medium text-ink-muted">
              Join the early bird waitlist
            </p>
            <WaitlistForm source="hero" />
            <p className="mt-3 text-center text-xs text-ink-subtle">
              Launch updates and founder pricing.{' '}
              <button
                type="button"
                onClick={openNotify}
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                Open full form
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Logo marquee */}
      <section className="border-y border-border bg-surface-muted py-8">
        <div className="overflow-hidden">
          <div className="marquee-track flex w-max gap-12">
            {[...platforms, ...platforms].map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="shrink-0 text-lg font-semibold text-ink-subtle/70"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>The problem</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Scattered data creates friction, limits visibility, and slows growth for online sellers.
            </h2>
          </div>
        </div>
      </section>

      {/* Platform intro */}
      <section className="bg-surface-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Say hello to FinTrace</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Financial intelligence infrastructure for sellers and operators
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Cashflow',
                description:
                  'Predict shortages before they hit. See real-time forecasts across every sales and payment channel.',
              },
              {
                title: 'Payouts',
                description:
                  'Know when money lands. Forecast delays, reserves, and platform holds with seller-focused accuracy.',
              },
              {
                title: 'Risk',
                description:
                  'Score orders before you ship. Reduce chargebacks and losses with proactive seller protection.',
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-surface p-8 transition hover:shadow-lg hover:shadow-ink/5"
              >
                <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-5xl font-bold text-primary sm:text-6xl">{s.value}</p>
                <p className="mt-3 text-sm text-ink-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-surface-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>The FinTrace platform</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Get to clarity faster with trusted intelligence, all in one dashboard
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {products.map((p) => (
              <article
                key={p.title}
                className="group rounded-2xl border border-border bg-surface p-8 transition hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary transition group-hover:bg-primary group-hover:text-white">
                  {p.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Coverage</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Built for UK sellers, expanding across Europe
            </h2>
            <p className="mt-4 text-ink-muted">
              Join from your country today — we&apos;re onboarding early birds across supported markets.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {WAITLIST_COUNTRIES.map((c) => (
              <div
                key={c.code}
                className="flex flex-col items-center rounded-xl border border-border bg-surface-muted px-4 py-5 text-center transition hover:border-primary/30"
              >
                <span className="text-3xl" aria-hidden>
                  {c.flag}
                </span>
                <span className="mt-2 text-sm font-medium text-ink">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-surface-muted py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Solutions</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Enabling smarter decisions across every selling channel
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {solutions.map((s) => (
              <article
                key={s.title}
                className="rounded-2xl border border-border bg-surface p-8"
              >
                <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {testimonials.map((t) => (
              <article
                key={t.author}
                className="flex flex-col rounded-2xl border border-border bg-surface-muted p-8"
              >
                <p className="text-4xl font-bold text-primary">{t.stat}</p>
                <p className="mt-1 text-sm text-ink-muted">{t.statLabel}</p>
                <blockquote className="mt-6 flex-1 text-ink-muted">&ldquo;{t.quote}&rdquo;</blockquote>
                <footer className="mt-6 border-t border-border pt-6">
                  <p className="font-semibold text-ink">{t.author}</p>
                  <p className="text-sm text-ink-subtle">{t.role}</p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Developer / built for sellers */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <SectionLabel className="!text-primary-light">Built for sellers</SectionLabel>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Get to financial clarity faster — so you can focus on growing, not reconciling
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            FinTrace connects read-only to your sales and payment accounts. No spreadsheets. No guesswork.
            Just the numbers you need to make confident decisions.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryButton onClick={openNotify}>Get Started</PrimaryButton>
            <Link href="/contact">
              <PrimaryButton variant="outline" className="!border-white/20 !bg-transparent !text-white hover:!bg-white/10">
                Talk to us
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Early bird CTA */}
      <section id="early-bird" className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary-light to-surface p-8 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-bold text-ink">Ready to join the early birds?</h2>
              <p className="mt-4 text-ink-muted">
                We&apos;re building FinTrace SME for sellers like you. Leave your details and we&apos;ll
                notify you at launch — plus exclusive early-adopter benefits.
              </p>
            </div>
            <div className="mt-8 w-full rounded-2xl border border-border bg-surface p-6 shadow-sm lg:mt-0 lg:max-w-md">
              <WaitlistForm source="cta" compact />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
