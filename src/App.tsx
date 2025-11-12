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
import Seo from './components/Seo';
import FadeInSection from './components/FadeInSection'; // Import FadeInSection

export default function App() {
    const [language, setLanguage] = useState<Language>('ru');
    const t = translations[language];

    return (
        <div className="min-h-screen">
            <Seo
                title={t.hero.title}
                description={t.hero.subtitle}
            />
            <FadeInSection delay={100}> {/* Initial fade-in for Header */}
                <Header t={t} language={language} onLanguageChange={setLanguage}/>
            </FadeInSection>
            <FadeInSection>
                <Hero t={t}/>
            </FadeInSection>
            <FadeInSection>
                <HowWeWork t={t}/>
            </FadeInSection>
            <FadeInSection>
                <Portfolio t={t}/>
            </FadeInSection>
            <FadeInSection>
                <Expertise t={t}/>
            </FadeInSection>
            <FadeInSection>
                <CTA t={t}/>
            </FadeInSection>
            <FadeInSection>
                <Quiz t={t}/>
            </FadeInSection>
            <FadeInSection>
                <Footer language={language} t={t}/>
            </FadeInSection>
        </div>
    );
}