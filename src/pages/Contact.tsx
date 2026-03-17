import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { SectionReveal } from '../components/SectionReveal'
import { ContactForm } from '../components/ContactForm'
import { Button } from '../components/ui/Button'
import { Building2 } from 'lucide-react'
import { images } from '../data/images'

export function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — City Nest Solutions | Get in touch</title>
        <meta
          name="description"
          content="Contact City Nest Solutions to discuss planning, coordination, process simplification or performance work."
        />
        <meta property="og:title" content="Contact — City Nest Solutions" />
      </Helmet>

      <section
        className="hero-bg relative min-h-[50vh] overflow-hidden"
        aria-labelledby="contact-hero-heading"
      >
        <div className="container-home relative z-10 grid min-h-[50vh] items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20 -translate-y-[20px]">
          <div className="max-w-xl">
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light mb-4 drop-shadow-[0_1px_6px_rgba(15,23,42,0.8)]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Get in touch
            </motion.p>
            <motion.h1
              id="contact-hero-heading"
              className="font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-[2.75rem] drop-shadow-[0_12px_32px_rgba(15,23,42,0.9)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Contact City Nest Solutions.
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-relaxed text-white/90 drop-shadow-[0_10px_30px_rgba(15,23,42,0.9)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              General enquiry or early‑stage idea? Share a short note and we&apos;ll reply within 1–2 working
              days. For structured briefs, you can also use Start a project.
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
                src={images.contactHero}
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">Form &amp; details</p>
            <h2 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.5rem] mt-2">
              Message or call
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-mid-grey">
              Use the form below for general enquiries, or contact us directly using the company details.
            </p>
          </SectionReveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionReveal>
                <div className="rounded-2xl border border-steel-grey/15 bg-white p-6 shadow-card ring-1 ring-steel-grey/5 sm:p-8">
                  <ContactForm />
                </div>
              </SectionReveal>
            </div>
            <div className="flex flex-col justify-center gap-8 lg:col-span-3">
              <SectionReveal delay={0.05}>
                <div className="rounded-2xl border border-steel-grey/15 bg-white p-6 shadow-card ring-1 ring-steel-grey/5">
                  <h2 className="text-lg font-semibold text-charcoal flex items-center gap-2">
                    <Building2 className="h-5 w-5" aria-hidden />
                    Company details
                  </h2>
                  <p className="mt-2 font-medium text-charcoal">CITYNEST LIMITED</p>
                  <p className="mt-1 text-mid-grey">Company number 07753498</p>
                  <p className="mt-2 text-mid-grey">
                    Registered office address:
                    <br />
                    15 Kensington High Street,
                    <br />
                    London, W8 5NP
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal delay={0.15}>
                <Button to="/start-a-project">Start a project (structured form)</Button>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

