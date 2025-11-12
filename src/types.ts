export type Language = 'en' | 'ru';

export interface Translation {
  nav: {
    home: string;
    howWeWork: string;
    expertise: string;
    contact: string; // Still 'contact' for navigation, but will point to quiz
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
  howWeWork: {
    title: string;
    subtitle: string;
    automationExample: {
      title: string;
      problemTitle: string;
      problem: string;
      solutionTitle: string;
      solution: string;
      benefitsTitle: string;
      benefits: string;
    };
    timeline: {
      title: string;
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
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  quiz: { // New quiz structure
    title: string;
    subtitle: string;
    questions: {
      id: string;
      question: string;
      options: { value: string; label: string; icon?: string }[];
    }[];
    finalStep: {
      title: string;
      subtitle: string;
      name: string;
      email: string;
      company: string;
      submit: string;
      privacy: string;
      success: string;
      error: string;
    };
    nextButton: string;
    backButton: string;
  };
  footer: { // New footer section
    legalInfo: string;
  };
}