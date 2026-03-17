import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { SectionReveal } from '../components/SectionReveal'
import { workItems } from '../data/work'

export function CaseStudy() {
  const { slug } = useParams()
  const project = workItems.find((p) => p.slug === slug)

  if (!project) {
    return (
      <section className="section-padding-home bg-page">
        <div className="container-home">
          <p className="text-mid-grey">We couldn&apos;t find that case study.</p>
          <Link to="/work" className="link-underline mt-4 inline-block text-sm font-medium">
            Back to projects
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <Helmet>
        <title>{project.title} — City Nest Solutions</title>
        <meta
          name="description"
          content={project.outcome}
        />
      </Helmet>

      <section className="section-padding-home bg-page">
        <div className="container-home">
          <SectionReveal>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm text-mid-grey hover:text-brand"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <div className="mt-6 max-w-3xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {project.sector} · {project.category}
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold text-charcoal">
                {project.title}
              </h1>
              <p className="text-lg text-mid-grey">{project.delivered}</p>
              <p className="text-base font-medium text-brand">{project.outcome}</p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}

