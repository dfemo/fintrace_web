import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { Shell } from '@/components/Shell'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'FinTrace SME — Financial intelligence for UK sellers',
  description:
    'Open financial intelligence for UK micro-businesses. Predictive cashflow, payout forecasting, and order-risk scoring across every channel.',
  openGraph: {
    title: 'FinTrace SME',
    description: 'Financial intelligence platform for frictionless commerce.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  )
}
