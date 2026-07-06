type Props = {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className = '' }: Props) {
  return (
    <p className={`text-sm font-semibold uppercase tracking-widest text-primary ${className}`}>
      {children}
    </p>
  )
}
