import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'

export default function AboutPage() {
  return (
    <>
      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Company</SectionLabel>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">About us</h1>
          <p className="mt-4 text-lg text-primary">
            Financial clarity for the new generation of UK sellers
          </p>

          <div className="mt-10 space-y-6 leading-relaxed text-ink-muted">
            <p>
              FinTrace SME was founded to solve a problem millions of UK micro-businesses face every day:
              orders, payments, payouts, and refunds scattered across Shopify, TikTok Shop, Stripe, PayPal,
              and more — with no single source of truth for cashflow or risk.
            </p>
            <p>
              We&apos;re building an AI-powered, read-only intelligence layer that unifies your sales and
              financial data. Our platform predicts cashflow shortages, forecasts payout arrivals, scores
              order risk before you ship, and shows true profit after every fee and refund.
            </p>
            <p>
              Unlike basic platform reporting or reactive payment alerts, FinTrace gives you predictive,
              seller-focused protection — the kind of insight that used to be reserved for enterprise
              retailers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="text-lg font-bold text-ink">Our mission</h2>
            <p className="mt-3 text-ink-muted">
              Empower every UK online micro-business with the financial visibility, control, and stability
              they need to grow confidently — across every channel they sell on.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Focus', value: 'UK micro-businesses' },
              { label: 'Approach', value: 'Read-only & secure' },
              { label: 'Status', value: 'Early access' },
            ].map((item) => (
              <li
                key={item.label}
                className="rounded-xl border border-border bg-surface p-5 text-center"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                  {item.label}
                </p>
                <p className="mt-2 font-semibold text-ink">{item.value}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 text-center">
            <Link
              href="/#early-bird"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
            >
              Join the waitlist
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
