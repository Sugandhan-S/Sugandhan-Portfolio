import type { Project } from '../types';

/**
 * "Selected work" highlights distilled from professional experience.
 * Add an `href` to any item to surface a live/repo link button on its card.
 */
export const projects: Project[] = [
  {
    id: 'api-forge',
    title: 'API-Forge',
    origin: 'Personal Project',
    summary:
      'Visual API Designer & Mock Engine. Design, mock, test, and document production-ready APIs visually.',
    impact:
      'Engineered an open-source visual API design workspace allowing users to design endpoints, attach schemas, and instantly spin up live mock servers.',
    stack: ['React 19', 'TypeScript', 'Express', 'Supabase', 'React Flow'],
    href: 'https://api-forge-azure.vercel.app/',
  },
  {
    id: 'pulseboard',
    title: 'PulseBoard',
    origin: 'Personal Project',
    summary:
      'A beautifully crafted, blazing-fast task and activity board built without heavy JS frameworks.',
    impact:
      'Delivered a premium SPA experience featuring real-time interactivity, instant DOM swaps, and persistent cloud data hosting.',
    stack: ['HTMX', 'Node.js', 'Express', 'PostgreSQL', 'EJS'],
    href: 'https://pulseboard-organizee.onrender.com/',
  },
  {
    id: 'meradhan-platform',
    title: 'Bond-Trading Platform',
    origin: 'MeraDhan',
    summary:
      'A fintech investment platform for trading bonds, with real-time market data and KYC-gated transactions.',
    impact:
      'Shipped the bond Sell workflow and a 24/7 trading-availability engine; wired ISIN-aware search with fuzzy matching across the Bond Directory.',
    stack: ['Next.js', 'Node.js', 'Tailwind CSS', 'REST APIs'],
  },
  {
    id: 'ai-content-platform',
    title: 'AI Content-Creation Platform',
    origin: 'PowerSchool',
    summary:
      'A micro-frontend platform composing independently deployed modules via webpack Module Federation.',
    impact:
      'Led the architecture and shared-dependency strategy that reduced content-generation time by 40%.',
    stack: ['ReactJS', 'Module Federation', 'Material UI', 'Webpack'],
  },
  {
    id: 'schoology-lms',
    title: 'Schoology LMS Features',
    origin: 'PowerSchool',
    summary:
      'Frontend features and performance work on a widely used learning-management system.',
    impact:
      'Built the Search Message feature (−25% search time) and hardened a legacy codebase (−15% issue recurrence).',
    stack: ['ReactJS', 'PHP', 'Performance'],
  },
];
