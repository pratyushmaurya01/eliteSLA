/**
 * Experience section — catastrophe event timeline.
 * Events sourced from company profile. No invented data.
 */
const events = [
    {
        year: '2013',
        title: 'Uttarakhand Flash Floods',
        description:
            'Assessment of catastrophic losses arising from the Uttarakhand flood disaster — one of India\'s most devastating natural calamities affecting infrastructure and businesses across the region.',
    },
    {
        year: '2014',
        title: 'Jammu &amp; Kashmir Floods',
        description:
            'Comprehensive survey and loss assessment following the J&K floods, which caused widespread damage to commercial and residential properties across the valley.',
    },
    {
        year: '2015',
        title: 'Chennai Floods',
        description:
            'Survey of industrial, commercial, and domestic losses resulting from the severe Chennai floods, coordinating with insurers for swift and accurate claim processing.',
    },
    {
        year: '2018',
        title: 'Kerala Floods',
        description:
            'Large-scale loss assessment during the Kerala floods — one of the worst flooding events in a century. Coordinated multi-location survey operations across affected districts.',
    },
    {
        year: '2019',
        title: 'Odisha Cyclone Fani',
        description:
            'Assessment of wind and storm damage caused by Cyclone Fani, including industrial plant, marine cargo, engineering, and property claims across coastal Odisha.',
    },
    {
        year: '2021',
        title: 'COVID-19 Business Interruption',
        description:
            'Expert evaluation of business interruption and loss of profit claims arising from pandemic-related shutdowns and operational disruptions across multiple sectors.',
    },
    {
        year: '2023',
        title: 'Punjab &amp; Himachal Floods',
        description:
            'Assessment of flash flood damage across Punjab and Himachal Pradesh, covering agricultural, commercial, and infrastructure losses with rapid deployment of surveyors.',
    },
];

export default function ExperienceTimeline() {
    return (
        <section
            id="experience"
            className="py-20 md:py-28 bg-white dark:bg-navy"
            aria-labelledby="experience-heading"
        >
            <div className="max-w-site mx-auto px-6 md:px-10">
                {/* Header */}
                <div className="max-w-2xl mb-14 reveal">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-6 h-[2px] bg-cyan rounded" aria-hidden="true" />
                        <span className="font-sans text-label uppercase tracking-[0.15em] text-cyan">Field Experience</span>
                    </div>
                    <h2
                        id="experience-heading"
                        className="font-display text-display-md text-navy dark:text-white tracking-tight mb-4"
                    >
                        Catastrophe Event Experience
                    </h2>
                    <p className="font-sans text-body-lg text-gray-600 dark:text-gray-400">
                        From major natural disasters to large-scale industrial losses — Elite SLA has
                        a proven track record of on-ground assessment in India's most challenging
                        claim environments.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative reveal">
                    {/* Vertical line */}
                    <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-gray-100 dark:bg-navy-600 md:-translate-x-px" aria-hidden="true" />

                    <ol className="relative space-y-0" aria-label="Catastrophe events timeline">
                        {events.map((event, i) => {
                            const isRight = i % 2 === 0;
                            return (
                                <li
                                    key={event.year}
                                    className={`relative flex md:justify-${isRight ? 'end' : 'start'} pl-10 md:pl-0`}
                                >
                                    {/* Dot */}
                                    <div
                                        className="absolute left-[13px] md:left-1/2 top-5 w-2.5 h-2.5 rounded-full bg-cyan border-2 border-white dark:border-navy z-10 md:-translate-x-[5px]"
                                        aria-hidden="true"
                                    />

                                    {/* Card */}
                                    <div
                                        className={[
                                            'w-full md:w-[46%] pb-8',
                                            isRight ? 'md:pr-8' : 'md:pl-8',
                                        ].join(' ')}
                                    >
                                        <div className="bg-cool-gray dark:bg-navy-700 border border-gray-100 dark:border-navy-600 rounded-lg p-5 hover:border-cyan/30 transition-colors duration-200">
                                            <time
                                                dateTime={event.year}
                                                className="font-display text-heading-lg font-bold text-cyan"
                                            >
                                                {event.year}
                                            </time>
                                            <h3
                                                className="font-sans text-body-md font-semibold text-navy dark:text-white mt-1 mb-2"
                                                dangerouslySetInnerHTML={{ __html: event.title }}
                                            />
                                            <p className="font-sans text-body-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </section>
    );
}
