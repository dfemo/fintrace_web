export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="font-display text-4xl font-semibold text-white">About us</h1>
      <p className="mt-4 text-lg text-accent-400">Financial clarity for the new generation of UK sellers</p>

      <div className="mt-10 space-y-6 leading-relaxed text-slate-300">
        <p>
          FinTrace SME was founded to solve a problem millions of UK micro-businesses face every day: orders,
          payments, payouts, and refunds scattered across Shopify, TikTok Shop, Stripe, PayPal, and more — with
          no single source of truth for cashflow or risk.
        </p>
        <p>
          We&apos;re building an AI-powered, read-only intelligence layer that unifies your sales and financial
          data. Our platform predicts cashflow shortages, forecasts payout arrivals, scores order risk before
          you ship, and shows true profit after every fee and refund.
        </p>
        <p>
          Unlike basic platform reporting or reactive payment alerts, FinTrace gives you predictive,
          seller-focused protection — the kind of insight that used to be reserved for enterprise retailers.
        </p>
      </div>

      <div className="mt-12 rounded-2xl border border-white/10 bg-brand-900/50 p-6">
        <h2 className="text-lg font-semibold text-white">Our mission</h2>
        <p className="mt-3 text-slate-400">
          Empower every UK online micro-business with the financial visibility, control, and stability they
          need to grow confidently — across every channel they sell on.
        </p>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          { label: 'Focus', value: 'UK micro-businesses' },
          { label: 'Approach', value: 'Read-only & secure' },
          { label: 'Status', value: 'Early access' },
        ].map((item) => (
          <li key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-xs uppercase tracking-wider text-slate-500">{item.label}</p>
            <p className="mt-1 font-medium text-white">{item.value}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
