import { FormEvent, useState } from 'react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="space-y-3 text-sm text-charcoal">
        <p className="font-semibold">Thank you for getting in touch.</p>
        <p>We&apos;ll review your message and respond within 1–2 working days.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-mid-grey">
            Name
          </label>
          <input
            type="text"
            required
            className="mt-1 w-full rounded-xl border border-steel-grey/30 bg-white px-3 py-2.5 text-sm outline-none ring-0 transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
          />
        </div>
        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-mid-grey">
            Organisation
          </label>
          <input
            type="text"
            className="mt-1 w-full rounded-xl border border-steel-grey/30 bg-white px-3 py-2.5 text-sm outline-none ring-0 transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-mid-grey">
            Email
          </label>
          <input
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-steel-grey/30 bg-white px-3 py-2.5 text-sm outline-none ring-0 transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
          />
        </div>
        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-mid-grey">
            Phone (optional)
          </label>
          <input
            type="tel"
            className="mt-1 w-full rounded-xl border border-steel-grey/30 bg-white px-3 py-2.5 text-sm outline-none ring-0 transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium uppercase tracking-wide text-mid-grey">
          How can we help?
        </label>
        <textarea
          required
          rows={4}
          className="mt-1 w-full rounded-xl border border-steel-grey/30 bg-white px-3 py-2.5 text-sm outline-none ring-0 transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
        />
      </div>
      <button
        type="submit"
        className="btn-primary w-full justify-center"
      >
        Send message
      </button>
      <p className="text-[11px] leading-relaxed text-steel-grey">
        We&apos;ll only use your details to respond to this enquiry, unless we agree otherwise with you.
      </p>
    </form>
  )
}

