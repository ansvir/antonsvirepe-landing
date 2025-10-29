import { CheckCircle2 } from 'lucide-react';
import { Translation } from '../types';

interface ExpertiseProps {
  t: Translation;
}

export default function Expertise({ t }: ExpertiseProps) {
  return (
    <section id="expertise" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.expertise.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.expertise.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.expertise.areas.map((area, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 group"
              >
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
