import { Helmet } from 'react-helmet-async'
import { SectionReveal } from '../components/SectionReveal'
import { recruitmentPrivacyContent } from '../data/legal'

export function RecruitmentPrivacyNotice() {
  return (
    <>
      <Helmet>
        <title>Recruitment Privacy Notice — City Nest Solutions</title>
        <meta
          name="description"
          content="Recruitment privacy notice explaining how City Nest Solutions processes information in hiring."
        />
      </Helmet>

      <section className="section-padding-home bg-page">
        <div className="container-home max-w-3xl">
          <SectionReveal>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal">
              Recruitment Privacy Notice
            </h1>
            <div className="mt-6">{recruitmentPrivacyContent}</div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}

