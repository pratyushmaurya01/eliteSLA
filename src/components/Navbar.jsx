import { useState, useEffect } from 'react';

/**
 * Navbar — fixed top bar with brand, nav links, theme toggle, CTA.
 * Scrolls into a frosted-glass bg after 40px.
 */
export default function Navbar({ dark, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on nav click
    const handleNavClick = () => setMobileOpen(false);

    const navLinks = [
        { label: 'About',    href: '#about' },
        { label: 'Services', href: '#expertise' },
        { label: 'Expertise',href: '#expertise' },
        { label: 'Team',     href: '#team' },
        { label: 'Presence', href: '#presence' },
        { label: 'Contact',  href: '#contact' },
    ];

    return (
        <header
            className={[
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled
                    ? 'bg-bg-primary/95 backdrop-blur-md shadow-sm border-b border-border-subtle'
                    : 'bg-transparent',
            ].join(' ')}
        >
            <div className="max-w-site mx-auto px-6 md:px-10 h-16 md:h-18 flex items-center justify-between gap-6">

                {/* ── Brand ── */}
                <a
                    href="#"
                    className="flex flex-col leading-none group shrink-0"
                    aria-label="Elite SLA — Home"
                >
                    <span className="font-display text-heading-md font-extrabold tracking-tight text-text-primary group-hover:text-text-secondary transition-colors duration-200">
                        ELITE<span className="text-accent underline decoration-border-strong underline-offset-4">SLA</span>
                    </span>
                    <span className="font-sans text-label-sm uppercase tracking-[0.15em] text-text-secondary mt-0.5">
                        Surveyors &amp; Loss Assessors
                    </span>
                </a>

                {/* ── Desktop Nav ── */}
                <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="px-3 py-2 font-sans text-body-sm font-medium text-text-secondary hover:text-text-primary hover:bg-bg-secondary rounded transition-colors duration-150"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* ── Right side ── */}
                <div className="flex items-center gap-3">
                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
                        className="w-9 h-9 rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors duration-150 border border-transparent hover:border-border-subtle"
                    >
                        {dark ? (
                            /* Sun icon */
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                            </svg>
                        ) : (
                            /* Moon icon */
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                            </svg>
                        )}
                    </button>

                    {/* CTA */}
                    <a
                        href="#contact"
                        className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-accent-contrast font-sans text-body-sm font-semibold rounded transition-colors duration-150 shadow-sm"
                    >
                        Contact Us
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen((o) => !o)}
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileOpen}
                        className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 text-text-primary"
                    >
                        <span className={`block w-5 h-[2px] bg-current rounded transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                        <span className={`block w-5 h-[2px] bg-current rounded transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-5 h-[2px] bg-current rounded transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                    </button>
                </div>
            </div>

            {/* ── Mobile Menu ── */}
            <div
                className={[
                    'lg:hidden overflow-hidden transition-all duration-300 bg-bg-primary border-t border-border-subtle',
                    mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
                ].join(' ')}
            >
                <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile navigation">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={handleNavClick}
                            className="py-2.5 px-3 font-sans text-body-md font-medium text-text-secondary hover:text-text-primary hover:bg-bg-secondary rounded transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={handleNavClick}
                        className="mt-3 py-2.5 px-3 bg-accent hover:bg-accent-hover text-accent-contrast font-sans text-body-md font-semibold rounded text-center transition-colors"
                    >
                        Contact Us
                    </a>
                </nav>
            </div>
        </header>
    );
}
