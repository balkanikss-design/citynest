import { Helmet } from 'react-helmet-async'
import { SectionReveal } from '../components/SectionReveal'
import { AccordionItem } from '../components/ui/Accordion'

export function FAQ() {
  return (
    <>
      <Helmet>
        <title>FAQ — City Nest Solutions | Common questions</title>
        <meta
          name="description"
          content="Frequently asked questions about how City Nest Solutions works, how engagements are structured and how we price."
        />
        <meta property="og:title" content="FAQ — City Nest Solutions" />
      </Helmet>

      <section className="section-padding-home bg-page">
        <div className="container-home max-w-3xl">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-4">
              Frequently asked questions
            </p>
            <h1 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl lg:text-[2.5rem] mt-2">
              How we typically work.
            </h1>
            <p className="mt-6 text-lg text-mid-grey">
              A few of the questions that often come up in early conversations. We&apos;re happy to discuss
              anything specific to your context.
            </p>
          </SectionReveal>

          <div className="mt-10 rounded-2xl border border-steel-grey/20 bg-white p-6 shadow-card">
            <AccordionItem id="faq-1" title="What kinds of engagements do you take on?">
              <p>
                Most of our work relates to planning cycles, coordination and PMO, process simplification or
                performance frameworks. Engagements range from short, focused reviews through to multi‑month
                implementation support.
              </p>
            </AccordionItem>
            <AccordionItem id="faq-2" title="Do you work remotely or on site?">
              <p>
                We use a mix of remote and on‑site work. Many interviews, working sessions and reviews can be
                run remotely, while key workshops and decision forums are often more effective in person.
              </p>
            </AccordionItem>
            <AccordionItem id="faq-3" title="How do you price your work?">
              <p>
                We usually work on a fixed‑fee basis for clearly scoped pieces of work, and on a time‑and‑materials
                basis where scope needs to remain more flexible. We&apos;ll always set out assumptions and staging
                before you commit.
              </p>
            </AccordionItem>
            <AccordionItem id="faq-4" title="Can you work alongside our existing consulting partners?">
              <p>
                Yes. We often work in environments where there are other partners in place, focusing on the planning,
                coordination and performance aspects that support wider programmes.
              </p>
            </AccordionItem>
          </div>
        </div>
      </section>
    </>
  )
}

