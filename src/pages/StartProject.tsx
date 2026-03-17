import { Helmet } from 'react-helmet-async'
import { SectionReveal } from '../components/SectionReveal'
import { StartProjectForm } from '../components/StartProjectForm'

export function StartProject() {
  return (
    <>
      <Helmet>
        <title>Start a project — City Nest Solutions | Share a brief</title>
        <meta
          name="description"
          content="Use this structured form to share a short project brief with City Nest Solutions."
        />
        <meta property="og:title" content="Start a project — City Nest Solutions" />
      </Helmet>

      <section className="section-padding-home bg-page">
        <div className="container-home">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
              Start a project
            </p>
            <h1 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.5rem] mt-2">
              Share a brief.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-mid-grey">
              A short, structured form to help us understand your context, objectives and timing so we can
              suggest a practical next step.
            </p>
          </SectionReveal>

          <div className="mt-10 max-w-3xl rounded-2xl border border-steel-grey/15 bg-white p-6 shadow-card ring-1 ring-steel-grey/5 sm:p-8">
            <StartProjectForm />
          </div>
        </div>
      </section>
    </>
  )
}

