import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionReveal } from '../components/SectionReveal'
import { workItems, workCategories, type WorkCategory } from '../data/work'
import { images } from '../data/images'

export function Work() {
  const [filter, setFilter] = useState<WorkCategory | 'All'>('All')
  const filtered = filter === 'All' ? workItems : workItems.filter((p) => p.category === filter)

  return (
    <>
      <Helmet>
        <title>Projects — City Nest Solutions | Selected planning & coordination work</title>
        <meta
          name="description"
          content="Selected City Nest Solutions work across planning, coordination, process simplification and performance."
        />
        <meta property="og:title" content="Projects — City Nest Solutions" />
      </Helmet>

      <section
        className="hero-bg relative min-h-[50vh] overflow-hidden"
        aria-labelledby="projects-hero-heading"
      >
        <div className="container-home relative z-10 grid min-h-[50vh] items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20 -translate-y-[20px]">
          <div className="max-w-xl">
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Portfolio
            </motion.p>
            <motion.h1
              id="projects-hero-heading"
              className="font-display text-4xl font-semibold leading-[1.1] text-charcoal sm:text-5xl md:text-6xl lg:text-[2.75rem]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Selected work.
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-relaxed text-mid-grey"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Examples of how we have supported clients to strengthen planning, coordination, processes and
              performance.
            </motion.p>
          </div>
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-card-hover ring-1 ring-steel-grey/10">
              <img
                src={images.projectsHero}
                alt=""
                className="aspect-[4/3] w-full object-cover"
                width={800}
                height={600}
                fetchPriority="high"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding-home bg-page">
        <div className="container-home">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">Filter</p>
            <h2 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.5rem] mt-2">
              By focus area
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <div className="mt-12 flex flex-wrap gap-3" role="tablist" aria-label="Filter by service">
              {['All', ...workCategories].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={filter === cat}
                  onClick={() => setFilter(cat as WorkCategory | 'All')}
                  className={`rounded-full px-5 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand ${
                    filter === cat
                      ? 'bg-brand text-white shadow-card'
                      : 'bg-white text-charcoal/80 ring-1 ring-steel-grey/20 hover:ring-brand/30 hover:text-brand'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {filtered.map((project, i) => {
              const projectIndex = workItems.findIndex((w) => w.slug === project.slug)
              const imageSrc = images.work[projectIndex % images.work.length]
              return (
                <SectionReveal key={project.slug} delay={i * 0.05}>
                  <Link
                    to={`/work/${project.slug}`}
                    className="group block overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-steel-grey/10 transition-all duration-300 hover:shadow-card-hover hover:ring-brand/25"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={imageSrc}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        width={600}
                        height={450}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-8">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                        {project.sector} · {project.category}
                      </span>
                      <h3 className="mt-3 text-xl font-semibold text-charcoal group-hover:text-brand transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-base text-mid-grey">{project.delivered}</p>
                      <p className="mt-2 text-base font-medium text-brand">{project.outcome}</p>
                    </div>
                  </Link>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

