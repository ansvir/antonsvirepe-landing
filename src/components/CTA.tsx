import { Rocket } from 'lucide-react';
import { Translation } from '../types';

interface CTAProps {
  t: Translation;
}

export default function CTA({ t }: CTAProps) {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Rocket className="w-16 h-16 text-white mx-auto mb-6" />
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          {t.cta.title}
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          {t.cta.subtitle}
        </p>
        <button
          onClick={scrollToContact}
          className="bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
        >
          {t.cta.button}
        </button>
      </div>
    </section>
  );
}