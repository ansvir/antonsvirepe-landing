import { Search, Lightbulb, Wrench, TrendingUp, Rocket } from 'lucide-react';
import { Translation } from '../types';

interface HowWeWorkProps {
  t: Translation;
}

const timelineIcons = [Search, Lightbulb, Wrench, TrendingUp];

export default function HowWeWork({ t }: HowWeWorkProps) {
  return (
    <section id="how-we-work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.howWeWork.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.howWeWork.subtitle}
          </p>
        </div>

        {/* Automation Example Section */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 sm:p-12 mb-20 shadow-xl border border-blue-200">
          <div className="flex items-center justify-center mb-8">
            <Rocket className="w-12 h-12 text-blue-600 mr-4" />
            <h3 className="text-3xl font-bold text-gray-900">
              {t.howWeWork.automationExample.title}
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-lg text-gray-700">
            <div>
              <h4 className="font-semibold text-xl text-blue-700 mb-3">{t.howWeWork.automationExample.problemTitle}</h4>
              <p>{t.howWeWork.automationExample.problem}</p>
            </div>
            <div>
              <h4 className="font-semibold text-xl text-blue-700 mb-3">{t.howWeWork.automationExample.solutionTitle}</h4>
              <p>{t.howWeWork.automationExample.solution}</p>
            </div>
            <div>
              <h4 className="font-semibold text-xl text-blue-700 mb-3">{t.howWeWork.automationExample.benefitsTitle}</h4>
              <p>{t.howWeWork.automationExample.benefits}</p>
            </div>
          </div>
        </div>

        {/* Integration Timeline Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            {t.howWeWork.timeline.title}
          </h3>
        </div>
        <div className="relative mb-20"> {/* Added mb-20 for spacing before benefits */}
          <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>

          <div className="space-y-12">
            {t.howWeWork.timeline.steps.map((step, index) => {
              const Icon = timelineIcons[index];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -left-2 w-20 h-20 rounded-full border-4 border-blue-200 animate-pulse"></div>
                  </div>

                  <div className="flex-1 hidden lg:block"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Moved Benefits Section */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            {t.howWeWork.benefits.title}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.howWeWork.benefits.items.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}