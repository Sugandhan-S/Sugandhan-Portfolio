import type { HeadlineStat, Profile } from '../types';

export const profile: Profile = {
  name: 'Sugandhan S',
  role: 'Full-Stack Engineer',
  tagline:
    'I architect and ship production systems — from micro-frontend platforms to a 24/7 bond-trading engine.',
  summary:
    'Full-stack developer with 3.5+ years designing, building, and maintaining robust web applications. I work across the stack in React, Next.js, and Node.js — with a bias toward clean architecture, measurable performance, and scalable data workflows in Agile teams.',
  location: 'Vellore, Tamil Nadu, India',
  email: 'ssugandhan01@gmail.com',
  phone: '+91 63794 34924',
  availability: 'Open to senior full-stack roles',
  links: {
    github: 'https://github.com/Sugandhan-S/',
    linkedin: 'https://linkedin.com/in/sugandhan-s',
    // Place your résumé PDF in /public and reference it here.
    resumeUrl: '/Sugandhan_Resume.pdf',
  },
};

export const headlineStats: HeadlineStat[] = [
  { value: '3.5+', label: 'Years shipping' },
  { value: '40%', label: 'Faster content gen' },
  { value: '24/7', label: 'Trading uptime built' },
  { value: '3', label: 'Products delivered' },
];
