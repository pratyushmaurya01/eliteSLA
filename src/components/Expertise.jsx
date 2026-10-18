
import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * Expertise / Services section.
 * Features:
 * 1. Main Services area fits naturally in a single viewport on desktop/laptop:
 *    - min-h-[calc(100svh-4.5rem)] flex flex-col justify-center
 *    - Responsive clamp() spacing and compact vertical rhythm
 * 2. Genuinely circular infinite carousel:
 *    - Smooth continuous cycling (Fire -> Engineering -> Marine Cargo -> Misc -> LOP -> Fire...)
 *    - 3 cards on desktop (>=1024), 2 on tablet (768-1023), 1 on mobile (<768)
 *    - Circular previous & next transitions without blank spaces or jumps
 *    - Native touch swipe support, keyboard accessible controls, active position dots
 * 3. Service cards:
 *    - Numbering (01, 02, etc.) completely removed
 *    - Preserves thin-line icon, service heading, description, and scope/grouped details
 * 4. Claims Management & Reporting strip below the main carousel area.
 * 5. Section-level CTA: "Discuss a Claim" -> #contact.
 */

const services = [
    {
        id: 'fire',
        title: 'Fire',
        description:
            'Surveying and loss assessment for commercial and industrial property claims under fire policies, including catastrophe-related fire claims.',
        scopeDetails: [
            'Commercial & Industrial Property Claims',
            'Catastrophe Fire Claims',
        ],
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
            </svg>
        ),
    },
    {
        id: 'engineering',
        title: 'Engineering',
        description:
            'Engineering claim assignments include EAR/CAR policies, Contractorâ€™s Plant & Machinery Insurance, MBD/EEI policies, and Boiler & Pressure Plant Insurance.',
        scopeDetails: [
            'EAR/CAR Policies',
            'Contractorâ€™s Plant & Machinery',
            'MBD/EEI Policies',
            'Boiler & Pressure Plant Insurance',
        ],
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2"/>
            </svg>
        ),
    },
    {
        id: 'marine-cargo',
        title: 'Marine Cargo',
        description:
            'Marine Cargo is one of the firmâ€™s listed lines of non-motor insurance. The firm provides surveying, loss assessment and adjustment for marine insurance claims, as part of assignments defined by insurers.',
        scopeDetails: [
            'Marine Insurance Claims',
            'Surveying',
            'Loss Assessment & Adjustment',
        ],
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 20h20M5 20V10l7-7 7 7v10"/><path d="M9 20v-5h6v5"/>
            </svg>
        ),
    },
    {
        id: 'miscellaneous',
        title: 'Miscellaneous',
        description:
            'The firmâ€™s miscellaneous claim work includes banking and financial policies, personal-line policies, and commercial-line policies.',
        groupedDetails: [
            {
                groupTitle: 'Banking & Financial Claims',
                items: [
                    'Bankersâ€™ Indemnity, including forgery',
                    'Cash in transit',
                    'Safe deposit box',
                    'Errors and omissions',
                ],
            },
            {
                groupTitle: 'Personal & Commercial Claims',
                items: [
                    'Office umbrella',
                    'Householder',
                    'Burglary',
                    'Shopkeepers',
                ],
            },
        ],
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
        ),
    },
    {
        id: 'lop',
        title: 'Loss of Profit (LOP)',
        description:
            'Loss of Profit (LOP) is one of the firmâ€™s listed lines of non-motor insurance. The firm undertakes survey, loss assessment and adjustment assignments in this category, within the scope set by insurers.',
        scopeDetails: [
            'Loss of Profit Claims',
            'Surveying',
            'Loss Assessment & Adjustment',
        ],
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
        ),
    },
];

const totalServices = services.length;
// Tripled array for seamless infinite looping
const extendedServices = [...services, ...services, ...services];
const initialVirtualIndex = totalServices; // Start in the middle clone block

const reportingActivities = [
    {
        number: '01',
        title: 'Initial Loss Advice',
        description: 'Initial loss advice with observations and reserve recommendation within 48 hours of the claim.',
    },
    {
        number: '02',
        title: 'Loss Reserve Updates',
        description: 'Fortnightly advice on loss reserve.',
    },
    {
        number: '03',
        title: 'On-Spot LOR',
        description: 'On-spot LOR to the insured, followed by email.',
    },
    {
        number: '04',
        title: 'Written Communication',
        description: 'Weekly written communication via email or RPAD.',
    },
    {
        number: '05',
        title: 'Outstanding-Claims MIS',
        description: 'Fortnightly MIS covering outstanding claims, value bands, ageing and reasons for pendency.',
    },
];

