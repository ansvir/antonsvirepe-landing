import { Code, Server, Database, Terminal } from 'lucide-react';
import { Translation } from '../types';

interface PortfolioProps {
    t: Translation;
}

const icons = [Code, Server, Database, Terminal];

export default function Portfolio({ t }: PortfolioProps) {
    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        {t.portfolio.title}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t.portfolio.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.portfolio.projects.map((project, index) => {
                        const Icon = icons[index % icons.length]; // чтобы иконки повторялись
                        return (
                            <div
                                key={index}
                                className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all hover:shadow-xl"
                            >
                                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                {project.tech && (
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}