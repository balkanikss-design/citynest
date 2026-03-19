import { Helmet } from 'react-helmet-async'
import { SectionReveal } from '../components/SectionReveal'
import { termsOfServiceContent } from '../data/legal'

export function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of service — City Nest Solutions</title>
        <meta
          name="description"
          content="Terms of service for City Nest Solutions management consultancy engagements."
        />
      </Helmet>

      <section className="section-padding-home bg-page">
        <div className="container-home max-w-3xl">
          <SectionReveal>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal">Terms of service</h1>
            <div className="mt-6">{termsOfServiceContent}</div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}

