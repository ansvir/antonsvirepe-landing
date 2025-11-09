import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { Language, Translation } from '../types';

interface HeaderProps {
  t: Translation;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Header({ t, language, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {language === 'en' ? 'Anton Svirepa' : 'Антон Свирепа'}
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t.nav.home}
            </button>
            <button onClick={() => scrollToSection('how-we-work')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t.nav.howWeWork} {/* Updated from services */}
            </button>
            <button onClick={() => scrollToSection('expertise')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t.nav.expertise}
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              {t.nav.process}
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              {t.nav.contact}
            </button>
            <button
              onClick={() => onLanguageChange(language === 'en' ? 'ru' : 'en')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Change language"
            >
              <Globe className="w-5 h-5" />
              <span className="font-medium">{language === 'en' ? 'RU' : 'EN'}</span>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => onLanguageChange(language === 'en' ? 'ru' : 'en')}
              className="text-gray-700 hover:text-blue-600"
              aria-label="Change language"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium">
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('how-we-work')} className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium">
                {t.nav.howWeWork} {/* Updated from services */}
              </button>
              <button onClick={() => scrollToSection('expertise')} className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium">
                {t.nav.expertise}
              </button>
              <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium">
                {t.nav.process}
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium">
                {t.nav.contact}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}