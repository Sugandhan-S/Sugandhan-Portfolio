/**
 * Central type definitions for the portfolio.
 * Every piece of résumé content is typed here so the data files and the
 * components that consume them stay in sync. No `any` is used anywhere.
 */

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  links: {
    github: string;
    linkedin: string;
    resumeUrl: string;
  };
}

export interface HeadlineStat {
  /** The value shown large, e.g. "3.5+" */
  value: string;
  /** The label beneath it, e.g. "Years building" */
  label: string;
}

export type SkillCategory =
  | 'Frontend'
  | 'Backend & Data'
  | 'Cloud & DevOps'
  | 'Testing & Architecture';

export interface SkillGroup {
  category: SkillCategory;
  /** Short mono caption describing the group's focus. */
  caption: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  /** Optional short context line for the role. */
  context?: string;
  /** Achievement bullets. Percentages are auto-highlighted at render time. */
  achievements: string[];
  /** Technologies used, rendered as compact tags. */
  stack: string[];
}

export interface Project {
  id: string;
  title: string;
  /** One-line summary of what the build is. */
  summary: string;
  /** The concrete outcome or impact. */
  impact: string;
  stack: string[];
  /** Optional external link; the button only renders when present. */
  href?: string;
  /** Short label for where the work lived (company / context). */
  origin: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  qualification: string;
  detail: string;
  period: string;
  location: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
}

export interface NavItem {
  /** The section id to scroll to. */
  target: string;
  /** The visible label. */
  label: string;
}
