/**
 * Expertise section — 5 cards for the company's lines of business.
 * Source: company profile (Fire, Engineering, Marine Cargo, Misc, LOP).
 */
const services = [
    {
        number: '01',
        title: 'Fire &amp; Allied Perils',
        description:
            'Comprehensive assessment of losses arising from fire, explosion, lightning, and allied perils. Accurate damage quantification and timely reporting to expedite claim settlement.',
        tags: ['Fire Damage', 'Explosion', 'Structural Assessment'],
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Engineering',
        description:
            "Specialist surveys for machinery breakdown, contractor's all risk, erection all risk, and equipment damage. Expert evaluation ensuring accurate indemnity calculation.",
        tags: ['Machinery Breakdown', 'CAR / EAR', 'Plant & Equipment'],
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2"/>
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Marine Cargo',
        description:
            'Assessment of cargo losses in transit by sea, road, rail, or air. Detailed surveying to establish cause, extent, and quantum of loss in accordance with policy terms.',
        tags: ['Transit Loss', 'Import/Export', 'Multi-Modal'],
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 20h20M5 20V10l7-7 7 7v10"/><path d="M9 20v-5h6v5"/>
            </svg>
        ),
    },
    {
        number: '04',
        title: 'Miscellaneous',
        description:
            'Surveying and assessment for a wide range of miscellaneous insurance claims including burglary, money, electronic equipment, and personal accident-related losses.',
        tags: ['Burglary', 'Electronic Equipment', 'Money Insurance'],
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
        ),
    },
    {
        number: '05',
        title: 'Loss of Profit (LOP)',
        description:
            'Expert determination of business interruption and consequential loss claims. Methodical analysis of gross profit, increased cost of working, and indemnity period.',
        tags: ['Business Interruption', 'Gross Profit', 'Consequential Loss'],
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
        ),
    },
];

export default function Expertise() {
    return (
        <section
            id="expertise"
            className="py-20 md:py-28 bg-bg-secondary text-text-primary"
            aria-labelledby="expertise-heading"
        >
            <div className="max-w-site mx-auto px-6 md:px-10">
                {/* Header */}
                <div className="max-w-2xl mb-14 reveal">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-6 h-[2px] bg-accent rounded" aria-hidden="true" />
                        <span className="font-sans text-label uppercase tracking-[0.15em] text-text-primary font-semibold">Our Expertise</span>
                    </div>
                    <h2
                        id="expertise-heading"
                        className="font-display text-display-md text-text-primary tracking-tight mb-4"
                    >
                        Five Lines of Business
                    </h2>
                    <p className="font-sans text-body-lg text-text-secondary">
                        Specialist surveying and assessment across the full spectrum of IRDAI-recognized
                        lines of business — delivering accuracy, independence, and speed at every stage.
                    </p>
                </div>

                {/* Card grid — 3 + 2 layout */}
                <div className="reveal-stagger">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                        {services.slice(0, 3).map((s) => (
                            <ExpertiseCard key={s.number} {...s} />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:w-2/3">
                        {services.slice(3).map((s) => (
                            <ExpertiseCard key={s.number} {...s} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ExpertiseCard({ number, title, description, tags, icon }) {
    return (
        <div className="group bg-bg-card border border-border-subtle rounded-lg p-6 md:p-8 flex flex-col gap-5 hover:shadow-md hover:border-border-strong transition-all duration-250">
            {/* Card header */}
            <div className="flex items-start justify-between">
                <span className="font-sans text-label uppercase tracking-[0.15em] text-text-primary font-semibold">
                    {number}
                </span>
                <span className="text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                    {icon}
                </span>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-border-subtle group-hover:bg-border-strong transition-colors duration-200" />

            {/* Title + desc */}
            <div className="flex-1">
                <h3
                    className="font-display text-heading-md text-text-primary mb-3"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                <p className="font-sans text-body-sm text-text-secondary leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2.5 py-1 bg-bg-secondary text-text-secondary font-sans text-label-sm rounded border border-border-subtle"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
