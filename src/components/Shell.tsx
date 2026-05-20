'use client'

import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { NotifyProvider, useNotify } from './NotifyProvider'

function ShellInner({ children }: { children: React.ReactNode }) {
  const { openNotify } = useNotify()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar onNotifyClick={openNotify} />
      <main className="flex-1">{children}</main>
      <Footer onNotifyClick={openNotify} />
    </div>
  )
}

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <NotifyProvider>
      <ShellInner>{children}</ShellInner>
    </NotifyProvider>
  )
}
