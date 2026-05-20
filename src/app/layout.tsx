import type { Metadata } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import { Shell } from '@/components/Shell'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  title: 'FinTrace SME — Financial intelligence for UK sellers',
  description:
    'AI-powered financial and risk intelligence for UK online micro-businesses. Join the early bird waitlist.',
  openGraph: {
    title: 'FinTrace SME',
    description: 'One platform for your true financial picture.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  )
}
