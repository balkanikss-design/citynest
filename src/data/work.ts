export type WorkCategory = 'Planning' | 'Coordination' | 'Process' | 'Performance'

export const workCategories: WorkCategory[] = ['Planning', 'Coordination', 'Process', 'Performance']

export const workItems = [
  {
    slug: 'health-system-planning-refresh',
    title: 'Health system planning refresh',
    sector: 'Public health',
    category: 'Planning' as WorkCategory,
    delivered: 'Re‑designed annual planning cycle across partner organisations.',
    outcome:
      'Clearer commitments and a single view of priorities across 3 years, with fewer last‑minute changes.',
  },
  {
    slug: 'global-pmo-for-digital-portfolio',
    title: 'Global PMO for digital portfolio',
    sector: 'Financial services',
    category: 'Coordination' as WorkCategory,
    delivered: 'Established portfolio‑level PMO for a multi‑country digital change programme.',
    outcome:
      'Leadership received a consistent view of risk and status across 20+ initiatives within 8 weeks.',
  },
  {
    slug: 'frontline-ops-process-simplification',
    title: 'Frontline operations process simplification',
    sector: 'Housing & property',
    category: 'Process' as WorkCategory,
    delivered: 'Simplified end‑to‑end process for managing repairs and inspections.',
    outcome:
      'Reduced hand‑offs and clearer ownership, with faster time to resolution for residents and teams.',
  },
  {
    slug: 'performance-framework-for-growth-team',
    title: 'Performance framework for growth team',
    sector: 'Technology scale‑up',
    category: 'Performance' as WorkCategory,
    delivered: 'Defined outcomes, indicators and review rhythms for a cross‑functional growth team.',
    outcome:
      'Teams moved from lagging, financial‑only measures to weekly indicators that shaped decisions.',
  },
] as const

