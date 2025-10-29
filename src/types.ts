export type Language = 'en' | 'ru';

export interface Translation {
  nav: {
    home: string;
    services: string;
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
  services: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
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
