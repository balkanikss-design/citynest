import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { SectionReveal } from '../components/SectionReveal'
import { insights } from '../data/insights'

export function Insights() {
  return (
    <>
      <Helmet>
        <title>Insights — City Nest Solutions | Planning, coordination & performance</title>
        <meta
          name="description"
          content="Short pieces from City Nest Solutions on planning, coordination, process simplification and performance."
        />
        <meta property="og:title" content="Insights — City Nest Solutions" />
      </Helmet>

      <section className="section-padding-home bg-page">
        <div className="container-home">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">Insights</p>
            <h1 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.5rem] mt-2">
              Observations from planning, coordination and performance work.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-mid-grey">
              Short, practical pieces drawn from client work — written to be useful for leaders, programme
              teams and PMOs.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding-home bg-white">
        <div className="container-home">
          <div className="grid gap-8 lg:grid-cols-3">
            {insights.map((article, i) => (
              <SectionReveal key={article.slug} delay={i * 0.05}>
                <Link
                  to={`/insights/${article.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-steel-grey/15 bg-white p-6 shadow-card ring-1 ring-steel-grey/5 transition-all duration-300 hover:border-brand/25 hover:ring-brand/25"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    {article.category}
                  </p>
                  <h2 className="mt-3 font-display text-xl font-semibold text-charcoal group-hover:text-brand transition-colors">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-sm text-mid-grey flex-1">{article.description}</p>
                  <p className="mt-4 text-xs text-steel-grey">{article.readTime}</p>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

