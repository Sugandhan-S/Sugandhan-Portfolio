import type { Certification, EducationItem } from '../types';

export const education: EducationItem[] = [
  {
    id: 'vit-mtech',
    institution: 'VIT University',
    qualification: 'M.Tech · Integrated Software Engineering',
    detail: '8.3 CGPA',
    period: 'May 2023',
    location: 'Vellore, TN',
  },
];

export const certifications: Certification[] = [
  { id: 'aws-ccp', name: 'AWS Cloud Practitioner', issuer: 'Coursera' },
  { id: 'php-apis', name: 'PHP APIs', issuer: 'Udemy' },
  { id: 'java-basic', name: 'Java (Basic)', issuer: 'HackerRank' },
];
