import {useState} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowWeWork from './components/HowWeWork';
import Expertise from './components/Expertise';
import CTA from './components/CTA';
import Footer from './components/Footer';
import {translations} from './translations';
import {Language} from './types';
import Portfolio from "./components/Portfolio.tsx";
import Quiz from './components/Quiz';
import Seo from './components/Seo'; // Import Seo component

export default function App() {
    const [language, setLanguage] = useState<Language>('ru'); // Changed default language to 'ru'
    const t = translations[language];

    return (
        <div className="min-h-screen">
            <Seo
                title={t.hero.title}
                description={t.hero.subtitle}
                // You can add more dynamic meta tags here based on the current language or page
            />
            <Header t={t} language={language} onLanguageChange={setLanguage}/>
            <Hero t={t}/>
            <HowWeWork t={t}/>
            <Portfolio t={t}/>
            <Expertise t={t}/>
            <CTA t={t}/>
            <Quiz t={t}/>
            <Footer language={language} t={t}/> {/* Pass translation object to Footer */}
        </div>
    );
}