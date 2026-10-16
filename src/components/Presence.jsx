/**
 * Presence section — regional coverage map visualization.
 * Locations listed in company profile only. No invented offices.
 */
const regions = [
    {
        name: 'North India',
        coverage: 'Delhi NCR, Uttar Pradesh, Uttarakhand, Punjab, Haryana, Himachal Pradesh, Jammu &amp; Kashmir',
        highlight: true,
    },
    {
        name: 'West India',
        coverage: 'Maharashtra, Gujarat, Rajasthan',
        highlight: false,
    },
    {
        name: 'South India',
        coverage: 'Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, Telangana',
        highlight: false,
    },
    {
        name: 'East India',
        coverage: 'West Bengal, Odisha, Bihar, Jharkhand',
        highlight: false,
    },
    {
        name: 'Central India',
        coverage: 'Madhya Pradesh, Chhattisgarh',
        highlight: false,
    },
    {
        name: 'North East',
        coverage: 'Assam and North-Eastern States',
        highlight: false,
    },
];

export default function Presence() {
    return (
        <section
            id="presence"
            className="py-20 md:py-28 bg-white dark:bg-navy"
            aria-labelledby="presence-heading"
        >
            <div className="max-w-site mx-auto px-6 md:px-10">
                {/* Header */}
                <div className="max-w-2xl mb-14 reveal">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-6 h-[2px] bg-cyan rounded" aria-hidden="true" />
                        <span className="font-sans text-label uppercase tracking-[0.15em] text-cyan">Our Presence</span>
                    </div>
                    <h2
                        id="presence-heading"
                        className="font-display text-display-md text-navy dark:text-white tracking-tight mb-4"
                    >
                        Pan-India Coverage
                    </h2>
                    <p className="font-sans text-body-lg text-gray-600 dark:text-gray-400">
                        Elite SLA operates across all major regions of India, enabling rapid
                        on-site assessment wherever a claim arises. Our regional network ensures
                        local knowledge combined with professional standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* ── India outline SVG (simplified decorative map) ── */}
                    <div className="reveal flex items-center justify-center">
                        <div className="relative w-full max-w-sm">
                            {/* Simple India outline placeholder — decorative */}
                            <svg
                                viewBox="0 0 300 380"
                                className="w-full drop-shadow-md"
                                aria-hidden="true"
                                role="presentation"
                            >
                                {/* Background */}
                                <rect width="300" height="380" fill="none" />

                                {/* Simple stylized India shape */}
                                <path
                                    d="M120 20 L180 20 L220 50 L240 80 L250 120 L240 160 L260 190 L250 230 L230 260 L200 290 L170 330 L150 360 L130 330 L100 290 L70 260 L50 230 L40 190 L60 160 L50 120 L60 80 L80 50 Z"
                                    fill="none"
                                    stroke="#595A5C"
                                    strokeWidth="1.5"
                                    opacity="0.5"
                                />

                                {/* Region dots */}
                                {/* North */}
                                <circle cx="150" cy="80" r="7" fill="#FFFFFF" opacity="0.95" />
                                <text x="165" y="84" fontSize="10" fill="#FFFFFF" fontFamily="Inter, sans-serif" fontWeight="600">North</text>

                                {/* West */}
                                <circle cx="90" cy="170" r="5" fill="#D0D1D1" opacity="0.8" />
                                <text x="70" y="174" fontSize="10" fill="#D0D1D1" fontFamily="Inter, sans-serif" fontWeight="600" textAnchor="end">West</text>

                                {/* East */}
                                <circle cx="215" cy="175" r="5" fill="#D0D1D1" opacity="0.8" />
                                <text x="230" y="179" fontSize="10" fill="#D0D1D1" fontFamily="Inter, sans-serif" fontWeight="600">East</text>

                                {/* Central */}
                                <circle cx="150" cy="190" r="4" fill="#8E8F90" opacity="0.6" />

                                {/* South */}
                                <circle cx="150" cy="290" r="5" fill="#D0D1D1" opacity="0.8" />
                                <text x="165" y="294" fontSize="10" fill="#D0D1D1" fontFamily="Inter, sans-serif" fontWeight="600">South</text>

                                {/* Connecting lines */}
                                <line x1="150" y1="80" x2="90" y2="170" stroke="#3C3D3D" strokeWidth="1" strokeDasharray="3 3" />
                                <line x1="150" y1="80" x2="215" y2="175" stroke="#3C3D3D" strokeWidth="1" strokeDasharray="3 3" />
                                <line x1="150" y1="80" x2="150" y2="290" stroke="#3C3D3D" strokeWidth="1" strokeDasharray="3 3" />
                                <line x1="90" y1="170" x2="215" y2="175" stroke="#3C3D3D" strokeWidth="1" strokeDasharray="3 3" />
                            </svg>

                            {/* Pan-India badge */}
                            <div className="absolute -top-3 -right-3 bg-cyan text-white font-sans text-label-sm rounded-full px-3 py-1 uppercase tracking-widest shadow-sm">
                                All India
                            </div>
                        </div>
                    </div>

                    {/* ── Region cards ── */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal-stagger">
                        {regions.map((region) => (
                            <div
                                key={region.name}
                                className={[
                                    'p-5 rounded-lg border transition-all duration-200',
                                    region.highlight
                                        ? 'bg-cyan/5 border-cyan/30 dark:bg-cyan/10'
                                        : 'bg-cool-gray dark:bg-navy-700 border-gray-100 dark:border-navy-600',
                                ].join(' ')}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`w-2 h-2 rounded-full ${region.highlight ? 'bg-cyan' : 'bg-gray-400 dark:bg-gray-500'}`} aria-hidden="true" />
                                    <h3 className="font-sans text-body-sm font-semibold text-navy dark:text-white">
                                        {region.name}
                                    </h3>
                                    {region.highlight && (
                                        <span className="ml-auto font-sans text-label-sm bg-cyan/10 text-cyan px-1.5 py-0.5 rounded uppercase tracking-widest">Primary</span>
                                    )}
                                </div>
                                <p
                                    className="font-sans text-label text-gray-600 dark:text-gray-400 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: region.coverage }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
