import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { LegalModal } from './LegalModal'
import { privacyPolicyContent, termsOfServiceContent, recruitmentPrivacyContent } from '../data/legal'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Projects' },
  { to: '/our-approach', label: 'Our Approach' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
  { to: '/start-a-project', label: 'Start a project brief' },
]

const serviceLinks = [
  { to: '/services#planning', label: 'Strategic planning' },
  { to: '/services#coordination', label: 'Programme coordination' },
  { to: '/services#process', label: 'Process simplification' },
  { to: '/services#performance', label: 'Performance frameworks' },
]

function LegalFooterLink({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-mid-grey transition-colors duration-300 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      {label}
    </button>
  )
}

export function Footer() {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'recruitment' | null>(null)
  return (
    <footer
      className="border-t border-charcoal/5 bg-surface/95 backdrop-blur-xl"
      role="contentinfo"
    >
      <div className="container-home section-padding-home">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block transition-opacity duration-300 hover:opacity-80">
              <img
                src="/logo.png"
                alt="City Nest Solutions"
                className="h-[2.5rem] w-auto object-contain sm:h-11 md:h-[3rem]"
                width={220}
                height={70}
                loading="lazy"
              />
            </Link>
            <p className="mt-5 max-w-prose text-sm leading-relaxed text-mid-grey">
              City Nest Solutions helps organisations strengthen planning, coordination and performance.
              We simplify processes, align teams and support effective delivery through clear, practical recommendations.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-charcoal/70">
              Quick links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-mid-grey transition-colors duration-300 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-charcoal/70">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-mid-grey transition-colors duration-300 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-charcoal/70">
              Contact
            </h3>
            <address className="not-italic text-sm text-mid-grey">
              <p className="font-medium text-charcoal">CITYNEST LIMITED</p>
              <p>Company number 07753498</p>
              <p className="mt-2">
                Registered office address:<br />
                15 Kensington High Street,<br />
                London, W8 5NP
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-steel-grey/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-mid-grey">
            © {new Date().getFullYear()} City Nest Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-xs">
            <LegalFooterLink
              label="Privacy policy"
              onClick={() => setLegalModal('privacy')}
            />
            <LegalFooterLink
              label="Terms of service"
              onClick={() => setLegalModal('terms')}
            />
            <LegalFooterLink
              label="Recruitment Privacy Notice"
              onClick={() => setLegalModal('recruitment')}
            />
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {legalModal === 'privacy' && (
          <LegalModal key="privacy" title="Privacy policy" onClose={() => setLegalModal(null)}>
            {privacyPolicyContent}
          </LegalModal>
        )}
        {legalModal === 'terms' && (
          <LegalModal key="terms" title="Terms of service" onClose={() => setLegalModal(null)}>
            {termsOfServiceContent}
          </LegalModal>
        )}
        {legalModal === 'recruitment' && (
          <LegalModal key="recruitment" title="Recruitment Privacy Notice" onClose={() => setLegalModal(null)}>
            {recruitmentPrivacyContent}
          </LegalModal>
        )}
      </AnimatePresence>
    </footer>
  )
}

