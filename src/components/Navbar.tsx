'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

type Props = {
  onNotifyClick: () => void
}

function navLinkClass(active: boolean) {
  return `text-sm font-medium transition ${
    active ? 'text-accent-400' : 'text-slate-300 hover:text-white'
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
    <header className="sticky top-0 z-40 border-b border-white/5 bg-brand-950/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/20 text-lg font-bold text-accent-400">
            F
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            FinTrace <span className="text-accent-400">SME</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavItem href="/" label="Home" />
          <NavItem href="/about" label="About us" />
          <NavItem href="/contact" label="Contact us" />
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onNotifyClick}
            className="hidden rounded-xl bg-accent-500 px-4 py-2 text-sm font-semibold text-brand-950 transition hover:bg-accent-400 sm:inline-block"
          >
            Notify me
          </button>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-300 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/5 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <NavItem href="/" label="Home" onNavigate={closeMenu} />
            <NavItem href="/about" label="About us" onNavigate={closeMenu} />
            <NavItem href="/contact" label="Contact us" onNavigate={closeMenu} />
            <button
              type="button"
              onClick={() => {
                closeMenu()
                onNotifyClick()
              }}
              className="rounded-xl bg-accent-500 py-2.5 text-sm font-semibold text-brand-950"
            >
              Notify me
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
