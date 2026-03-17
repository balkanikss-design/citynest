import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { SectionReveal } from '../components/SectionReveal'
import { Button } from '../components/ui/Button'
import { ContactCta } from '../components/ContactCta'
import { images } from '../data/images'

export function Approach() {
  return (
    <>
      <Helmet>
        <title>Our Approach — City Nest Solutions | How we work</title>
        <meta
          name="description"
          content="How City Nest Solutions works with organisations to strengthen planning, coordination and performance."
        />
        <meta property="og:title" content="Our Approach — City Nest Solutions" />
      </Helmet>

      <section
        className="hero-bg relative min-h-[70vh] overflow-hidden"
        aria-labelledby="approach-heading"
      >
        <div className="container-home relative z-10 mx-auto grid min-h-[70vh] items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 -translate-y-[30px]">
          <div className="max-w-xl">
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              How we work
            </motion.p>
            <motion.h1
              id="approach-heading"
              className="font-display text-4xl font-semibold leading-[1.1] text-charcoal sm:text-5xl md:text-6xl lg:text-[2.75rem]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Clarity, coordination, performance — in that order.
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-relaxed text-mid-grey"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We start by understanding how work really happens today. From there we design and test a
              practical route that fits your context and builds capability over time, not just a slide deck.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button to="/start-a-project">Discuss a project</Button>
              <Button to="/work" variant="ghost">
                View projects
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-card-hover ring-1 ring-steel-grey/10">
              <img
                src={images.approachHero}
                alt=""
                className="aspect-[4/3] w-full object-cover"
                width={800}
                height={600}
                fetchPriority="high"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding-home overflow-hidden bg-white" aria-labelledby="who-heading">
        <div className="container-home mx-auto">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionReveal>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                  Who we work with
                </p>
                <h2
                  id="who-heading"
                  className="font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.5rem] mt-2"
                >
                  Organisations with ambition and complexity.
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.05}>
                <p className="mt-8 text-lg leading-relaxed text-charcoal/85">
                  We&apos;re a good fit when there is already a strong sense of direction, but planning, coordination
                  and performance frameworks need to catch up — especially where multiple teams or partners are
                  involved.
                </p>
              </SectionReveal>
            </div>
            <div className="relative lg:col-span-7">
              <SectionReveal delay={0.1}>
                <div className="overflow-hidden rounded-3xl shadow-card ring-1 ring-steel-grey/10">
                  <img
                    src={images.about}
                    alt=""
                    className="aspect-[16/10] w-full object-cover"
                    width={800}
                    height={500}
                    loading="lazy"
                  />
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-home bg-surface" aria-labelledby="how-heading">
        <div className="container-home mx-auto">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">How we work</p>
            <h2
              id="how-heading"
              className="font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.5rem] mt-2"
            >
              A few principles that guide everything we do.
            </h2>
            <ul className="mt-8 space-y-5 text-mid-grey">
              <li className="flex gap-3">
                <span className="text-brand">—</span>
                <span>
                  <strong className="text-charcoal">Start from reality:</strong> We spend time with existing
                  plans, forums and artefacts rather than designing in the abstract.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand">—</span>
                <span>
                  <strong className="text-charcoal">Co‑design with teams:</strong> We involve the people who
                  will run processes and rhythms day‑to‑day so changes are usable.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand">—</span>
                <span>
                  <strong className="text-charcoal">Bias for implementation:</strong> Every recommendation is
                  tied to a concrete artefact — an agenda, template, calendar or decision rule.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand">—</span>
                <span>
                  <strong className="text-charcoal">Build capability:</strong> We aim to leave your teams with
                  tools and confidence to keep improving after we&apos;ve stepped back.
                </span>
              </li>
            </ul>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding-home bg-white" aria-labelledby="sectors-heading">
        <div className="container-home mx-auto">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">Sectors</p>
            <h2
              id="sectors-heading"
              className="font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.5rem] mt-2"
            >
              Public, social and commercial sectors.
            </h2>
            <p className="mt-4 text-mid-grey leading-relaxed">
              We work across public services, housing and property, not‑for‑profit and commercial organisations,
              often where there is a blend of public value and commercial outcomes.
            </p>
          </SectionReveal>
        </div>
      </section>

      <ContactCta />
    </>
  )
}

