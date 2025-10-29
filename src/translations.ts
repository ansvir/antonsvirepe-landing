import { Translation } from './types';

export const translations: Record<'en' | 'ru', Translation> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      expertise: 'Expertise',
      process: 'Process',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Business Process Automation Expert',
      title: 'Transform Your Business with Smart IT Solutions',
      subtitle: 'I help companies streamline operations, eliminate manual tasks, and boost efficiency through custom automation and integration solutions.',
      cta: 'Start Your Project',
      ctaSecondary: 'View Services',
    },
    stats: {
      projects: 'Projects Delivered',
      satisfaction: 'Client Satisfaction',
      efficiency: 'Average Efficiency Gain',
    },
    services: {
      title: 'Services That Drive Results',
      subtitle: 'Comprehensive automation solutions tailored to your business needs',
      items: [
        {
          title: 'Process Automation',
          description: 'Automate repetitive tasks, workflows, and data processing to free up your team for strategic work.',
        },
        {
          title: 'System Integration',
          description: 'Connect disparate systems and tools to create seamless data flow across your organization.',
        },
        {
          title: 'Custom Software Development',
          description: 'Build tailored solutions that address your unique business challenges and requirements.',
        },
        {
          title: 'API Development & Integration',
          description: 'Create and integrate APIs to enable communication between your business applications.',
        },
        {
          title: 'Database Optimization',
          description: 'Design and optimize databases for better performance, scalability, and data integrity.',
        },
        {
          title: 'Legacy System Modernization',
          description: 'Upgrade outdated systems with modern technologies to improve efficiency and reduce costs.',
        },
      ],
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Some of the projects I've worked on",
      projects: [
        {
          title: "Order Automation System",
          description: "Reduced manual operations by 40% using Spring Boot & PostgreSQL.",
          tech: ["Spring Boot", "PostgreSQL", "Docker"]
        },
        {
          title: "Internal CRM Integration",
          description: "Integrated CRM with Telegram notifications for fast client updates.",
          tech: ["React", "Supabase", "Node.js"]
        },
        {
          title: "Reporting Dashboard",
          description: "Created a dashboard for business KPIs with real-time data.",
          tech: ["React", "TypeScript", "Tailwind"]
        }
      ]
    },
    expertise: {
      title: 'Technical Expertise',
      subtitle: 'Leveraging modern technologies to solve complex business problems',
      areas: [
        'Python & JavaScript/TypeScript',
        'React, Node.js, Express',
        'REST APIs & GraphQL',
        'PostgreSQL, MongoDB',
        'AWS, Azure, Cloud Services',
        'Docker & Kubernetes',
        'CI/CD & DevOps',
        'RPA Tools & Frameworks',
        'Webhook Integration',
        'Zapier, Make, n8n',
      ],
    },
    process: {
      title: 'How I Work',
      subtitle: 'A proven methodology that delivers results',
      steps: [
        {
          title: 'Discovery & Analysis',
          description: 'I analyze your current processes, identify bottlenecks, and uncover automation opportunities.',
        },
        {
          title: 'Strategy & Planning',
          description: 'I develop a detailed implementation plan with clear milestones, timelines, and expected outcomes.',
        },
        {
          title: 'Development & Integration',
          description: 'I build and integrate solutions using best practices, ensuring quality and reliability.',
        },
        {
          title: 'Testing & Deployment',
          description: 'I thoroughly test all systems and deploy them with minimal disruption to your operations.',
        },
        {
          title: 'Training & Support',
          description: 'I provide documentation, training, and ongoing support to ensure smooth adoption.',
        },
      ],
    },
    benefits: {
      title: 'Why Choose Me',
      items: [
        {
          title: 'Business-First Approach',
          description: 'I focus on understanding your business goals, not just technical requirements.',
        },
        {
          title: 'Proven Track Record',
          description: 'Years of experience delivering automation solutions that generate measurable ROI.',
        },
        {
          title: 'End-to-End Solutions',
          description: 'From consultation to deployment and support, I handle every aspect of your project.',
        },
        {
          title: 'Transparent Communication',
          description: 'Regular updates, clear documentation, and honest timelines throughout the project.',
        },
      ],
    },
    cta: {
      title: 'Ready to Automate Your Business?',
      subtitle: 'Let\'s discuss how automation can transform your operations and drive growth.',
      button: 'Schedule a Consultation',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Tell me about your project and let\'s explore how I can help',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        company: 'Company Name',
        message: 'Tell me about your project',
        submit: 'Send Message',
        success: 'Thank you! I\'ll get back to you within 24 hours.',
      },
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      expertise: 'Экспертиза',
      process: 'Процесс',
      contact: 'Контакты',
    },
    hero: {
      greeting: 'Эксперт по автоматизации бизнес-процессов',
      title: 'Трансформируйте ваш бизнес с помощью умных IT решений',
      subtitle: 'Я помогаю компаниям оптимизировать операции, устранить ручные задачи и повысить эффективность через индивидуальные решения автоматизации и интеграции.',
      cta: 'Начать проект',
      ctaSecondary: 'Услуги',
    },
    stats: {
      projects: 'Реализованных проектов',
      satisfaction: 'Удовлетворенность клиентов',
      efficiency: 'Средний прирост эффективности',
    },
    services: {
      title: 'Услуги, которые приносят результат',
      subtitle: 'Комплексные решения автоматизации, адаптированные под ваши бизнес-потребности',
      items: [
        {
          title: 'Автоматизация процессов',
          description: 'Автоматизация повторяющихся задач, рабочих процессов и обработки данных, освобождая команду для стратегической работы.',
        },
        {
          title: 'Интеграция систем',
          description: 'Соединение разрозненных систем и инструментов для создания беспрепятственного потока данных в организации.',
        },
        {
          title: 'Разработка под заказ',
          description: 'Создание индивидуальных решений, которые отвечают вашим уникальным бизнес-вызовам и требованиям.',
        },
        {
          title: 'Разработка и интеграция API',
          description: 'Создание и интеграция API для обеспечения взаимодействия между бизнес-приложениями.',
        },
        {
          title: 'Оптимизация баз данных',
          description: 'Проектирование и оптимизация баз данных для улучшения производительности, масштабируемости и целостности данных.',
        },
        {
          title: 'Модернизация устаревших систем',
          description: 'Обновление устаревших систем современными технологиями для повышения эффективности и снижения затрат.',
        },
      ],
    },
    portfolio: {
      title: "Портфолио",
      subtitle: "Некоторые проекты, над которыми я работал",
      projects: [
        {
          title: "Система автоматизации заказов",
          description: "Сократил ручные операции на 40% с помощью Spring Boot и PostgreSQL.",
          tech: ["Spring Boot", "PostgreSQL", "Docker"]
        },
        {
          title: "Интеграция CRM",
          description: "Связал CRM с уведомлениями в Telegram для быстрого обновления клиентов.",
          tech: ["React", "Supabase", "Node.js"]
        },
        {
          title: "Дашборд отчётности",
          description: "Создал дашборд для бизнес KPI с данными в реальном времени.",
          tech: ["React", "TypeScript", "Tailwind"]
        }
      ]
    },
    expertise: {
      title: 'Техническая экспертиза',
      subtitle: 'Использование современных технологий для решения сложных бизнес-задач',
      areas: [
        'Python & JavaScript/TypeScript',
        'React, Node.js, Express',
        'REST APIs & GraphQL',
        'PostgreSQL, MongoDB',
        'AWS, Azure, облачные сервисы',
        'Docker & Kubernetes',
        'CI/CD & DevOps',
        'Инструменты и фреймворки RPA',
        'Интеграция Webhook',
        'Zapier, Make, n8n',
      ],
    },
    process: {
      title: 'Как я работаю',
      subtitle: 'Проверенная методология, которая приносит результаты',
      steps: [
        {
          title: 'Анализ и исследование',
          description: 'Я анализирую текущие процессы, выявляю узкие места и обнаруживаю возможности для автоматизации.',
        },
        {
          title: 'Стратегия и планирование',
          description: 'Я разрабатываю детальный план реализации с четкими этапами, сроками и ожидаемыми результатами.',
        },
        {
          title: 'Разработка и интеграция',
          description: 'Я создаю и интегрирую решения, используя лучшие практики, обеспечивая качество и надежность.',
        },
        {
          title: 'Тестирование и развертывание',
          description: 'Я тщательно тестирую все системы и развертываю их с минимальными нарушениями для ваших операций.',
        },
        {
          title: 'Обучение и поддержка',
          description: 'Я предоставляю документацию, обучение и постоянную поддержку для обеспечения плавного внедрения.',
        },
      ],
    },
    benefits: {
      title: 'Почему выбирают меня',
      items: [
        {
          title: 'Бизнес-ориентированный подход',
          description: 'Я фокусируюсь на понимании ваших бизнес-целей, а не только технических требований.',
        },
        {
          title: 'Проверенный опыт',
          description: 'Годы опыта в предоставлении решений автоматизации, которые приносят измеримую рентабельность инвестиций.',
        },
        {
          title: 'Комплексные решения',
          description: 'От консультации до развертывания и поддержки, я обрабатываю каждый аспект вашего проекта.',
        },
        {
          title: 'Прозрачная коммуникация',
          description: 'Регулярные обновления, четкая документация и честные сроки на протяжении всего проекта.',
        },
      ],
    },
    cta: {
      title: 'Готовы автоматизировать ваш бизнес?',
      subtitle: 'Давайте обсудим, как автоматизация может трансформировать ваши операции и стимулировать рост.',
      button: 'Запланировать консультацию',
    },
    contact: {
      title: 'Свяжитесь со мной',
      subtitle: 'Расскажите о вашем проекте, и давайте обсудим, как я могу помочь',
      form: {
        name: 'Ваше имя',
        email: 'Email адрес',
        company: 'Название компании',
        message: 'Расскажите о вашем проекте',
        submit: 'Отправить сообщение',
        success: 'Спасибо! Я свяжусь с вами в течение 24 часов.',
      },
    },
  },
};
