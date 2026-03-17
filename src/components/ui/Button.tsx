import { ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'

type Variant = 'primary' | 'ghost'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
  to?: string
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-btn px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

const variants: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  ghost:
    'border border-charcoal/25 text-charcoal bg-white hover:border-brand hover:text-brand hover:bg-brand/5',
}

export function Button({ children, variant = 'primary', to, ...rest }: ButtonProps) {
  if (to) {
    const linkProps = rest as Omit<LinkProps, 'to'>
    return (
      <Link
        to={to}
        className={`${base} ${variants[variant]}`}
        {...linkProps}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type="button"
      className={`${base} ${variants[variant]}`}
      {...rest}
    >
      {children}
    </button>
  )
}

