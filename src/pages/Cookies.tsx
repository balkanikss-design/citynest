import { Helmet } from 'react-helmet-async'
import { SectionReveal } from '../components/SectionReveal'

export function Cookies() {
  return (
    <>
      <Helmet>
        <title>Cookies — City Nest Solutions</title>
        <meta
          name="description"
          content="Information about how City Nest Solutions uses cookies on this website."
        />
      </Helmet>

      <section className="section-padding-home bg-page">
        <div className="container-home max-w-3xl">
          <SectionReveal>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal">
              Cookies
            </h1>
            <div className="mt-6 space-y-4 text-sm text-mid-grey">
              <p>
                This website uses cookies and similar technologies to help it function and, where enabled, to
                understand how visitors use it.
              </p>
              <p>
                Any analytics we use are configured to limit the personal data collected and to focus on aggregate
                trends rather than identifying individual visitors.
              </p>
              <p>
                You can control cookies through your browser settings. Blocking some types of cookies may affect
                how the site functions.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}

