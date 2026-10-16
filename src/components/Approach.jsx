/**
 * Approach section — proactive claim management philosophy.
 * Presented as a general explanation, not a guaranteed process.
 */
const steps = [
    {
        number: '01',
        title: 'Initial Assessment',
        description:
            'Prompt site visit upon instruction. Preliminary evaluation of the nature and extent of damage, collection of relevant documents, and review of policy terms and conditions.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Investigation &amp; Follow-up',
        description:
            'Thorough investigation of cause, circumstances, and quantum of loss. Liaison with the insured, insurer, and relevant technical experts to gather complete information.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Detailed Reporting',
        description:
            'Preparation of a comprehensive survey report setting out findings, methodology, loss calculation, and recommendations — submitted within agreed timelines.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
            </svg>
        ),
    },
    {
        number: '04',
        title: 'Settlement Support',
        description:
            'Active participation in settlement discussions, addressing insurer queries, and facilitating the process towards a fair and amicable resolution for all parties.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
        ),
    },
];

export default function Approach() {
    return (
        <section
            id="approach"
            className="py-20 md:py-28 bg-navy"
            aria-labelledby="approach-heading"
        >
            <div className="max-w-site mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* ── Left: Header ── */}
                    <div className="reveal">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-6 h-[2px] bg-cyan rounded" aria-hidden="true" />
                            <span className="font-sans text-label uppercase tracking-[0.15em] text-cyan">Our Approach</span>
                        </div>
                        <h2
                            id="approach-heading"
                            className="font-display text-display-md text-white tracking-tight mb-6"
                        >
                            Proactive Claim Management
                        </h2>
                        <p className="font-sans text-body-lg text-gray-400 leading-relaxed mb-6">
                            Elite SLA's approach centres on being proactive rather than reactive.
                            From the moment an instruction is received, our focus is on understanding
                            the loss, gathering accurate data, and driving the process towards an
                            efficient and fair outcome.
                        </p>
                        <p className="font-sans text-body-md text-gray-400 leading-relaxed">
                            The steps below reflect our general working methodology. Each claim is
                            unique and our approach is adapted to suit its specific requirements —
                            the sequence and scope may vary accordingly.
                        </p>

                        {/* Key focus areas */}
                        <div className="mt-8 space-y-3">
                            {[
                                'Reducing claim turnaround time',
                                'Transparent communication with all parties',
                                'Accurate and defensible quantum assessment',
                                'Amicable settlement focus',
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <span className="w-5 h-5 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center shrink-0">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <polyline points="20 6 9 17 4 12"/>
                                        </svg>
                                    </span>
                                    <span className="font-sans text-body-sm text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: Steps ── */}
                    <div className="space-y-4 reveal-stagger">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="flex gap-4 p-5 bg-navy-700 border border-navy-600 rounded-lg hover:border-cyan/30 transition-colors duration-200"
                            >
                                {/* Step icon */}
                                <div className="w-10 h-10 rounded bg-cyan/10 border border-cyan/20 flex items-center justify-center shrink-0 text-cyan">
                                    {step.icon}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-sans text-label uppercase tracking-widest text-cyan">{step.number}</span>
                                        <h3
                                            className="font-sans text-body-md font-semibold text-white"
                                            dangerouslySetInnerHTML={{ __html: step.title }}
                                        />
                                    </div>
                                    <p className="font-sans text-body-sm text-gray-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
