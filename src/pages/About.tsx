import { Helmet } from 'react-helmet-async'
import { SectionReveal } from '../components/SectionReveal'

const team = [
  {
    name: 'Placeholder name',
    role: 'Director',
    bio: 'Leads engagements and works with executive sponsors to shape scope, approach and governance.',
  },
  {
    name: 'Placeholder name',
    role: 'Principal consultant',
    bio: 'Focuses on planning, portfolio coordination and facilitation with cross‑functional teams.',
  },
]

export function About() {
  return (
    <>
      <Helmet>
        <title>About — City Nest Solutions | Planning, coordination & performance</title>
        <meta
          name="description"
          content="City Nest Solutions is a management consultancy that helps organisations strengthen planning, coordination and performance."
        />
        <meta property="og:title" content="About — City Nest Solutions" />
      </Helmet>

      <section className="section-padding-home bg-page">
        <div className="container-home">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">About</p>
            <h1 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.5rem] mt-2">
              About City Nest Solutions
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-mid-grey">
              We focus on the &quot;connective tissue&quot; of organisations — how plans are made, how work is
              coordinated and how performance is understood — so that teams can deliver with more confidence.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding-home bg-white" aria-labelledby="who-heading">
        <div className="container-home">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">Who we are</p>
            <h2
              id="who-heading"
              className="font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.5rem] mt-2"
            >
              Management consultants with delivery backgrounds.
            </h2>
            <p className="mt-6 text-lg text-mid-grey leading-relaxed">
              Our experience spans strategy, operations, digital and change. We bring that together in work
              that is practical, people‑centred and focused on building capability within your organisation.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding-home bg-surface" aria-labelledby="how-heading">
        <div className="container-home">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">How we work</p>
            <h2
              id="how-heading"
              className="font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.5rem] mt-2"
            >
              Structured, collaborative and transparent.
            </h2>
            <ul className="mt-8 space-y-5 text-lg text-mid-grey">
              <li className="flex gap-3">
                <span className="text-brand">—</span>
                <span>
                  <strong className="text-charcoal">Structured:</strong> We introduce just enough structure —
                  clear scope, deliverables and rhythms — without creating unnecessary overhead.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand">—</span>
                <span>
                  <strong className="text-charcoal">Collaborative:</strong> We work alongside your teams,
                  co‑designing approaches and making sure changes land in real meetings and artefacts.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand">—</span>
                <span>
                  <strong className="text-charcoal">Transparent:</strong> We are open about assumptions,
                  trade‑offs and risks so you can make informed decisions throughout the engagement.
                </span>
              </li>
            </ul>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding-home bg-white" aria-labelledby="sectors-heading">
        <div className="container-home">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">Sectors</p>
            <h2
              id="sectors-heading"
              className="font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.5rem] mt-2"
            >
              Who we work with.
            </h2>
            <p className="mt-6 text-lg text-mid-grey leading-relaxed">
              We work with public sector bodies, not‑for‑profits, housing and property organisations, financial
              services and technology‑led businesses — often where multiple partners must coordinate to deliver
              outcomes.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding-home bg-surface" aria-labelledby="team-heading">
        <div className="container-home">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">Team</p>
            <h2
              id="team-heading"
              className="font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.5rem] mt-2"
            >
              Leadership.
            </h2>
            <p className="mt-2 text-sm text-mid-grey">
              Profiles are placeholders for you to adapt with your own details.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {team.map((person, i) => (
                <SectionReveal key={person.name} delay={i * 0.05}>
                  <div className="rounded-2xl border border-steel-grey/15 bg-white p-8 shadow-card ring-1 ring-steel-grey/5">
                    <p className="font-semibold text-charcoal">{person.name}</p>
                    <p className="text-sm text-brand">{person.role}</p>
                    <p className="mt-2 text-sm text-mid-grey">{person.bio}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}

