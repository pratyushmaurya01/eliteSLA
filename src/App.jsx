import { useState, useEffect } from 'react';
import { useTheme, useScrollReveal } from './hooks';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CredibilityStrip from './components/CredibilityStrip';
import About from './components/About';
import Expertise from './components/Expertise';
import ExperienceTimeline from './components/ExperienceTimeline';
import Approach from './components/Approach';
import Team from './components/Team';
import Presence from './components/Presence';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * App — root component.
 * Manages intro animation (once per session) and wires all sections.
 */
export default function App() {
    const { dark, toggleTheme } = useTheme();
    const [introComplete, setIntroComplete] = useState(() => {
        // Skip intro if already shown this session
        return sessionStorage.getItem('elite-sla-intro') === 'done';
    });

    const handleIntroComplete = () => {
        sessionStorage.setItem('elite-sla-intro', 'done');
        setIntroComplete(true);
    };

    // Attach scroll-reveal observer after main content is visible
    useScrollReveal();

    return (
        <div className="min-h-screen bg-bg-primary font-sans text-text-primary antialiased">
            {/* Intro animation — shown once per session */}
            {!introComplete && (
                <IntroAnimation onComplete={handleIntroComplete} />
            )}

            {/* ── Navigation ── */}
            <Navbar dark={dark} toggleTheme={toggleTheme} />

            {/* ── Page sections ── */}
            <main id="main-content">
                {/* 1. Hero */}
                <Hero />

                {/* 2. Credibility strip */}
                <CredibilityStrip />

                {/* 3. About */}
                <About />

                {/* 4. Our Expertise */}
                <Expertise />

                {/* 5. Experience timeline */}
                <ExperienceTimeline />

                {/* 6. Our Approach */}
                <Approach />

                {/* 7. Team preview */}
                <Team />

                {/* 8. Presence */}
                <Presence />

                {/* 9. Contact CTA + form */}
                <Contact />
            </main>

            {/* ── Footer ── */}
            <Footer />
        </div>
    );
}
