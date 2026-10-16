/**
 * CredibilityStrip — compact bar showing license, lines of business,
 * and key experience figures. Source: company profile.
 */
const lines = [
    'Fire &amp; Allied Perils',
    'Engineering',
    'Marine Cargo',
    'Miscellaneous',
    'Loss of Profit (LOP)',
];

const stats = [
    { value: '20+', label: 'Years Experience (SN Maurya)' },
    { value: '5+',  label: 'Years Experience (Amit Sehgal)' },
    { value: '5',   label: 'Lines of Business' },
];

export default function CredibilityStrip() {
    return (
        <section
            id="credibility"
            className="bg-navy-800 border-y border-navy-600 py-6"
            aria-label="Credentials and license"
        >
            <div className="max-w-site mx-auto px-6 md:px-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">

                    {/* License */}
                    <div className="flex items-center gap-3 shrink-0">
                        <div className="w-8 h-8 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            </svg>
                        </div>
                        <div>
                            <div className="font-sans text-label-sm uppercase tracking-widest text-gray-400">IRDAI License</div>
                            <div className="font-sans text-body-sm font-semibold text-white">IRDA/CORP/SLA-200067</div>
                        </div>
                    </div>

                    <div className="hidden lg:block w-px h-10 bg-navy-600" aria-hidden="true" />

                    {/* Lines of business */}
                    <div className="flex-1">
                        <div className="font-sans text-label-sm uppercase tracking-widest text-gray-400 mb-2">Lines of Business</div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                            {lines.map((line) => (
                                <span
                                    key={line}
                                    className="font-sans text-body-sm text-gray-300 flex items-center gap-1.5"
                                    dangerouslySetInnerHTML={{ __html: `<span aria-hidden="true" style="color:var(--color-cyan,#FFFFFF);font-size:10px">●</span> ${line}` }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:block w-px h-10 bg-navy-600" aria-hidden="true" />

                    {/* Stats */}
                    <div className="flex gap-8">
                        {stats.map((s) => (
                            <div key={s.label} className="text-center">
                                <div className="font-display text-heading-lg font-bold text-cyan leading-none">{s.value}</div>
                                <div className="font-sans text-label-sm text-gray-400 mt-0.5 leading-snug max-w-[100px]">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