export default function Expertise() {
    const [currentIndex, setCurrentIndex] = useState(initialVirtualIndex);
    const [visibleCount, setVisibleCount] = useState(3);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const isMovingRef = useRef(false);

    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    // Responsive visible count check
    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                setVisibleCount(3);
            } else if (width >= 768) {
                setVisibleCount(2);
            } else {
                setVisibleCount(1);
            }
        };

        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);
        return () => window.removeEventListener('resize', updateVisibleCount);
    }, []);

    // Handle smooth circular wrap-around reset
    const handleTransitionEnd = useCallback(() => {
        isMovingRef.current = false;

        // If we moved past the last item of the middle set
        if (currentIndex >= totalServices * 2) {
            setIsTransitioning(false);
            setCurrentIndex((prev) => prev - totalServices);
        } else if (currentIndex < totalServices) {
            // If we moved before the first item of the middle set
            setIsTransitioning(false);
            setCurrentIndex((prev) => prev + totalServices);
        }
    }, [currentIndex]);

    // Re-enable CSS transitions right after instantaneous jump
    useEffect(() => {
        if (!isTransitioning) {
            const rafId = requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsTransitioning(true);
                });
            });
            return () => cancelAnimationFrame(rafId);
        }
    }, [isTransitioning]);

    const handlePrev = useCallback(() => {
        if (isMovingRef.current) return;
        isMovingRef.current = true;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    }, []);

    const handleNext = useCallback(() => {
        if (isMovingRef.current) return;
        isMovingRef.current = true;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    }, []);

    const handleDotClick = (targetIndex) => {
        if (isMovingRef.current) return;
        isMovingRef.current = true;
        setIsTransitioning(true);
        // Jump to target in the middle clone block
        setCurrentIndex(totalServices + targetIndex);
    };

    // Touch swipe handling
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        touchEndX.current = null;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const diffX = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 45;

        if (diffX > minSwipeDistance) {
            handleNext();
        } else if (diffX < -minSwipeDistance) {
            handlePrev();
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    // Calculate normalized active dot index (0 to 4)
    const activeDotIndex = ((currentIndex % totalServices) + totalServices) % totalServices;

    return (
        <section
            id="expertise"
            className="relative pt-7 md:pt-9 pb-20 md:pb-28 bg-bg-services text-text-primary border-b border-border-subtle overflow-hidden"
            style={{
                backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
                backgroundSize: '22px 22px',
            }}
            aria-labelledby="expertise-heading"
        >
            <div className="relative z-10 max-w-site mx-auto px-6 md:px-10">

                {/* 1. Header (Two-Column on Desktop) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-8 md:mb-10 reveal">
                    {/* Left: Eyebrow & Heading */}
                    <div className="lg:col-span-5 flex flex-col justify-start">
                        <div className="flex items-center gap-2.5 mb-4">
                            <span className="w-5 h-[2px] bg-accent rounded-full" aria-hidden="true" />
                            <span className="font-sans text-label uppercase tracking-[0.18em] text-accent font-semibold">
                                INSURANCE CLAIM SERVICES
                            </span>
                        </div>
                        <h2
                            id="expertise-heading"
                            className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18]"
                        >
                            Our Expertise &amp; Services
                        </h2>
                    </div>

                    {/* Right: Introduction Paragraph */}
                    <div className="lg:col-span-7 lg:pl-10 lg:border-l border-border-subtle flex items-center h-full">
                        <p className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl">
                            Elite SLA provides surveying, loss assessment and adjustment services across five lines of non-motor insurance:{' '}
                            <span className="text-white font-semibold">Fire</span>,{' '}
                            <span className="text-white font-semibold">Engineering</span>,{' '}
                            <span className="text-white font-semibold">Marine Cargo</span>,{' '}
                            <span className="text-white font-semibold">Miscellaneous</span> and{' '}
                            <span className="text-white font-semibold">Loss of Profit (LOP)</span>.{' '}
                            The scope of services may be modified to meet insurersâ€™ requirements.
                        </p>
                    </div>
                </div>

                {/* 2. Genuine Infinite Circular Carousel */}
                <div className="reveal w-full">
                        {/* Carousel Viewport Container */}
                        <div
                            className="overflow-hidden w-full -mx-2.5 sm:-mx-3"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div
                                className="flex"
                                style={{
                                    transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                                    transition: isTransitioning ? 'transform 450ms cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
                                }}
                                onTransitionEnd={handleTransitionEnd}
                            >
                                {extendedServices.map((service, index) => (
                                    <div
                                        key={`${service.id}-${index}`}
                                        className="shrink-0 px-2.5 sm:px-3"
                                        style={{
                                            width: `${100 / visibleCount}%`,
                                        }}
                                    >
                                        <ServiceCard service={service} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Carousel Controls: Subtle Indicators + Circular Arrows */}
                        <div className="mt-5 flex items-center justify-between gap-4 pt-1">
                            {/* Position Dots */}
                            <div className="flex items-center gap-2" role="tablist" aria-label="Service carousel slides">
                                {services.map((service, idx) => (
                                    <button
                                        key={service.id}
                                        onClick={() => handleDotClick(idx)}
                                        role="tab"
                                        aria-selected={activeDotIndex === idx}
                                        aria-label={`Go to ${service.title}`}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${
                                            activeDotIndex === idx
                                                ? 'w-7 bg-accent'
                                                : 'w-2 bg-border-subtle hover:bg-[#595A5C]'
                                        }`}
                                    />
                                ))}
                            </div>

                            {/* Arrow Navigation */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handlePrev}
                                    aria-label="Previous service"
                                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-border-subtle text-white hover:border-accent hover:bg-bg-card active:scale-95 transition-all duration-150"
                                >
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <polyline points="15 18 9 12 15 6"/>
                                    </svg>
                                </button>
                                <button
                                    onClick={handleNext}
                                    aria-label="Next service"
                                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-border-subtle text-white hover:border-accent hover:bg-bg-card active:scale-95 transition-all duration-150"
                                >
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <polyline points="9 18 15 12 9 6"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ── 3. CLAIMS MANAGEMENT & REPORTING — Editorial Split Layout ── */}
                    <div className="mt-16 md:mt-20 pt-10 md:pt-14 border-t border-border-subtle reveal">

                        {/* H2 — Section identity */}
                        <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-[1.18] mb-10 md:mb-12">
                            Claims Management &amp; Reporting
                        </h2>

                        {/* Two-column editorial split */}
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-0">

                            {/* LEFT COLUMN — ~40% */}
                            <div className="lg:col-span-2 lg:pr-10 lg:border-r border-border-subtle flex flex-col justify-between py-1">
                                <div className="flex flex-col gap-5 sm:gap-6">
                                    {/* H3 */}
                                    <h3 className="font-display text-lg sm:text-xl font-semibold text-white tracking-tight leading-snug">
                                        Structured Reporting &amp; Follow-up
                                    </h3>

                                    {/* Introduction */}
                                    <p className="font-sans text-sm sm:text-[15px] text-text-secondary leading-relaxed">
                                        The firm&apos;s claims-management services include initial loss advice, reserve updates,
                                        communication with the insured, and regular reporting on outstanding claims. These
                                        activities support proactive follow-up and structured claim management.
                                    </p>
                                </div>

                                {/* CTA aligned naturally toward the bottom */}
                                <div className="mt-8 lg:mt-0 pt-2">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-2.5 px-6 py-3 bg-transparent hover:bg-bg-card text-white border border-border-subtle hover:border-accent font-sans text-sm font-semibold rounded-md transition-colors duration-200"
                                    >
                                        <span>Discuss a Claim</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <polyline points="9 18 15 12 9 6"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* RIGHT COLUMN — ~60% */}
                            <div className="lg:col-span-3 lg:pl-10">
                                <div className="flex flex-col gap-5 sm:gap-6 py-1">
                                    {reportingActivities.map((act) => (
                                        <div key={act.number} className="flex items-start gap-4">
                                            {/* Unified subtle dot from white/gray palette */}
                                            <span
                                                className="mt-[6px] shrink-0 w-2 h-2 rounded-full bg-text-muted/70 border border-text-secondary/30"
                                                aria-hidden="true"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <div className="mb-1">
                                                    <h4 className="font-sans text-sm sm:text-[15px] font-semibold text-white">
                                                        {act.title}
                                                    </h4>
                                                </div>
                                                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                                                    {act.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
}

function ServiceCard({ service }) {
    const { title, description, scopeDetails, groupedDetails, icon } = service;

    return (
        <div className="h-full flex flex-col justify-between p-5 sm:p-6 rounded-lg bg-bg-card border border-border-subtle transition-all duration-200">
            <div>
                {/* Header: Service icon & title (Number removed) */}
                <div className="flex items-center justify-between mb-3.5">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                        {title}
                    </h3>
                    <span className="text-text-muted shrink-0 p-1.5 rounded bg-bg-services/80 border border-border-subtle">
                        {icon}
                    </span>
                </div>

                {/* Subtle divider */}
                <div className="w-full h-px bg-border-subtle mb-3.5" />

                {/* Description */}
                <p className="font-sans text-sm sm:text-[15px] text-text-secondary leading-relaxed mb-4">
                    {description}
                </p>
            </div>

            {/* Scope Details (for Fire, Engineering, Marine Cargo, LOP) */}
            {scopeDetails && scopeDetails.length > 0 && (
                <div className="pt-3 border-t border-border-subtle">
                    <div className="font-sans text-xs uppercase tracking-wider text-text-muted font-semibold mb-1.5">
                        Scope Details
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {scopeDetails.map((item) => (
                            <span
                                key={item}
                                className="px-2 py-0.5 text-xs font-sans text-text-muted rounded border border-border-subtle bg-transparent"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Grouped Details (for Miscellaneous) */}
            {groupedDetails && (
                <div className="pt-3 border-t border-border-subtle space-y-2.5">
                    {groupedDetails.map((group) => (
                        <div key={group.groupTitle}>
                            <div className="font-sans text-xs uppercase tracking-wider text-accent font-semibold mb-1">
                                {group.groupTitle}
                            </div>
                            <div className="flex flex-wrap gap-1">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-1.5 py-0.5 text-xs font-sans text-text-muted rounded border border-border-subtle bg-transparent"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
