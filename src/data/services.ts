export const services = [
  {
    id: 'planning',
    title: 'Strategic & operational planning',
    shortDesc:
      'Structured planning cycles that connect long‑term strategy with day‑to‑day delivery so teams know what matters, when and why.',
    tags: ['Strategy into delivery', 'Planning cycles', 'Prioritisation', 'Roadmaps'],
    slug: 'strategic-operational-planning',
    outcomes: [
      'Joined‑up planning across functions and time horizons',
      'Clear portfolio and initiative prioritisation',
      'A single, visual view of commitments and capacity',
      'Planning cycles that are predictable and repeatable',
    ],
    deliverables: [
      'Current‑state review of planning practices',
      'Future‑state planning framework and RACI',
      'Planning calendar, templates and facilitation guides',
      'Implementation support for the first full cycle',
    ],
    timeline: 'Typically 6–12 weeks for design and first cycle',
    suitableFor:
      'Organisations where strategy, budgets and delivery plans do not line up cleanly or change frequently.',
  },
  {
    id: 'coordination',
    title: 'Programme coordination & PMO',
    shortDesc:
      'Pragmatic PMO and coordination support that gives leadership a reliable view of progress, risk and decisions without over‑engineering.',
    tags: ['PMO', 'Portfolio view', 'Governance', 'Reporting'],
    slug: 'programme-coordination-pmo',
    outcomes: [
      'Consistent programme reporting and status language',
      'Right‑sized governance forums and cadences',
      'A single view of risks, issues and dependencies',
      'Less time spent chasing updates, more on decisions',
    ],
    deliverables: [
      'PMO or coordination role definition and mandate',
      'Governance map, terms of reference and calendars',
      'Reporting pack, dashboards and data model',
      'Coaching and shadowing for internal PMO leads',
    ],
    timeline: 'Typically 8–16 weeks including set‑up and handover',
    suitableFor:
      'Change and transformation portfolios that need structure, but not heavy project methodology.',
  },
  {
    id: 'process',
    title: 'Process simplification & ways of working',
    shortDesc:
      'End‑to‑end reviews that remove friction from how work flows between teams, focusing on a small number of high‑value improvements.',
    tags: ['Process mapping', 'Simplification', 'Roles & handoffs', 'Service design'],
    slug: 'process-simplification-ways-of-working',
    outcomes: [
      'Simpler, clearer core processes and hand‑offs',
      'Reduced rework and cycle times',
      'Roles and ownership that people recognise',
      'Practical changes that can be implemented quickly',
    ],
    deliverables: [
      'Current‑state maps for priority processes',
      'Pain‑point and root‑cause analysis',
      'Future‑state journey and process designs',
      'Change backlog with owners, effort and impact',
    ],
    timeline: 'Typically 4–10 weeks per process area',
    suitableFor:
      'Teams where work feels harder than it should be, with frequent escalations and unclear ownership.',
  },
  {
    id: 'performance',
    title: 'Performance frameworks & review cycles',
    shortDesc:
      'Measures, rhythms and visuals that help teams understand performance, make trade‑offs and steer delivery in real time.',
    tags: ['KPIs & OKRs', 'Performance reviews', 'Dashboards', 'Decision forums'],
    slug: 'performance-frameworks',
    outcomes: [
      'A small, meaningful set of performance measures',
      'Clear link between initiatives and outcomes',
      'Regular review forums that drive action, not updates',
      'Improved decision‑making and focus over time',
    ],
    deliverables: [
      'Outcome and indicator frameworks',
      'Baseline and target‑setting approach',
      'Review forum design, packs and facilitation notes',
      'Playbook for iterating measures over time',
    ],
    timeline: 'Typically 6–14 weeks depending on scope',
    suitableFor:
      'Leadership teams wanting a clearer, shared view of how well delivery is landing and where to intervene.',
  },
] as const

