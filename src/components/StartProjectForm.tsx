import { FormEvent, useState } from 'react'

export function StartProjectForm() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="space-y-3 text-sm text-charcoal">
        <p className="font-semibold">Thank you for sharing this brief.</p>
        <p>We&apos;ll review the details and get in touch to suggest next steps.</p>
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
            required
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
            Location / time zone
          </label>
          <input
            type="text"
            className="mt-1 w-full rounded-xl border border-steel-grey/30 bg-white px-3 py-2.5 text-sm outline-none ring-0 transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium uppercase tracking-wide text-mid-grey">
          What are you trying to achieve?
        </label>
        <textarea
          required
          rows={4}
          className="mt-1 w-full rounded-xl border border-steel-grey/30 bg-white px-3 py-2.5 text-sm outline-none ring-0 transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-mid-grey">
            Timescales or key dates
          </label>
          <textarea
            rows={3}
            className="mt-1 w-full rounded-xl border border-steel-grey/30 bg-white px-3 py-2.5 text-sm outline-none ring-0 transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
          />
        </div>
        <div>
          <label className="block text-xs font-medium uppercase tracking-wide text-mid-grey">
            Anything else that would be helpful to know?
          </label>
          <textarea
            rows={3}
            className="mt-1 w-full rounded-xl border border-steel-grey/30 bg-white px-3 py-2.5 text-sm outline-none ring-0 transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn-primary w-full justify-center"
      >
        Submit project brief
      </button>
      <p className="text-[11px] leading-relaxed text-steel-grey">
        Submitting this form does not commit you to working with us. We&apos;ll use it to shape an initial conversation.
      </p>
    </form>
  )
}

