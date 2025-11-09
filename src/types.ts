export type Language = 'en' | 'ru';

export interface Translation {
  nav: {
    home: string;
    howWeWork: string; // Renamed from services
    expertise: string;
    process: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  stats: {
    projects: string;
    satisfaction: string;
    efficiency: string;
  };
  howWeWork: { // Renamed from services
    title: string;
    subtitle: string;
    automationExample: {
      title: string;
      problemTitle: string; // New
      problem: string;
      solutionTitle: string; // New
      solution: string;
      benefitsTitle: string; // New
      benefits: string;
    };
    timeline: {
      title: string;
      steps: {
        title: string;
        description: string;
      }[];
    };
  };
  portfolio: {
    title: string;
    subtitle: string;
    projects: {
      title: string;
      description: string;
      tech: string[]
    }[]
  }
  expertise: {
    title: string;
    subtitle: string;
    areas: string[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  benefits: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
      success: string;
    };
  };
}