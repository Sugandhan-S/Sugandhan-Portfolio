import type { ExperienceItem } from '../types';

export const experience: ExperienceItem[] = [
  {
    id: 'meradhan',
    company: 'MeraDhan',
    role: 'Full-Stack Engineer · Freelance',
    location: 'Vellore, India',
    period: 'Mar 2026 — Jun 2026',
    context:
      'High-performance fintech investment platform for bond trading.',
    achievements: [
      'Architected and deployed production-ready trading workflows, financial API integrations, and user-onboarding flows built with Next.js, Node.js, and Tailwind CSS.',
      'Engineered the platform’s bond Sell workflow and deployed a robust 24/7 trading-availability engine that expanded transaction capabilities.',
      'Integrated third-party financial REST APIs to stream real-time market data, and built state-driven UI flows that restrict transactions exclusively to KYC-verified users.',
      'Enhanced backend search for the Bond Directory and Customer Portal with ISIN-specific lookups, fuzzy matching, and improved retrieval performance.',
    ],
    stack: ['Next.js', 'Node.js', 'Tailwind CSS', 'REST APIs', 'Fintech'],
  },
  {
    id: 'powerschool-ae2',
    company: 'PowerSchool',
    role: 'Associate Engineer II',
    location: 'Bengaluru, India',
    period: 'Jul 2023 — Dec 2025',
    context: 'AI-powered content platform and internal tooling at scale.',
    achievements: [
      'Led development of an AI-powered content-creation platform, designing a micro-frontend architecture and configuring the Module Federation plugin in webpack to expose components and share dependencies (React, Material UI) — cutting content-generation time by 40%.',
      'Architected and launched scalable backend services for an internal platform, integrating educational resources into a content-management application and improving processing efficiency by 30%.',
      'Built and shipped AI-driven automation for assignments and quizzes, improving workflow efficiency by 15% and increasing student engagement by 20%.',
      'Collaborated with cross-functional teams on scalable frontend and backend features using ReactJS and MySQL, and drove quality through Agile Scrum ceremonies.',
    ],
    stack: ['ReactJS', 'Module Federation', 'Material UI', 'MySQL', 'Node.js'],
  },
  {
    id: 'powerschool-intern',
    company: 'PowerSchool',
    role: 'Engineering Intern',
    location: 'Bengaluru, India',
    period: 'Sep 2022 — Jun 2023',
    context: 'Frontend engineering on the Schoology LMS.',
    achievements: [
      'Developed, debugged, and enhanced frontend features for the Schoology learning-management system using ReactJS and PHP, improving stability and user experience.',
      'Engineered the Search Message feature, reducing average search time by 25% and improving overall application usability.',
      'Diagnosed and resolved performance-critical issues in a legacy codebase, increasing reliability and reducing production-issue recurrence by 15%.',
      'Resolved complex customer technical enquiries by diagnosing and troubleshooting software issues to ensure high client satisfaction.',
    ],
    stack: ['ReactJS', 'PHP', 'Legacy modernization'],
  },
];
