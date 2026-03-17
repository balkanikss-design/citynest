import { useState, FormEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { SectionReveal } from '../components/SectionReveal'

const roles = [
  {
    id: 'senior-consultant-planning',
    title: 'Senior consultant — planning & performance',
    type: 'Full‑time · Remote / London',
    summary:
      'Lead work on planning cycles and performance frameworks with clients across sectors.',
  },
  {
    id: 'consultant-pmo',
    title: 'Consultant — programme coordination & PMO',
    type: 'Full‑time · Remote / UK',
    summary:
      'Support portfolio‑level coordination and PMO, shaping governance, reporting and rhythms.',
  },
  {
    id: 'consultant-process',
    title: 'Consultant — process & ways of working',
    type: 'Full‑time · Remote / UK',
    summary:
      'Work with teams to map, simplify and redesign core processes and hand‑offs.',
  },
  {
    id: 'associate-consultant',
    title: 'Associate consultant',
    type: 'Full‑time · Early careers',
    summary:
      'Blend analysis, facilitation support and delivery tasks across client engagements.',
  },
  {
    id: 'freelance-collaborator',
    title: 'Freelance collaborator',
    type: 'Contract · Project‑based',
    summary:
      'Join specific pieces of work where your experience in planning, PMO or operations fits.',
  },
] as const

type RoleId = (typeof roles)[number]['id']

export function Careers() {
  const [activeRole, setActiveRole] = useState<RoleId | null>(null)
  const [submittedFor, setSubmittedFor] = useState<RoleId | null>(null)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (activeRole) {
      setSubmittedFor(activeRole)
    }
  }

  const currentRole = roles.find((r) => r.id === activeRole) ?? null

  return (
    <>
      <Helmet>
        <title>Careers — City Nest Solutions | Working with us</title>
        <meta
          name="description"
          content="Information about working with City Nest Solutions and the kind of consulting work we do."
        />
        <meta property="og:title" content="Careers — City Nest Solutions" />
      </Helmet>

      <section className="section-padding-home bg-page">
        <div className="container-home">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">Careers</p>
            <h1 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.5rem] mt-2">
              Working with City Nest Solutions.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-mid-grey">
              We&apos;re a small consultancy and hire selectively, based on client demand and fit. When we do
              recruit, we look for people who are comfortable moving between analysis, facilitation and delivery.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding-home bg-white">
        <div className="container-home">
          <SectionReveal>
            <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">
              Current example roles.
            </h2>
            <p className="mt-3 text-base text-mid-grey max-w-2xl">
              These roles show the kind of profiles we typically work with. Listings are illustrative — adapt
              them as needed for live recruitment.
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {roles.map((role, index) => (
              <SectionReveal key={role.id} delay={index * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-steel-grey/20 bg-surface p-6 shadow-card">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-charcoal">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-brand">
                      {role.type}
                    </p>
                    <p className="mt-3 text-sm text-mid-grey">{role.summary}</p>
                  </div>
                  <div className="mt-5 flex items-center justify-between text-xs text-steel-grey">
                    <span>Applications considered on a rolling basis.</span>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveRole(role.id)
                        setSubmittedFor(null)
                      }}
                      className="inline-flex items-center justify-center rounded-btn border border-brand/60 px-4 py-2 text-xs font-semibold text-brand hover:bg-brand hover:text-white"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.2}>
            <div className="mt-12 rounded-2xl border border-steel-grey/15 bg-surface p-6 text-sm text-mid-grey">
              If none of these quite fit but you think you&apos;d be a strong match for the type of work we do,
              you can still reach out via the Contact page with a short note and CV.
            </div>
          </SectionReveal>
        </div>
      </section>

      <AnimatePresence>
        {currentRole && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
            aria-label={`Apply for ${currentRole.title}`}
          >
            <motion.div
              className="relative max-h-[80vh] w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-card"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-center justify-between border-b border-charcoal/10 px-6 py-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                    Apply
                  </p>
                  <h2 className="text-sm font-semibold text-charcoal">
                    {currentRole.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveRole(null)
                    setSubmittedFor(null)
                  }}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full text-mid-grey hover:bg-page hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
                  aria-label="Close apply form"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="max-h-[calc(80vh-3.5rem)] overflow-y-auto px-6 py-5">
                {submittedFor === currentRole.id ? (
                  <div className="space-y-3 text-sm text-charcoal">
                    <p className="font-semibold">Thank you for your application.</p>
                    <p>
                      We&apos;ll review the details and be in touch if it&apos;s a good fit for upcoming work.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-sm text-charcoal">
                    <p className="text-sm text-mid-grey">
                      Share a short overview of your experience and why this role interests you. Adapt the
                      fields as needed when you turn this into a live process.
                    </p>
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
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          className="mt-1 w-full rounded-xl border border-steel-grey/30 bg-white px-3 py-2.5 text-sm outline-none ring-0 transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wide text-mid-grey">
                        LinkedIn or website (optional)
                      </label>
                      <input
                        type="url"
                        className="mt-1 w-full rounded-xl border border-steel-grey/30 bg-white px-3 py-2.5 text-sm outline-none ring-0 transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wide text-mid-grey">
                        Short note / motivation
                      </label>
                      <textarea
                        required
                        rows={4}
                        className="mt-1 w-full rounded-xl border border-steel-grey/30 bg-white px-3 py-2.5 text-sm outline-none ring-0 transition-colors focus:border-brand focus:ring-1 focus:ring-brand"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-primary w-full justify-center text-sm font-semibold"
                    >
                      Submit application
                    </button>
                    <p className="text-[11px] leading-relaxed text-steel-grey">
                      This example form does not send data anywhere by default. Connect it to your applicant
                      tracking system or email workflow when you go live.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

