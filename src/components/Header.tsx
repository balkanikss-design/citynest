import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Projects' },
  { to: '/our-approach', label: 'Our Approach' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-white/95 backdrop-blur-2xl shadow-header">
      <div className="container-home flex items-center justify-between gap-3 py-3 sm:py-4">
        <Link
          to="/"
          className="flex items-center rounded-xl opacity-100 transition-opacity duration-300 hover:opacity-90 focus-visible:outline-none"
          aria-label="City Nest Solutions home"
        >
          <motion.img
            src="/logo.png"
            alt="City Nest Solutions — Planning, Coordination & Performance"
            className="h-[2.5rem] w-auto object-contain sm:h-11 md:h-[3rem]"
            width={220}
            height={70}
            fetchPriority="high"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          />
        </Link>

        <nav
          className="hidden items-center gap-1.5 rounded-full border border-charcoal/10 bg-page px-1.5 py-1 shadow-[0_10px_30px_rgba(15,23,42,0.12)] md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map(({ to, label }) => {
            const active = location.pathname === to || (to !== '/' && location.pathname.startsWith(to))
            return (
              <Link
                key={to}
                to={to}
                className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-300 focus-visible:outline-none ${
                  active
                    ? 'bg-brand text-white shadow-sm'
                    : 'text-charcoal/80 hover:bg-charcoal/5 hover:text-charcoal'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/start-a-project"
            className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Discuss a programme
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full border border-charcoal/10 bg-page p-2.5 text-charcoal/80 shadow-sm transition-colors duration-300 hover:bg-charcoal/5 hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="border-t border-charcoal/10 bg-white/98 backdrop-blur-2xl md:hidden"
          >
            <nav
              className="flex flex-col gap-1.5 container-home px-2 py-4"
              aria-label="Mobile navigation"
            >
              {navLinks.map(({ to, label }) => {
                const active = location.pathname === to || (to !== '/' && location.pathname.startsWith(to))
                return (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium shadow-sm transition-colors ${
                      active
                        ? 'bg-brand text-white shadow-md'
                        : 'text-charcoal/90 bg-page hover:bg-charcoal/5'
                    }`}
                  >
                    {label}
                  </Link>
                )
              })}
              <Link
                to="/start-a-project"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-2xl bg-charcoal px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-charcoal/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Start a project brief
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

