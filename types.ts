
export enum SectionId {
  Hero = 'hero',
  ProblemSolution = 'problem-solution',
  HowItWorks = 'how-it-works',
  Features = 'features',
  Benefits = 'benefits',
  CTA = 'cta',
}

export interface NavItem {
  label: string;
  href: string; // Will be `#${SectionId}`
}

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface HowItWorksStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}
