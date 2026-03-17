import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="section-padding-home bg-page">
      <div className="container-home text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">Not found</p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal mb-4">
          We couldn&apos;t find that page.
        </h1>
        <p className="text-mid-grey mb-6">
          The link may be broken or the page may have moved.
        </p>
        <Link to="/" className="btn-primary">
          Back to home
        </Link>
      </div>
    </section>
  )
}

