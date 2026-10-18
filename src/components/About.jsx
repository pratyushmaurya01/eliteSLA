/**
 * About section — introducing the firm.
 * Exact Page Structure:
 * 1. ABOUT ELITE SLA section label
 * 2. Main H2 heading: Insurance Surveying & Loss Assessment
 * 3. Paragraph 1: Company introduction with inline highlights for SN Maurya & Amit Sehgal
 * 4. Paragraph 2: Philosophy statement (integrated directly, no separate card or block)
 * 5. Three content blocks in a single horizontal row on desktop with 1px vertical dividers
 */
export default function About() {
    return (
        <section
            id="about"
            className="py-20 md:py-28 bg-bg-primary text-text-primary border-b border-border-subtle"
            aria-labelledby="about-heading"
        >
            <div className="max-w-site mx-auto px-6 md:px-10">
                {/* ── 1. Coherent Introduction: Label, Heading, and Both Paragraphs ── */}
                <div className="max-w-4xl mb-16 md:mb-20 reveal">
                    {/* Section label */}
                    <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                        <span className="w-5 h-[2px] bg-accent rounded-full" aria-hidden="true" />
                        <span className="font-sans text-label uppercase tracking-[0.18em] text-accent font-semibold">
                            ABOUT ELITE SLA
                        </span>
                    </div>

                    {/* Main H2 heading */}
                    <h2
                        id="about-heading"
                        className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-text-primary tracking-tight leading-[1.18] mb-6"
                    >
                        Insurance Surveying &amp; Loss Assessment
                    </h2>

                    {/* Introduction Paragraphs */}
                    <div className="space-y-4 font-sans text-body-lg text-text-secondary leading-relaxed">
                        <p>
                            Elite Insurance Surveyors &amp; Loss Assessors is a partnership firm of <span className="text-text-primary font-semibold">SN Maurya</span> and <span className="text-text-primary font-semibold">Amit Sehgal</span>.
                        </p>
                        <p>
                            Its core philosophy is to facilitate quick and amicable settlement of insurance claims within the terms of the applicable insurance policy.
                        </p>
                    </div>
                </div>

                {/* ── 2. Three Equal-Width Content Blocks (Single Horizontal Row on Desktop) ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 reveal">
                    {/* Block 01 — CLIENT GROUPS */}
                    <div className="flex flex-col md:pr-8 lg:pr-10">
                        <div className="flex items-baseline gap-2 mb-3">
                            <span className="font-mono text-label text-accent font-semibold">01</span>
                            <span className="text-border-strong text-xs font-light">—</span>
                            <h3 className="font-sans text-body-sm font-semibold uppercase tracking-[0.12em] text-text-primary">
                                CLIENT GROUPS
                            </h3>
                        </div>
                        <p className="font-sans text-body-md text-text-secondary leading-relaxed">
                            The firm handles non-motor insurance claims for corporate, industrial, commercial, SME, small-scale industry and individual clients.
                        </p>
                    </div>

                    {/* Block 02 — CLAIM COMPLEXITY */}
                    <div className="flex flex-col md:px-8 lg:px-10 md:border-l border-border-subtle">
                        <div className="flex items-baseline gap-2 mb-3">
                            <span className="font-mono text-label text-accent font-semibold">02</span>
                            <span className="text-border-strong text-xs font-light">—</span>
                            <h3 className="font-sans text-body-sm font-semibold uppercase tracking-[0.12em] text-text-primary">
                                CLAIM COMPLEXITY
                            </h3>
                        </div>
                        <p className="font-sans text-body-md text-text-secondary leading-relaxed">
                            Its team has handled claims ranging from small and medium losses to major and complex cases.
                        </p>
                    </div>

                    {/* Block 03 — MULTIDISCIPLINARY TEAM */}
                    <div className="flex flex-col md:pl-8 lg:pl-10 md:border-l border-border-subtle">
                        <div className="flex items-baseline gap-2 mb-3">
                            <span className="font-mono text-label text-accent font-semibold">03</span>
                            <span className="text-border-strong text-xs font-light">—</span>
                            <h3 className="font-sans text-body-sm font-semibold uppercase tracking-[0.12em] text-text-primary">
                                MULTIDISCIPLINARY TEAM
                            </h3>
                        </div>
                        <p className="font-sans text-body-md text-text-secondary leading-relaxed">
                            The firm brings together specialists in insurance, finance, valuation and information technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
