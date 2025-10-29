import {useState} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Process from './components/Process';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {translations} from './translations';
import {Language} from './types';
import Portfolio from "./components/Portfolio.tsx";

export default function App() {
    const [language, setLanguage] = useState<Language>('en');
    const t = translations[language];

    return (
        <div className="min-h-screen">
            <Header t={t} language={language} onLanguageChange={setLanguage}/>
            <Hero t={t}/>
            <Services t={t}/>
            <Portfolio t={t}/>
            <Expertise t={t}/>
            <Process t={t}/>
            <CTA t={t}/>
            <Contact t={t}/>
            <Footer language={language}/>
        </div>
    );
}
