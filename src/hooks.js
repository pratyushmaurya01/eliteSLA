import { useState, useEffect } from 'react';

/**
 * useScrollReveal — attaches IntersectionObserver to elements with
 * class "reveal" or "reveal-stagger". Adds "visible" once in viewport.
 * Called once in App.jsx so it covers all sections.
 */
export function useScrollReveal() {
    useEffect(() => {
        // Small delay so all components are mounted and painted
        const timer = setTimeout(() => {
            const elements = document.querySelectorAll('.reveal, .reveal-stagger');
            if (!elements.length) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                // Large top margin so elements already in viewport get triggered immediately
                { threshold: 0.05, rootMargin: '200px 0px -20px 0px' }
            );

            elements.forEach((el) => observer.observe(el));
        }, 150);

        return () => clearTimeout(timer);
    }, []);
}

/**
 * useTheme — persists dark/light theme in localStorage.
 * Applies "dark" class to <html> for Tailwind darkMode: 'class'.
 */
export function useTheme() {
    const [dark, setDark] = useState(() => {
        const saved = localStorage.getItem('elite-sla-theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (dark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('elite-sla-theme', dark ? 'dark' : 'light');
    }, [dark]);

    return { dark, toggleTheme: () => setDark((d) => !d) };
}
