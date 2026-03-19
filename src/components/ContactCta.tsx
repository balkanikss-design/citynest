import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(55,179,230,0.28),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(123,199,186,0.2),transparent_55%)]" />
      <div className="container-home relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand">
              Next step
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              Ready to strengthen planning, coordination or performance?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl">
              Share a short brief or start with an initial conversation. We&apos;ll suggest a practical route
              based on where you are today.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
            <Link
              to="/start-a-project"
              className="inline-flex items-center justify-center rounded-btn bg-white px-7 py-3.5 text-sm font-semibold text-charcoal shadow-card hover:bg-white/90"
            >
              Start a project brief
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-btn border border-white/35 px-7 py-3.5 text-sm font-semibold text-white/90 bg-white/0 backdrop-blur hover:bg-white/5"
            >
              Contact City Nest
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

