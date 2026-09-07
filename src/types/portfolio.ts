export interface MetricItem {
  label: string;
  value: string;
}

export interface TechnicalChallenge {
  title: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  keyMetrics: MetricItem[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  architecture: string;
  challenges: TechnicalChallenge[];
  layoutType: 'flagship' | 'dual' | 'ledger';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  type: string;
  highlights: string[];
  skills: string[];
  link?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  verifyUrl: string;
}

export interface Achievement {
  id: string;
  title: string;
  rank: string;
  organizer: string;
  year: string;
  description: string;
}

export type TechCategory = 
  | 'All' 
  | 'Languages' 
  | 'ML & Deep Learning' 
  | 'Generative AI & Vision' 
  | 'Backend & Web' 
  | 'Databases & Cloud';

export interface TechItem {
  name: string;
  category: Exclude<TechCategory, 'All'>;
  deviconClass?: string;
  simpleIconKey?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  resumePdf: string;
}
