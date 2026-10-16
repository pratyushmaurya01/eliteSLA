/**
 * Footer — brand, license, registered office, navigation, copyright.
 * No invented contact numbers or fake credentials.
 */
const footerNav = [
    {
        title: 'Company',
        links: [
            { label: 'About Elite SLA', href: '#about' },
            { label: 'Partnership Leadership', href: '#team' },
            { label: 'Our Approach', href: '#approach' },
            { label: 'Presence', href: '#presence' },
        ],
    },
    {
        title: 'Services',
        links: [
            { label: 'Fire &amp; Allied Perils', href: '#expertise' },
            { label: 'Engineering', href: '#expertise' },
            { label: 'Marine Cargo', href: '#expertise' },
            { label: 'Miscellaneous', href: '#expertise' },
            { label: 'Loss of Profit (LOP)', href: '#expertise' },
        ],
    },
    {
        title: 'Contact',
        links: [
            { label: 'Send an Enquiry', href: '#contact' },
            { label: 'info@elitesla.in', href: 'mailto:info@elitesla.in' },
        ],
    },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-navy border-t border-navy-600" aria-label="Site footer">
            <div className="max-w-site mx-auto px-6 md:px-10 pt-14 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-10 border-b border-navy-600">

                    {/* ── Brand column ── */}
                    <div className="lg:col-span-2 space-y-5">
                        {/* Wordmark */}
                        <a href="#" className="inline-flex flex-col leading-none group" aria-label="Elite SLA — Home">
                            <span className="font-display text-heading-lg font-extrabold text-white tracking-tight group-hover:text-cyan transition-colors">
                                ELITE<span className="text-cyan">SLA</span>
                            </span>
                            <span className="font-sans text-label-sm uppercase tracking-[0.15em] text-gray-400 mt-1">
                                Insurance Surveyors &amp; Loss Assessors
                            </span>
                        </a>

                        <p className="font-sans text-body-sm text-gray-400 leading-relaxed max-w-xs">
                            IRDAI-licensed independent surveying firm delivering accurate,
                            unbiased, and timely insurance claim assessments across India.
                        </p>

                        {/* License badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-2 border border-navy-600 rounded bg-navy-700">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            </svg>
                            <span className="font-sans text-label-sm text-gray-400 uppercase tracking-widest">
                                IRDAI Reg: IRDA/CORP/SLA-200067
                            </span>
                        </div>

                        {/* Registered office */}
                        <div className="font-sans text-label text-gray-500 leading-relaxed">
                            Registered Office: New Delhi, India
                        </div>
                    </div>

                    {/* ── Nav columns ── */}
                    {footerNav.map((col) => (
                        <div key={col.title}>
                            <h3 className="font-sans text-label uppercase tracking-[0.12em] font-semibold text-white mb-4">
                                {col.title}
                            </h3>
                            <ul className="space-y-2.5">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="font-sans text-body-sm text-gray-400 hover:text-cyan transition-colors duration-150"
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ── Bottom bar ── */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
                    <span className="font-sans text-label text-gray-500">
                        © {year} Elite Insurance Surveyors &amp; Loss Assessors. All rights reserved.
                    </span>
                    <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-dot" aria-hidden="true" />
                        <span className="font-sans text-label-sm uppercase tracking-widest text-gray-500">
                            Trust &amp; Accuracy
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
