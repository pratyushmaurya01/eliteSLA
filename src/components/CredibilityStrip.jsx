/**
 * CredibilityStrip — compact bar showing registration reference,
 * the five lines of business, and catastrophe claim experience statement.
 */
const lines = [
    'Fire',
    'Engineering',
    'Marine Cargo',
    'Miscellaneous',
    'Loss of Profit (LOP)',
];

export default function CredibilityStrip() {
    return (
        <section
            id="credibility"
            className="bg-navy-800 border-y border-navy-600 py-6"
            aria-label="Credentials and verified details"
        >
            <div className="max-w-site mx-auto px-6 md:px-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">

                    {/* Registration Reference */}
                    <div className="flex items-center gap-3 shrink-0">
                        <div className="w-8 h-8 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center text-text-primary">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            </svg>
                        </div>
                        <div>
                            <div className="font-sans text-label-sm uppercase tracking-widest text-gray-400">Registration Reference</div>
                            <div className="font-sans text-body-sm font-semibold text-white">IRDA/CORP/SLA-200067</div>
                        </div>
                    </div>

                    <div className="hidden lg:block w-px h-10 bg-navy-600" aria-hidden="true" />

                    {/* Five Lines of Business */}
                    <div className="flex-1">
                        <div className="font-sans text-label-sm uppercase tracking-widest text-gray-400 mb-2">Lines of Business</div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                            {lines.map((line) => (
                                <span
                                    key={line}
                                    className="font-sans text-body-sm text-gray-300 flex items-center gap-1.5"
                                >
                                    <span aria-hidden="true" className="text-white text-[10px]">●</span>
                                    {line}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:block w-px h-10 bg-navy-600" aria-hidden="true" />

                    {/* Experience Indicator */}
                    <div className="flex items-center gap-3 shrink-0">
                        <div className="w-8 h-8 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center text-text-primary">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"/>
                                <polyline points="12 6 12 12 16 14"/>
                            </svg>
                        </div>
                        <div>
                            <div className="font-sans text-label-sm uppercase tracking-widest text-gray-400">Track Record</div>
                            <div className="font-sans text-body-sm font-semibold text-white">Catastrophe Claim Experience Since 2013</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
