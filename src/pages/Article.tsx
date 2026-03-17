import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { SectionReveal } from '../components/SectionReveal'
import { insights } from '../data/insights'

export function Article() {
  const { slug } = useParams()
  const article = insights.find((a) => a.slug === slug)

  if (!article) {
    return (
      <section className="section-padding-home bg-page">
        <div className="container-home">
          <p className="text-mid-grey">We couldn&apos;t find that article.</p>
          <Link to="/insights" className="link-underline mt-4 inline-block text-sm font-medium">
            Back to insights
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <Helmet>
        <title>{article.title} — City Nest Solutions</title>
        <meta name="description" content={article.description} />
      </Helmet>

      <section className="section-padding-home bg-page">
        <div className="container-home max-w-3xl">
          <SectionReveal>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm text-mid-grey hover:text-brand"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to insights
            </Link>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <article className="mt-6 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {article.category}
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold text-charcoal">
                {article.title}
              </h1>
              <p className="text-sm text-steel-grey">{article.readTime}</p>
              <p className="text-lg text-mid-grey">{article.description}</p>
            </article>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}

