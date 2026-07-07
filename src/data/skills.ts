import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    caption: 'Interfaces & micro-frontends',
    skills: [
      'ReactJS',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Redux',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'Webpack',
      'Responsive Design',
    ],
  },
  {
    category: 'Backend & Data',
    caption: 'APIs & persistence',
    skills: [
      'Node.js',
      'Python',
      'REST APIs',
      'Microservices',
      'MySQL',
      'PostgreSQL',
      'DynamoDB',
    ],
  },
  {
    category: 'Cloud & DevOps',
    caption: 'Ship & operate on AWS',
    skills: [
      'AWS EC2',
      'AWS Lambda',
      'AWS S3',
      'SQS',
      'SNS',
      'CloudWatch',
      'IAM',
      'Load Balancing',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Git',
    ],
  },
  {
    category: 'Testing & Architecture',
    caption: 'Confidence & structure',
    skills: [
      'Jest',
      'React Testing Library',
      'System Architecture',
      'Serverless',
      'Module Federation',
    ],
  },
];
