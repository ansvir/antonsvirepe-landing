import { Language, Translation } from '../types';

interface FooterProps {
  language: Language;
  t: Translation; // Add translation prop
}

export default function Footer({ language, t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 mb-2">
          © {currentYear} {language === 'en' ? 'All rights reserved' : 'Все права защищены'}
        </p>
        <p className="text-gray-500 text-sm">
          {t.footer.legalInfo}
        </p>
      </div>
    </footer>
  );
}