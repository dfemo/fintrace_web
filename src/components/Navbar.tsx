'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { AnnouncementBanner } from './AnnouncementBanner'
import { PrimaryButton } from './ui/PrimaryButton'

type Props = {
  onNotifyClick: () => void
}

const productLinks = [
  { href: '/#products', label: 'Cashflow intelligence' },
  { href: '/#products', label: 'Payout forecasting' },
  { href: '/#products', label: 'Order-risk scoring' },
  { href: '/#products', label: 'Unified dashboard' },
]

const solutionLinks = [
  { href: '/about', label: 'Shopify sellers' },
  { href: '/about', label: 'TikTok Shop' },
  { href: '/about', label: 'Multi-channel SMEs' },
  { href: '/about', label: 'Growing micro-businesses' },
]

function NavDropdown({
  label,
  links,
  onNavigate,
}: {
  label: string
  links: { href: string; label: string }[]
  onNavigate?: () => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-medium text-ink-muted transition hover:text-ink"
        aria-expanded={open}
      >
        {label}
        <svg className="h-4 w-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-xl border border-border bg-surface py-2 shadow-lg shadow-ink/10">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block px-4 py-2.5 text-sm text-ink-muted transition hover:bg-surface-muted hover:text-ink"
              onClick={() => {
                setOpen(false)
                onNavigate?.()
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function navLinkClass(active: boolean) {
  return `text-sm font-medium transition ${
    active ? 'text-primary' : 'text-ink-muted hover:text-ink'
  }`
}

function NavItem({ href, label, onNavigate }: { href: string; label: string; onNavigate?: () => void }) {
  const pathname = usePathname() ?? '/'
  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <Link href={href} className={navLinkClass(isActive)} onClick={onNavigate}>
      {label}
    </Link>
  )
}

export function Navbar({ onNotifyClick }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-40">
      <AnnouncementBanner />
      <div className="border-b border-border bg-surface/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5" onClick={closeMenu}>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
              F
            </span>
            <span className="text-lg font-semibold tracking-tight text-ink">
              FinTrace<span className="text-primary">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <NavDropdown label="Products" links={productLinks} />
            <NavDropdown label="Solutions" links={solutionLinks} />
            <NavItem href="/about" label="About us" />
            <NavItem href="/contact" label="Contact us" />
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden text-sm font-medium text-ink-muted transition hover:text-ink md:inline-block"
            >
              Login
            </Link>
            <PrimaryButton onClick={onNotifyClick} className="hidden sm:inline-flex">
              Get Started
            </PrimaryButton>
            <button
              type="button"
              className="rounded-lg p-2 text-ink-muted lg:hidden"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-border bg-surface px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">Products</p>
              {productLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-ink-muted"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-ink-subtle">Solutions</p>
              {solutionLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-ink-muted"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              <NavItem href="/about" label="About us" onNavigate={closeMenu} />
              <NavItem href="/contact" label="Contact us" onNavigate={closeMenu} />
              <Link href="/contact" className="text-sm font-medium text-ink-muted" onClick={closeMenu}>
                Login
              </Link>
              <PrimaryButton
                fullWidth
                onClick={() => {
                  closeMenu()
                  onNotifyClick()
                }}
              >
                Get Started
              </PrimaryButton>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
