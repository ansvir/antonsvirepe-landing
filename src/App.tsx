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
import Quiz from './components/Quiz'; // Import the new Quiz component

export default function App() {
    const [language, setLanguage] = useState<Language>('en');
    const t = translations[language];

    return (
        <div className="min-h-screen">
            <Header t={t} language={language} onLanguageChange={setLanguage}/>
            <Hero t={t}/>
            <HowWeWork t={t}/>
            <Portfolio t={t}/>
            <Expertise t={t}/>
            <CTA t={t}/>
            <Quiz t={t}/> {/* Use the new Quiz component */}
            <Footer language={language}/>
        </div>
    );
}