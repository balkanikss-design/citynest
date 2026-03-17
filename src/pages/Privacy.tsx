import { Helmet } from 'react-helmet-async'
import { SectionReveal } from '../components/SectionReveal'
import { privacyPolicyContent } from '../data/legal'

export function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy policy — City Nest Solutions</title>
        <meta
          name="description"
          content="How City Nest Solutions collects and uses personal information in the course of its work."
        />
      </Helmet>

      <section className="section-padding-home bg-page">
        <div className="container-home max-w-3xl">
          <SectionReveal>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal">
              Privacy policy
            </h1>
            <div className="mt-6 text-sm text-mid-grey space-y-4">{privacyPolicyContent}</div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}

