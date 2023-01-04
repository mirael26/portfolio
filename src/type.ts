export interface IEducationInfo {
  year: string;
  title: string;
  institution: string;
}

export interface IExperienceInfo {
  period: string;
  company: string;
  position: string; 
  description: string;
}

export interface IPortfolioData {
  title: string;
  description: string;
  demoSrc?: string;
  codeSrc?: string;
  layout: boolean;
  spa: boolean;
  typescript: boolean;
  redux: boolean;
  animation: boolean;
  tests: boolean;
  preview: string;
}
