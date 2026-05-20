'use client'

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import { NotifyModal } from './NotifyModal'

type NotifyContextValue = {
  openNotify: () => void
}

const NotifyContext = createContext<NotifyContextValue | null>(null)

export function useNotify() {
  const ctx = useContext(NotifyContext)
  if (!ctx) {
    throw new Error('useNotify must be used within NotifyProvider')
  }
  return ctx
}

export function NotifyProvider({ children }: { children: ReactNode }) {
  const [notifyOpen, setNotifyOpen] = useState(false)
  const openNotify = useCallback(() => setNotifyOpen(true), [])

  return (
    <NotifyContext.Provider value={{ openNotify }}>
      {children}
      <NotifyModal open={notifyOpen} onClose={() => setNotifyOpen(false)} />
    </NotifyContext.Provider>
  )
}
