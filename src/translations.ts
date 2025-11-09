import { Translation } from './types';

export const translations: Record<'en' | 'ru', Translation> = {
  en: {
    nav: {
      home: 'Home',
      howWeWork: 'How We Work', // Renamed from services
      expertise: 'Expertise',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Business Process Automation Expert',
      title: 'Transform Your Business with Smart IT Solutions',
      subtitle: 'I help companies streamline operations, eliminate manual tasks, and boost efficiency through custom automation and integration solutions.',
      cta: 'Start Your Project',
      ctaSecondary: 'View Portfolio', // Updated
    },
    stats: {
      projects: 'Projects Delivered',
      satisfaction: 'Client Satisfaction',
      efficiency: 'Average Efficiency Gain',
    },
    howWeWork: { // Renamed from services
      title: 'How We Work to Drive Your Success',
      subtitle: 'Streamlining your operations with tailored automation solutions',
      automationExample: {
        title: 'Automation Example: Travel Agency Booking',
        problemTitle: 'Problem:', // New
        problem: 'A travel agency manually processes flight and hotel bookings, creates itineraries, and handles customer communication. This leads to slow response times, errors, and agents spending hours on repetitive data entry.',
        solutionTitle: 'Solution:', // New
        solution: 'An automated system integrates with airline and hotel APIs. When a customer requests a trip, the system automatically searches for options, generates a preliminary itinerary, and sends it for agent review. Once approved, it can auto-book and send confirmations. Automated email/SMS updates keep customers informed about booking confirmations, flight changes, and pre-trip reminders.',
        benefitsTitle: 'Benefits & Growth:', // New
        benefits: 'Agents save hours daily, focusing on complex requests and customer relationships. Reduced human error increases accuracy. Faster responses and proactive updates boost customer satisfaction. The agency can handle more bookings without proportional cost increases, leading to significant business growth and scalability.',
      },
      timeline: {
        title: 'Our Integration Process',
        steps: [
          {
            title: 'Free Audit of Business Processes',
            description: 'We start with a comprehensive analysis of your current workflows to identify bottlenecks and automation opportunities.',
          },
          {
            title: 'Building a Solution Design',
            description: 'Based on the audit, we craft a detailed solution design, outlining the architecture, technologies, and implementation plan.',
          },
          {
            title: 'Integrating Solution to Business',
            description: 'Our team develops and seamlessly integrates the custom automation solution into your existing business environment.',
          },
          {
            title: 'Business Growth & Reduced Costs',
            description: 'Post-integration, you\'ll experience enhanced efficiency, reduced operational costs, and a clear path to sustainable business growth.',
          },
        ],
      },
      benefits: { // Moved from top-level 'benefits'
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
    cta: {
      title: 'Ready to Automate Your Business?',
      subtitle: 'Let\'s discuss how automation can transform your operations and drive growth.',
      button: 'Try Quick Audit',
    },
    quiz: {
      title: 'Find Your Automation Potential',
      subtitle: 'Answer a few quick questions to get a personalized audit result.',
      questions: [
        {
          id: 'q1',
          question: 'Which area of your business requires the most optimization?',
          options: [
            { value: 'sales', label: 'Sales', icon: '📈' },
            { value: 'marketing', label: 'Marketing', icon: '📣' },
            { value: 'operations', label: 'Operations', icon: '⚙️' },
            { value: 'finance', label: 'Finance', icon: '💰' },
          ],
        },
        {
          id: 'q2',
          question: 'How much time per day do you spend on routine, repetitive tasks?',
          options: [
            { value: 'less_1_hour', label: 'Less than 1 hour', icon: '⏱️' },
            { value: '1_3_hours', label: '1-3 hours', icon: '⏳' },
            { value: 'more_3_hours', label: 'More than 3 hours', icon: '😵' },
          ],
        },
        {
          id: 'q3',
          question: 'What is the main problem you want to solve with automation?',
          options: [
            { value: 'cost_reduction', label: 'Cost Reduction', icon: '📉' },
            { value: 'efficiency_increase', label: 'Efficiency Increase', icon: '🚀' },
            { value: 'customer_service', label: 'Improve Customer Service', icon: '💖' },
            { value: 'business_scaling', label: 'Business Scaling', icon: '📈' },
          ],
        },
        {
          id: 'q4',
          question: 'How familiar are you with business process automation concepts?',
          options: [
            { value: 'not_familiar', label: 'Not familiar at all', icon: '🤷' },
            { value: 'somewhat_familiar', label: 'Somewhat familiar', icon: '🤔' },
            { value: 'well_versed', label: 'Well-versed', icon: '✨' },
            { value: 'expert', label: 'Expert', icon: '🧠' },
          ],
        },
      ],
      finalStep: {
        title: 'Where should we send your audit results?',
        subtitle: 'Provide your contact details, and we\'ll send a personalized report based on your answers.',
        name: 'Your Name',
        email: 'Email Address',
        company: 'Company Name (Optional)',
        submit: 'Get My Audit Results',
        privacy: 'Your information will not be shared with third parties.',
        success: 'Thank you! Your audit results will be sent to your email shortly.',
        error: 'Failed to submit your quiz. Please try again.',
      },
      nextButton: 'Next',
      backButton: 'Back',
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      howWeWork: 'Как мы работаем', // Renamed from services
      expertise: 'Экспертиза',
      contact: 'Контакты',
    },
    hero: {
      greeting: 'Эксперт по автоматизации бизнес-процессов',
      title: 'Трансформируйте ваш бизнес с помощью умных IT решений',
      subtitle: 'Я помогаю компаниям оптимизировать операции, устранить ручные задачи и повысить эффективность через индивидуальные решения автоматизации и интеграции.',
      cta: 'Начать проект',
      ctaSecondary: 'Портфолио', // Updated
    },
    stats: {
      projects: 'Реализованных проектов',
      satisfaction: 'Удовлетворенность клиентов',
      efficiency: 'Средний прирост эффективности',
    },
    howWeWork: { // Renamed from services
      title: 'Как мы работаем для вашего успеха',
      subtitle: 'Оптимизация ваших операций с помощью индивидуальных решений по автоматизации',
      automationExample: {
        title: 'Пример автоматизации: Бронирование в туристическом агентстве',
        problemTitle: 'Проблема:', // New
        problem: 'Туристическое агентство вручную обрабатывает бронирования авиабилетов и отелей, создает маршруты и ведет общение с клиентами. Это приводит к медленному времени ответа, ошибкам и трате часов агентов на повторяющийся ввод данных.',
        solutionTitle: 'Решение:', // New
        solution: 'Автоматизированная система интегрируется с API авиакомпаний и отелей. Когда клиент запрашивает поездку, система автоматически ищет варианты, генерирует предварительный маршрут и отправляет его на проверку агенту. После одобрения она может автоматически бронировать и отправлять подтверждения. Автоматические уведомления по электронной почте/SMS информируют клиентов о подтверждениях бронирования, изменениях рейсов и напоминаниях перед поездкой.',
        benefitsTitle: 'Преимущества и рост:', // New
        benefits: 'Агенты экономят часы ежедневно, фокусируясь на сложных запросах и отношениях с клиентами. Снижение человеческих ошибок повышает точность. Более быстрые ответы и проактивные обновления повышают удовлетворенность клиентов. Агентство может обрабатывать больше бронирований без пропорционального увеличения затрат, что приводит к значительному росту бизнеса и масштабируемости.',
      },
      timeline: {
        title: 'Наш процесс интеграции',
        steps: [
          {
            title: 'Бесплатный аудит бизнес-процессов',
            description: 'Мы начинаем с всестороннего анализа ваших текущих рабочих процессов для выявления узких мест и возможностей для автоматизации.',
          },
          {
            title: 'Разработка дизайна решения',
            description: 'На основе аудита мы разрабатываем детальный дизайн решения, описывающий архитектуру, технологии и план реализации.',
          },
          {
            title: 'Интеграция решения в бизнес',
            description: 'Наша команда разрабатывает и бесшовно интегрирует индивидуальное решение по автоматизации в вашу существующую бизнес-среду.',
          },
          {
            title: 'Рост бизнеса и снижение затрат',
            description: 'После интеграции вы ощутите повышенную эффективность, сокращение операционных расходов и четкий путь к устойчивому росту бизнеса.',
          },
        ],
      },
      benefits: { // Moved from top-level 'benefits'
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
    cta: {
      title: 'Готовы автоматизировать ваш бизнес?',
      subtitle: 'Давайте обсудим, как автоматизация может трансформировать ваши операции и стимулировать рост.',
      button: 'Попробовать быстрый аудит',
    },
    quiz: {
      title: 'Определите свой потенциал автоматизации',
      subtitle: 'Ответьте на несколько быстрых вопросов, чтобы получить персонализированный результат аудита.',
      questions: [
        {
          id: 'q1',
          question: 'Какая область вашего бизнеса требует наибольшей оптимизации?',
          options: [
            { value: 'sales', label: 'Продажи', icon: '📈' },
            { value: 'marketing', label: 'Маркетинг', icon: '📣' },
            { value: 'operations', label: 'Операции', icon: '⚙️' },
            { value: 'finance', label: 'Финансы', icon: '💰' },
          ],
        },
        {
          id: 'q2',
          question: 'Сколько времени в день вы тратите на рутинные, повторяющиеся задачи?',
          options: [
            { value: 'less_1_hour', label: 'Менее 1 часа', icon: '⏱️' },
            { value: '1_3_hours', label: '1-3 часа', icon: '⏳' },
            { value: 'more_3_hours', label: 'Более 3 часов', icon: '😵' },
          ],
        },
        {
          id: 'q3',
          question: 'Какую главную проблему вы хотите решить с помощью автоматизации?',
          options: [
            { value: 'cost_reduction', label: 'Снижение затрат', icon: '📉' },
            { value: 'efficiency_increase', label: 'Повышение эффективности', icon: '🚀' },
            { value: 'customer_service', label: 'Улучшение качества обслуживания клиентов', icon: '💖' },
            { value: 'business_scaling', label: 'Масштабирование бизнеса', icon: '📈' },
          ],
        },
        {
          id: 'q4',
          question: 'Насколько вы знакомы с концепциями автоматизации бизнес-процессов?',
          options: [
            { value: 'not_familiar', label: 'Совсем не знаком', icon: '🤷' },
            { value: 'somewhat_familiar', label: 'Немного знаю', icon: '🤔' },
            { value: 'well_versed', label: 'Хорошо разбираюсь', icon: '✨' },
            { value: 'expert', label: 'Эксперт', icon: '🧠' },
          ],
        },
      ],
      finalStep: {
        title: 'Куда прислать результаты аудита?',
        subtitle: 'Укажите свои контактные данные, и мы отправим персонализированный отчет на основе ваших ответов.',
        name: 'Ваше имя',
        email: 'Email адрес',
        company: 'Название компании (Необязательно)',
        submit: 'Получить результаты аудита',
        privacy: 'Ваша информация не передается третьим лицам.',
        success: 'Спасибо! Результаты вашего аудита будут отправлены на вашу электронную почту в ближайшее время.',
        error: 'Не удалось отправить квиз. Пожалуйста, попробуйте еще раз.',
      },
      nextButton: 'Далее',
      backButton: 'Назад',
    },
  },
};