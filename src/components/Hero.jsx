import eliteslaHeroImg from '../assets/elitesla.jpg';

/**
 * Hero section — full-screen hero with company name headline,
 * supporting description, two CTAs, registration reference,
 * and the profile-cover artwork.
 */
export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center bg-navy overflow-hidden pt-20 md:pt-24 pb-16"
            aria-label="Hero"
        >
            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                aria-hidden="true"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }}
            />

            {/* White glow blob — subtle editorial atmosphere */}
            <div
                className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none"
                aria-hidden="true"
                style={{ background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-site mx-auto px-6 md:px-10 py-12 md:py-16 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                    {/* ── Left: Text content (prominent H1 hierarchy) ── */}
                    <div
                        className="lg:col-span-7 flex flex-col gap-6"
                        style={{ animation: 'fadeUpIn 0.7s ease both', animationDelay: '0ms' }}
                    >
                        {/* Eyebrow text */}
                        <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded border border-white/20 bg-white/5">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-dot" aria-hidden="true" />
                            <span className="font-sans text-xs md:text-label-sm uppercase tracking-[0.15em] text-text-secondary font-semibold">
                                INSURANCE SURVEYING &amp; LOSS ASSESSMENT
                            </span>
                        </div>

                        {/* Main heading (H1) — Prominent, bold, 44-52px on desktop with balanced wrapping */}
                        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[52px] font-extrabold text-white leading-[1.12] tracking-tight">
                            Elite Insurance Surveyors &amp; <br className="hidden sm:inline" />
                            Loss Assessors
                        </h1>

                        {/* Supporting description */}
                        <p className="font-sans text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed">
                            Professional insurance surveying and loss assessment across fire, engineering, marine cargo, miscellaneous and loss of profit claims, with a focus on objective assessment, clear reporting and timely service.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a
                                href="#expertise"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-gray-400 text-black font-sans text-body-md font-semibold rounded transition-colors duration-150 shadow-md"
                            >
                                Explore Our Services
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <polyline points="9 18 15 12 9 6"/>
                                </svg>
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/30 hover:border-white text-white font-sans text-body-md font-medium rounded transition-colors duration-150"
                            >
                                Contact Us
                            </a>
                        </div>

                        {/* Registration reference (secondary trust detail) */}
                        <div className="flex items-center gap-2 pt-2 border-t border-white/10 text-text-secondary">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            </svg>
                            <span className="font-sans text-xs sm:text-body-sm text-text-secondary">
                                Registration Reference: IRDA/CORP/SLA-200067
                            </span>
                        </div>
                    </div>

                    {/* ── Right: Image (balanced proportions, object-contain, desktop right) ── */}
                    <div
                        className="lg:col-span-5 relative flex items-center justify-center"
                        style={{ animation: 'fadeUpIn 0.7s ease both', animationDelay: '150ms' }}
                    >
                        <div className="w-full max-w-lg lg:max-w-none relative rounded-lg overflow-hidden shadow-lg border border-border-subtle bg-bg-card/40 flex items-center justify-center p-2 sm:p-3">
                            <img
                                src={eliteslaHeroImg}
                                alt="Elite Insurance Surveyors & Loss Assessors artwork"
                                className="w-full h-auto max-h-[380px] sm:max-h-[440px] lg:max-h-[460px] object-contain rounded"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll cue */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                </svg>
            </div>
        </section>
    );
}
