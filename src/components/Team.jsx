/**
 * Team Preview — SN Maurya and Amit Sehgal with accurate experience figures.
 * No invented photos, titles beyond what's in the profile, or fake testimonials.
 */
const members = [
    {
        initials: 'SNM',
        name: 'SN Maurya',
        role: 'Partner',
        experience: '20+',
        experienceLabel: 'Years Experience',
        description:
            'With over two decades of professional experience in insurance surveying and loss assessment, SN Maurya brings deep technical expertise and leadership to Elite SLA. His experience spans complex multi-line claims across diverse industrial and commercial sectors.',
    },
    {
        initials: 'AS',
        name: 'Amit Sehgal',
        role: 'Partner',
        experience: '5+',
        experienceLabel: 'Years Experience',
        description:
            'Amit Sehgal contributes over 5 years of professional expertise in insurance loss assessment. His focused approach and technical proficiency complement the firm\'s commitment to accurate, timely, and objective claim evaluation.',
    },
];

export default function Team() {
    return (
        <section
            id="team"
            className="py-20 md:py-28 bg-bg-secondary text-text-primary"
            aria-labelledby="team-heading"
        >
            <div className="max-w-site mx-auto px-6 md:px-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-6 h-[2px] bg-accent rounded" aria-hidden="true" />
                            <span className="font-sans text-label uppercase tracking-[0.15em] text-text-primary font-semibold">Our Team</span>
                        </div>
                        <h2
                            id="team-heading"
                            className="font-display text-display-md text-text-primary tracking-tight"
                        >
                            Partnership Leadership
                        </h2>
                    </div>
                    {/* Future team page placeholder */}
                    <span
                        className="inline-flex items-center gap-2 px-4 py-2 border border-border-subtle text-text-secondary font-sans text-body-sm rounded cursor-not-allowed opacity-60"
                        aria-label="Full team page coming soon"
                        title="Full team page coming soon"
                    >
                        View Full Team
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                        <span className="font-sans text-label-sm bg-bg-card text-text-primary px-1.5 py-0.5 rounded border border-border-subtle">Soon</span>
                    </span>
                </div>

                {/* Team cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-stagger">
                    {members.map((member) => (
                        <div
                            key={member.name}
                            className="bg-bg-card border border-border-subtle rounded-lg p-8 flex flex-col gap-6 hover:border-border-strong hover:shadow-md transition-all duration-250"
                        >
                            <div className="flex items-start gap-5">
                                {/* Avatar initials */}
                                <div className="w-16 h-16 rounded-full bg-bg-secondary border-2 border-border-strong flex items-center justify-center shrink-0">
                                    <span className="font-display text-heading-sm font-bold text-text-primary">
                                        {member.initials}
                                    </span>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="font-display text-heading-md font-bold text-text-primary">
                                        {member.name}
                                    </h3>
                                    <div className="font-sans text-body-sm text-text-secondary font-medium mt-0.5">
                                        {member.role}
                                    </div>
                                </div>

                                {/* Experience stat */}
                                <div className="text-right shrink-0">
                                    <div className="font-display text-display-md font-extrabold text-text-primary leading-none">
                                        {member.experience}
                                    </div>
                                    <div className="font-sans text-label text-text-secondary mt-0.5 max-w-[90px] leading-tight text-right">
                                        {member.experienceLabel}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-border-subtle" aria-hidden="true" />

                            <p className="font-sans text-body-md text-text-secondary leading-relaxed">
                                {member.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
