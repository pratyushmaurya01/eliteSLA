import { useState, useEffect } from 'react';

/**
 * IntroAnimation — Midnight-navy splash screen shown once per session.
 * Shows Elite SLA wordmark + cyan line + tagline, then fades out.
 * Skipped on subsequent navigations via sessionStorage.
 */
export default function IntroAnimation({ onComplete }) {
    const [phase, setPhase] = useState('enter'); // enter | exit

    useEffect(() => {
        // Show for ~900ms then start exit
        const exitTimer = setTimeout(() => setPhase('exit'), 900);
        // Unmount after exit transition
        const doneTimer = setTimeout(() => onComplete(), 1400);
        return () => { clearTimeout(exitTimer); clearTimeout(doneTimer); };
    }, [onComplete]);

    return (
        <div
            aria-hidden="true"
            className={[
                'fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy',
                'transition-opacity duration-500',
                phase === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100',
            ].join(' ')}
        >
            {/* Wordmark */}
            <div className="flex flex-col items-center gap-3">
                <span
                    className={[
                        'font-display text-white text-display-lg tracking-[-0.04em] font-extrabold',
                        'transition-all duration-500',
                        phase === 'enter' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2',
                    ].join(' ')}
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                    ELITE<span className="text-cyan">SLA</span>
                </span>

                {/* Cyan accent line — grows left to right */}
                <span
                    className={[
                        'block h-[2px] bg-cyan rounded-full',
                        'transition-all duration-700 delay-200',
                        phase === 'enter' ? 'w-32 opacity-100' : 'w-0 opacity-0',
                    ].join(' ')}
                />

                {/* Tagline */}
                <span
                    className={[
                        'font-sans text-label uppercase tracking-[0.2em] text-cyan/70',
                        'transition-all duration-500 delay-300',
                        phase === 'enter' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1',
                    ].join(' ')}
                >
                    Trust &amp; Accuracy
                </span>
            </div>
        </div>
    );
}
