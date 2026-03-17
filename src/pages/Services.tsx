import { Helmet } from 'react-helmet-async'
import { SectionReveal } from '../components/SectionReveal'
import { services } from '../data/services'

export function Services() {
  return (
    <>
      <Helmet>
        <title>Services — City Nest Solutions | Planning, coordination & performance</title>
        <meta
          name="description"
          content="Four core City Nest services: strategic and operational planning, programme coordination and PMO, process simplification and performance frameworks."
        />
        <meta property="og:title" content="Services — City Nest Solutions" />
      </Helmet>

      <section className="section-padding-home bg-page">
        <div className="container-home">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">What we do</p>
            <h1 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.5rem] mt-2">
              Services that connect strategy, delivery and performance.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-mid-grey">
              We focus on a small number of areas where we can add the most value — planning, coordination,
              process simplification and performance frameworks — working alongside your teams.
            </p>
          </SectionReveal>
        </div>
      </section>

      {services.map((s, sectionIndex) => (
        <section
          key={s.id}
          id={s.id}
          className={`section-padding-home ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-surface'}`}
          aria-labelledby={`service-${s.id}`}
        >
          <div className="container-home">
            <SectionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                {s.slug.replace(/-/g, ' ')}
              </p>
              <h2
                id={`service-${s.id}`}
                className="font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.5rem] mt-2"
              >
                {s.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-mid-grey">{s.shortDesc}</p>
            </SectionReveal>

            <div className="mt-14 grid gap-10 lg:grid-cols-2">
              <SectionReveal delay={0.05}>
                <div className="rounded-2xl border border-steel-grey/15 bg-white p-8 shadow-card ring-1 ring-steel-grey/5">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-brand">Outcomes</h3>
                  <ul className="mt-3 space-y-2 text-mid-grey">
                    {s.outcomes.map((o) => (
                      <li key={o} className="flex gap-2">
                        <span className="text-brand">—</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <div className="rounded-2xl border border-steel-grey/15 bg-white p-8 shadow-card ring-1 ring-steel-grey/5">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-brand">Deliverables</h3>
                  <ul className="mt-3 space-y-2 text-mid-grey">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span className="text-brand">—</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            </div>

            <div className="mt-14 flex flex-wrap gap-10 border-top border-steel-grey/15 pt-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-brand">
                  Typical timeline
                </span>
                <p className="mt-1 text-mid-grey">{s.timeline}</p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-brand">
                  Suitable for
                </span>
                <p className="mt-1 text-mid-grey">{s.suitableFor}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

