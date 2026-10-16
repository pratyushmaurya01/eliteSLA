/**
 * Hero section — full-screen dark hero with headline, supporting text,
 * two CTAs, and a professional industrial image from Unsplash.
 */
export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center bg-navy overflow-hidden pt-16"
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

            <div className="relative z-10 max-w-site mx-auto px-6 md:px-10 py-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* ── Left: Text content ── */}
                    <div
                        className="flex flex-col gap-6"
                        style={{ animation: 'fadeUpIn 0.7s ease both', animationDelay: '0ms' }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded border border-white/20 bg-white/5">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-dot" aria-hidden="true" />
                            <span className="font-sans text-label-sm uppercase tracking-[0.15em] text-white">
                                IRDAI Licensed · Reg. IRDA/CORP/SLA-200067
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="font-display text-display-xl text-white leading-[1.08] tracking-tight">
                            Expert Insurance Survey &amp;{' '}
                            <span className="text-white underline decoration-white/30 underline-offset-8">Loss Assessment</span>
                        </h1>

                        {/* Supporting text */}
                        <p className="font-sans text-body-lg text-gray-400 max-w-xl leading-relaxed">
                            Elite SLA delivers precise, impartial, and swift insurance survey and
                            loss assessment services — helping insurers and policyholders reach
                            fair, amicable settlements with speed and accuracy.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a
                                href="#expertise"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-gray-400 text-black font-sans text-body-md font-semibold rounded transition-colors duration-150 shadow-md"
                            >
                                Explore Services
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

                        {/* Trust indicators */}
                        <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 border-t border-white/10">
                            {[
                                '25+ Years Combined Experience',
                                '5 Lines of Business',
                                'Pan-India Coverage',
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-1.5">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                    <span className="font-sans text-body-sm text-gray-400">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: Image ── */}
                    <div
                        className="relative"
                        style={{ animation: 'fadeUpIn 0.7s ease both', animationDelay: '150ms' }}
                    >
                        <div className="relative rounded-lg overflow-hidden shadow-lg border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80&auto=format&fit=crop"
                                alt="Industrial inspection — insurance surveyor assessing structural damage"
                                className="w-full h-[480px] object-cover filter grayscale contrast-125 brightness-90"
                                loading="eager"
                                width="900"
                                height="480"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" aria-hidden="true" />
                        </div>

                        {/* Floating label card */}
                        <div className="absolute -bottom-4 -left-4 bg-navy-800 border border-navy-600 shadow-md rounded px-4 py-3 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                </svg>
                            </div>
                            <div>
                                <div className="font-sans text-label-sm uppercase tracking-widest text-gray-600 dark:text-gray-400">IRDAI Licensed</div>
                                <div className="font-sans text-body-sm font-semibold text-navy dark:text-white">Independent Surveyors</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll cue */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                </svg>
            </div>
        </section>
    );
}
