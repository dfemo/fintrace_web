import type { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline' | 'dark'
  fullWidth?: boolean
}

const variants = {
  primary:
    'bg-primary text-white hover:bg-primary-hover shadow-sm shadow-primary/20',
  outline:
    'border border-border bg-surface text-ink hover:border-ink/20 hover:bg-surface-muted',
  dark: 'bg-ink text-white hover:bg-ink/90',
}

export function PrimaryButton({
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
  ...props
}: Props) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition disabled:opacity-60 ${
        variants[variant]
      } ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
