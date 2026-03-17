import { useRef, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Check,
  FileCheck,
  Clock,
  Activity,
  Users,
  Briefcase,
  HelpCircle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { SectionReveal } from '../components/SectionReveal'
import { ContactCta } from '../components/ContactCta'
import { services } from '../data/services'
import { workItems } from '../data/work'
import { images } from '../data/images'

const trustChips = [
  'Planning that joins strategy and delivery',
  'Coordination that reduces noise',
  'Performance measures teams can use',
]

const stats = [
  { value: '40+', label: 'Planning cycles supported', icon: FileCheck },
  { value: '85%', label: 'Engagements with repeat work', icon: Clock },
  { value: '12+', label: 'Sectors worked with', icon: Activity },
  { value: '3–12m', label: 'Typical engagement length', icon: Users },
]

const processSteps = [
  { step: '01', title: 'Understand context', desc: 'Clarify where you are today, what already works and what must change.' },
  { step: '02', title: 'Shape the approach', desc: 'Agree focus areas, ways of working and what &quot;good&quot; looks like.' },
  { step: '03', title: 'Deliver together', desc: 'Work alongside your teams to design, test and embed changes.' },
  { step: '04', title: 'Hand on clearly', desc: 'Leave behind tools, rhythms and ownership that you can run yourselves.' },
]

const clientReviews = [
  {
    quote:
      'City Nest helped us turn an overloaded planning process into something our teams can actually use. We now have one view of priorities and fewer surprises.',
    name: 'Director of Transformation',
    role: 'UK public sector organisation',
    avatarIndex: 0,
  },
  {
    quote:
      'They brought structure without adding bureaucracy. Governance is clearer, conversations are better and we spend more time deciding and less time reporting.',
    name: 'Portfolio lead',
    role: 'Financial services',
    avatarIndex: 1,
  },
  {
    quote:
      'Workshops were practical and grounded in our reality. We left with a simple set of changes to roles, hand‑offs and measures that made an immediate difference.',
    name: 'Operations lead',
    role: 'Housing & property',
    avatarIndex: 2,
  },
]

export function Home() {
  const heroLeftRef = useRef<HTMLDivElement>(null)
  const [heroImageHeight, setHeroImageHeight] = useState<number | null>(null)
  const [reviewIndex, setReviewIndex] = useState(0)

  useEffect(() => {
    const el = heroLeftRef.current
    const measure = () => {
      if (el) setHeroImageHeight(el.getBoundingClientRect().height)
    }
    measure()
    if (!el) return
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>City Nest Solutions — Planning, Coordination & Performance</title>
        <meta
          name="description"
          content="City Nest Solutions helps organisations strengthen planning, coordination and performance. We simplify processes, align teams and support delivery through clear, practical recommendations."
        />
        <meta property="og:title" content="City Nest Solutions — Planning, Coordination & Performance" />
      </Helmet>

      <section
        className="home-hero relative flex min-h-[100vh] items-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="home-hero-mesh" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 bottom-[-12rem] h-[22rem] bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="container-home relative z-10 w-full">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 py-16 lg:py-24">
            <div ref={heroLeftRef} className="lg:col-span-7 xl:col-span-6 max-w-xl space-y-7">
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-white/90 backdrop-blur-2xl"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <Sparkles className="h-3.5 w-3.5 text-brand" aria-hidden />
                City Nest Solutions
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="space-y-4"
              >
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-brand/80">
                  Planning · Coordination · Performance
                </p>
                <h1
                  id="hero-heading"
                  className="font-display text-[2.6rem] leading-[1.02] text-white sm:text-5xl md:text-[3.2rem] lg:text-[3.7rem] xl:text-[4.1rem]"
                >
                  Make strategy, delivery
                  <span className="block gradient-text">and performance feel joined‑up.</span>
                </h1>
              </motion.div>
              <motion.p
                className="text-base sm:text-lg md:text-xl leading-relaxed text-white/80"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
              >
                We help leadership teams and delivery functions simplify planning cycles, improve coordination and
                build performance frameworks that people actually use.
              </motion.p>
              <motion.div
                className="flex flex-wrap items-center gap-3 pt-2"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.25 }}
              >
                <Link
                  to="/start-a-project"
                  className="inline-flex items-center justify-center gap-2 rounded-btn bg-white px-8 py-3.5 text-sm font-semibold text-charcoal shadow-card hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Start a project brief
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  to="/our-approach"
                  className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/0 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/5"
                >
                  See how we work
                </Link>
              </motion.div>
              <motion.ul
                className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-xs sm:text-sm text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.35 }}
              >
                {trustChips.map((chip) => (
                  <li key={chip} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/25">
                      <Check className="h-3 w-3 text-white" aria-hidden />
                    </span>
                    {chip}
                  </li>
                ))}
              </motion.ul>
            </div>
            <motion.div
              className="relative lg:col-span-5 xl:col-span-6"
              initial={{ opacity: 0, scale: 0.96, x: 24 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              style={heroImageHeight != null ? { height: heroImageHeight } : undefined}
            >
              <div className="relative w-full h-full max-h-[520px] overflow-hidden rounded-[32px] border border-white/18 bg-gradient-to-br from-white/10 via-white/5 to-white/0 shadow-[0_32px_120px_rgba(0,0,0,0.65)]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/40 via-transparent to-black/60 mix-blend-soft-light" />
                <img
                  src={images.hero}
                  alt="Leaders and teams planning together around a table"
                  className="h-full w-full object-cover object-center"
                  width={900}
                  height={700}
                  fetchPriority="high"
                />
                <div className="pointer-events-none absolute inset-x-6 bottom-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-black/45 px-4 py-3 text-xs text-white backdrop-blur-xl">
                  <div className="space-y-0.5">
                    <p className="font-medium">Planning, coordination and performance</p>
                    <p className="text-white/75">City Nest Solutions — engagements across 12+ sectors.</p>
                  </div>
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      Clarity
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                      Coordination
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                      Performance
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white/90 backdrop-blur-sm" aria-labelledby="about-heading">
        <div className="container-home py-20 sm:py-24 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 xl:col-span-4">
              <SectionReveal>
                <div className="inline-flex items-baseline gap-3">
                  <span className="text-5xl sm:text-6xl font-display font-bold text-charcoal/10 leading-none">
                    01
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand">
                    Who we are
                  </p>
                </div>
                <h2
                  id="about-heading"
                  className="mt-4 font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.4rem] leading-tight"
                >
                  Practical, delivery‑focused consultancy.
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.05}>
                <div className="mt-7 space-y-4 text-[15px] sm:text-base leading-relaxed text-mid-grey">
                  <p>
                    City Nest Solutions works with organisations that are already moving but need clearer planning,
                    coordination and performance frameworks to match their ambition.
                  </p>
                  <p>
                    We bring structured thinking, modern facilitation and straightforward communication — always
                    focused on changes that your teams can own, not on adding more complexity.
                  </p>
                </div>
              </SectionReveal>
            </div>
            <div className="relative lg:col-span-7 xl:col-span-8">
              <SectionReveal delay={0.1}>
                <div className="relative overflow-hidden rounded-[26px] border border-charcoal/8 bg-gradient-to-br from-page to-surface shadow-card">
                  <img
                    src={images.about}
                    alt="City Nest Solutions working session with teams"
                    className="aspect-[16/10] w-full object-cover object-center"
                    width={1000}
                    height={625}
                    loading="lazy"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[26px] bg-gradient-to-tr from-charcoal/40 via-transparent to-transparent"
                    aria-hidden
                  />
                  <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-black/35 px-4 py-3 text-xs text-white backdrop-blur-md">
                    <span className="font-medium">Workshops, interviews and delivery support.</span>
                    <span className="text-white/80">Remote‑first, on‑site where it matters.</span>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-charcoal py-16 md:py-20 overflow-hidden" aria-label="Key metrics">
        <div className="absolute inset-0 z-0">
          <img
            src={images.homeStatsBg}
            alt=""
            className="h-full w-full object-cover opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-charcoal/90" aria-hidden />
        </div>
        <div className="container-home relative z-10">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-6">
            {stats.map((stat, i) => (
              <SectionReveal key={stat.label} delay={i * 0.05}>
                <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-6 text-center backdrop-blur-sm">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white/90"
                    aria-hidden
                  >
                    <stat.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-white/80">{stat.label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-page border-t border-charcoal/5" aria-labelledby="services-heading">
        <div className="container-home py-20 sm:py-24 lg:py-28">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
              What we focus on
            </p>
            <h2
              id="services-heading"
              className="font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.5rem]"
            >
              Four core services
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] sm:text-base text-mid-grey">
              Planning, coordination, process simplification and performance — each with clear outcomes and
              deliverables.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.03}>
            <div className="mt-10 relative overflow-hidden rounded-[26px] border border-charcoal/10 bg-gradient-to-r from-surface via-white to-surface shadow-card">
              <img
                src={images.homeServices}
                alt="Planning and coordination workshop"
                className="aspect-[21/9] w-full object-cover object-center"
                width={1200}
                height={514}
                loading="lazy"
              />
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-t from-charcoal/25 to-transparent pointer-events-none"
                aria-hidden
              />
            </div>
          </SectionReveal>
          <div className="mt-12 grid gap-6 sm:gap-7 lg:grid-cols-2">
            {services.map((s, i) => (
              <SectionReveal key={s.id} delay={i * 0.05}>
                <Link
                  to={`/services#${s.id}`}
                  className="group flex flex-col rounded-2xl border border-charcoal/8 bg-white/95 p-7 sm:p-8 transition-all duration-300 hover:border-brand/25 hover:shadow-card-hover hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <div className="flex flex-wrap gap-2">
                    {s.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-charcoal/5 px-3 py-1 text-xs font-medium text-charcoal/80 group-hover:bg-brand/10 group-hover:text-brand transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-5 text-lg sm:text-xl font-semibold text-charcoal group-hover:text-brand transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-mid-grey flex-1">{s.shortDesc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand group-hover:text-brand-dark transition-colors">
                    View service detail
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-charcoal/5" aria-labelledby="process-heading">
        <div className="container-home py-20 sm:py-24 lg:py-28">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
              How we work
            </p>
            <h2
              id="process-heading"
              className="font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.5rem] max-w-2xl"
            >
              A clear route from context to change.
            </h2>
          </SectionReveal>
          <div className="mt-12 relative">
            <div
              className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-charcoal/15 to-transparent"
              aria-hidden
            />
            <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((item, i) => (
                <SectionReveal key={item.step} delay={i * 0.08}>
                  <div className="relative flex flex-col rounded-2xl bg-surface/90 backdrop-blur-sm p-7 h-full border border-charcoal/5 hover:border-brand/25 hover:shadow-card-hover transition-all duration-300">
                    <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white font-display text-lg font-semibold shadow-lg">
                      {item.step}
                    </span>
                    <h3 className="mt-6 text-lg font-semibold text-charcoal">{item.title}</h3>
                    <p className="mt-3 text-base text-mid-grey">{item.desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-page border-t border-charcoal/5" aria-labelledby="work-heading">
        <div className="container-home py-20 sm:py-24 lg:py-28">
          <SectionReveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
                  Portfolio
                </p>
                <h2
                  id="work-heading"
                  className="font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.5rem]"
                >
                  Selected work
                </h2>
                <p className="mt-4 text-lg text-mid-grey">Examples of planning, coordination and performance work.</p>
              </div>
              <Link
                to="/work"
                className="link-underline inline-flex items-center gap-2 text-base font-medium text-brand shrink-0"
              >
                View all projects
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.03}>
            <div className="mt-10 relative overflow-hidden rounded-[26px] border border-charcoal/10 bg-gradient-to-r from-surface via-white to-surface shadow-card">
              <img
                src={images.homeWork}
                alt="Selected City Nest Solutions work"
                className="aspect-[24/10] w-full object-cover object-center"
                width={1200}
                height={500}
                loading="lazy"
              />
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-t from-charcoal/25 to-transparent pointer-events-none"
                aria-hidden
              />
            </div>
          </SectionReveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-8">
            {workItems.slice(0, 3).map((project, i) => (
              <SectionReveal key={project.slug} delay={i * 0.05}>
                <Link
                  to={`/work/${project.slug}`}
                  className="group block overflow-hidden rounded-2xl bg-white border border-charcoal/8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:border-brand/20"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={images.work[i]}
                      alt={project.title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      width={600}
                      height={450}
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 rounded-t-2xl bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      aria-hidden
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                      {project.sector}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold text-charcoal group-hover:text-brand transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-base text-mid-grey">{project.delivered}</p>
                    <p className="mt-2 text-base font-medium text-brand">{project.outcome}</p>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-charcoal/5 py-20 md:py-24" aria-label="Client reviews">
        <div className="container-home">
          <SectionReveal>
            <div className="relative rounded-[26px] overflow-hidden border border-charcoal/10 bg-page shadow-card">
              <div
                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand to-charcoal/60"
                aria-hidden
              />
              <div className="absolute inset-0 opacity-[0.06]" aria-hidden>
                <img src={images.homeTestimonialBg} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="relative pl-6 pr-6 pt-10 pb-10 sm:pl-10 sm:pr-10 sm:pt-14 sm:pb-14 md:pl-16 md:pr-16 md:pt-16 md:pb-16">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={reviewIndex}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <blockquote className="font-display text-2xl font-medium leading-relaxed text-charcoal sm:text-3xl md:text-4xl max-w-4xl">
                      &quot;{clientReviews[reviewIndex].quote}&quot;
                    </blockquote>
                    <div className="mt-10 flex items-center gap-5">
                      <img
                        src={images.testimonialAvatars[clientReviews[reviewIndex].avatarIndex]}
                        alt=""
                        className="h-14 w-14 rounded-full object-cover ring-2 ring-white shadow-lg"
                        width={56}
                        height={56}
                      />
                      <div>
                        <p className="font-semibold text-charcoal text-lg">
                          {clientReviews[reviewIndex].name}
                        </p>
                        <p className="text-base text-mid-grey">{clientReviews[reviewIndex].role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="mt-12 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() =>
                      setReviewIndex((i) => (i === 0 ? clientReviews.length - 1 : i - 1))
                    }
                    className="rounded-full p-2 text-mid-grey transition-colors hover:bg-page hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <div className="flex gap-2">
                    {clientReviews.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setReviewIndex(i)}
                        className={`h-2 rounded-full transition-all ${
                          i === reviewIndex ? 'w-8 bg-brand' : 'w-2 bg-charcoal/30 hover:bg-charcoal/50'
                        }`}
                        aria-label={`Review ${i + 1}`}
                        aria-current={i === reviewIndex}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setReviewIndex((i) => (i === clientReviews.length - 1 ? 0 : i + 1))
                    }
                    className="rounded-full p-2 text-mid-grey transition-colors hover:bg-page hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
                    aria-label="Next review"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-page border-t border-charcoal/5" aria-labelledby="support-heading">
        <div className="container-home py-20 sm:py-24 lg:py-28">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
              Support
            </p>
            <h2
              id="support-heading"
              className="font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.5rem]"
            >
              Frequently asked questions
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] sm:text-base text-mid-grey">
              A few of the questions that often come up when we first speak with teams.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <div className="mt-10 relative overflow-hidden rounded-[26px] border border-charcoal/10 bg-gradient-to-r from-surface via-white to-surface shadow-card">
              <img
                src={images.homeSupport}
                alt=""
                className="aspect-[3/1] w-full object-cover object-center"
                width={1200}
                height={400}
                loading="lazy"
              />
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-t from-page/95 via-page/60 to-transparent pointer-events-none"
                aria-hidden
              />
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:gap-12">
              <Link
                to="/careers"
                className="group flex flex-col rounded-2xl border border-charcoal/10 bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:border-brand/25 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                aria-label="Open Careers — view roles and how we work"
              >
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-charcoal/5 text-charcoal transition-colors group-hover:bg-brand/15 group-hover:text-brand"
                  aria-hidden
                >
                  <Briefcase className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-charcoal group-hover:text-brand transition-colors">
                  Careers
                </h3>
                <p className="mt-4 flex-1 text-base text-mid-grey leading-relaxed">
                  Learn about the kind of work we do and how we collaborate with clients.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-base font-medium text-brand group-hover:text-brand-dark transition-colors">
                  View careers
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
              <Link
                to="/faq"
                className="group flex flex-col rounded-2xl border border-charcoal/10 bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:border-brand/25 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                aria-label="Open FAQ — frequently asked questions"
              >
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-charcoal/5 text-charcoal transition-colors group-hover:bg-brand/15 group-hover:text-brand"
                  aria-hidden
                >
                  <HelpCircle className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-charcoal group-hover:text-brand transition-colors">
                  FAQ
                </h3>
                <p className="mt-4 flex-1 text-base text-mid-grey leading-relaxed">
                  How engagements typically work, what&apos;s needed from you and how we price.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-base font-medium text-brand group-hover:text-brand-dark transition-colors">
                  View FAQ
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </div>
          </SectionReveal>
          <p className="mt-14 text-center">
            <Link to="/contact" className="link-underline text-base font-medium">
              Prefer to talk first? Get in touch.
            </Link>
          </p>
        </div>
      </section>

      <ContactCta />
    </>
  )
}

