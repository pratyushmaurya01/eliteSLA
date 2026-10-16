/**
 * About section — company intro, partnership founders, mission.
 * All content sourced from company profile — no invented facts.
 */
export default function About() {
    return (
        <section
            id="about"
            className="py-20 md:py-28 bg-bg-primary text-text-primary"
            aria-labelledby="about-heading"
        >
            <div className="max-w-site mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* ── Left: Image + accent card ── */}
                    <div className="relative reveal order-2 lg:order-1">
                        <div className="rounded-lg overflow-hidden shadow-md border border-border-subtle">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&auto=format&fit=crop"
                                alt="Professional survey and assessment consultation"
                                className="w-full h-[400px] object-cover filter grayscale contrast-125"
                                loading="lazy"
                                width="800"
                                height="400"
                            />
                        </div>
                        {/* Accent border */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent/20 rounded" aria-hidden="true" />

                        {/* Founded card */}
                        <div className="absolute top-6 -right-4 bg-bg-card border border-border-subtle shadow-md rounded px-4 py-3">
                            <div className="font-sans text-label-sm uppercase tracking-widest text-text-secondary">Founded</div>
                            <div className="font-display text-heading-md font-bold text-text-primary">Partnership Firm</div>
                        </div>
                    </div>

                    {/* ── Right: Text ── */}
                    <div className="flex flex-col gap-6 order-1 lg:order-2 reveal" style={{ transitionDelay: '100ms' }}>
                        {/* Section kicker */}
                        <div className="flex items-center gap-2">
                            <span className="w-6 h-[2px] bg-accent rounded" aria-hidden="true" />
                            <span className="font-sans text-label uppercase tracking-[0.15em] text-text-primary font-semibold">About Elite SLA</span>
                        </div>

                        <h2
                            id="about-heading"
                            className="font-display text-display-md text-text-primary tracking-tight"
                        >
                            Independent Surveyors with a Focus on Fair Settlement
                        </h2>

                        <div className="space-y-4 font-sans text-body-md text-text-secondary leading-relaxed">
                            <p>
                                <strong className="text-text-primary font-semibold">Elite Insurance Surveyors &amp; Loss Assessors</strong> is
                                an IRDAI-licensed independent surveying firm committed to delivering
                                accurate, unbiased, and timely assessments for insurance claims across
                                diverse lines of business.
                            </p>
                            <p>
                                The firm operates as a partnership between <strong className="text-text-primary font-semibold">SN Maurya</strong>,
                                who brings over 20 years of industry experience, and{' '}
                                <strong className="text-text-primary font-semibold">Amit Sehgal</strong>,
                                contributing 5+ years of professional expertise. Together, they lead
                                a team dedicated to the quick and amicable settlement of insurance claims.
                            </p>
                            <p>
                                Operating across India with a proactive claim-management philosophy,
                                Elite SLA focuses on reducing turnaround time while maintaining the
                                highest standards of professional integrity throughout the assessment
                                and reporting process.
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-2 gap-4 pt-2">
                            {[
                                { icon: '⚖️', title: 'Independent & Unbiased', desc: 'Objective assessments for fair outcomes' },
                                { icon: '⚡', title: 'Quick Turnaround', desc: 'Proactive management to reduce delays' },
                                { icon: '🛡️', title: 'IRDAI Licensed', desc: 'Reg. IRDA/CORP/SLA-200067' },
                                { icon: '🗺️', title: 'Pan-India Coverage', desc: 'Regional presence across India' },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="p-4 rounded bg-bg-card border border-border-subtle hover:border-border-strong transition-colors"
                                >
                                    <div className="text-xl mb-1" aria-hidden="true">{item.icon}</div>
                                    <div className="font-sans text-body-sm font-semibold text-text-primary">{item.title}</div>
                                    <div className="font-sans text-label text-text-secondary mt-0.5">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
