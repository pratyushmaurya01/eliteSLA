import { useState } from 'react';

/**
 * Contact section — enquiry form UI.
 * Frontend demonstration only — clearly labelled.
 * No backend/email service is connected.
 */
export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Frontend demo — no actual submission
        setSubmitted(true);
    };

    return (
        <section
            id="contact"
            className="py-20 md:py-28 bg-cool-gray dark:bg-navy-800"
            aria-labelledby="contact-heading"
        >
            <div className="max-w-site mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* ── Left: Info ── */}
                    <div className="reveal">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-6 h-[2px] bg-cyan rounded" aria-hidden="true" />
                            <span className="font-sans text-label uppercase tracking-[0.15em] text-cyan">Get in Touch</span>
                        </div>
                        <h2
                            id="contact-heading"
                            className="font-display text-display-md text-navy dark:text-white tracking-tight mb-6"
                        >
                            Discuss Your Requirement
                        </h2>
                        <p className="font-sans text-body-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                            Whether you need an urgent loss assessment, want to discuss a complex claim,
                            or simply want to understand how Elite SLA can support your needs —
                            we're here to help.
                        </p>

                        {/* Contact details — only what's in the profile */}
                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="w-9 h-9 rounded bg-cyan/10 border border-cyan/20 flex items-center justify-center shrink-0 text-cyan mt-0.5">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-sans text-label uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-0.5">Registered Office</div>
                                    <div className="font-sans text-body-md text-navy dark:text-white">
                                        Elite Insurance Surveyors &amp; Loss Assessors<br />
                                        New Delhi, India
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-9 h-9 rounded bg-cyan/10 border border-cyan/20 flex items-center justify-center shrink-0 text-cyan mt-0.5">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,4 12,13 2,4"/>
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-sans text-label uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-0.5">Email</div>
                                    <a
                                        href="mailto:info@elitesla.in"
                                        className="font-sans text-body-md text-cyan hover:text-cyan-dark transition-colors"
                                    >
                                        info@elitesla.in
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-9 h-9 rounded bg-cyan/10 border border-cyan/20 flex items-center justify-center shrink-0 text-cyan mt-0.5">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-sans text-label uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-0.5">IRDAI License</div>
                                    <div className="font-sans text-body-md text-navy dark:text-white">IRDA/CORP/SLA-200067</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Right: Form ── */}
                    <div className="reveal" style={{ transitionDelay: '120ms' }}>
                        {/* Demo notice */}
                        <div className="flex items-start gap-2 p-3 bg-cyan/5 border border-cyan/20 rounded mb-6 text-gray-600 dark:text-gray-400">
                            <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                            </svg>
                            <p className="font-sans text-label leading-relaxed">
                                <strong className="text-navy dark:text-white">Frontend demonstration.</strong>{' '}
                                This form is not yet connected to a backend or email service.
                                Submissions are simulated locally for design preview purposes only.
                            </p>
                        </div>

                        {submitted ? (
                            <div className="bg-white dark:bg-navy-700 border border-gray-100 dark:border-navy-600 rounded-lg p-10 text-center">
                                <div className="w-14 h-14 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center mx-auto mb-4">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                </div>
                                <h3 className="font-display text-heading-lg text-navy dark:text-white font-semibold mb-2">
                                    Enquiry Received (Demo)
                                </h3>
                                <p className="font-sans text-body-md text-gray-600 dark:text-gray-400 mb-6">
                                    In a live version, your message would be sent to our team.
                                    We typically respond within one business day.
                                </p>
                                <button
                                    onClick={() => { setSubmitted(false); setForm({ name:'', email:'', company:'', subject:'', message:'' }); }}
                                    className="font-sans text-body-sm text-cyan hover:text-cyan-dark transition-colors underline underline-offset-2"
                                >
                                    Send another (reset)
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="bg-white dark:bg-navy-700 border border-gray-100 dark:border-navy-600 rounded-lg p-6 md:p-8 space-y-5"
                                noValidate
                                aria-label="Enquiry form"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <FormField label="Full Name" id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" />
                                    <FormField label="Email Address" id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" />
                                </div>
                                <FormField label="Company / Organisation" id="company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Optional" />
                                <FormField label="Subject" id="subject" name="subject" type="text" required value={form.subject} onChange={handleChange} placeholder="e.g. Fire claim assessment — Delhi" />
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="message" className="font-sans text-label font-semibold text-navy dark:text-white">
                                        Message <span className="text-cyan" aria-hidden="true">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Briefly describe your requirement..."
                                        className="w-full px-4 py-3 bg-cool-gray dark:bg-navy-800 border border-gray-200 dark:border-navy-600 rounded font-sans text-body-sm text-navy dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none transition-colors focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/40"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3.5 bg-cyan hover:bg-cyan-dark text-white font-sans text-body-md font-semibold rounded transition-colors duration-150 shadow-sm"
                                >
                                    Send Enquiry
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FormField({ label, id, name, type, required, value, onChange, placeholder }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="font-sans text-label font-semibold text-navy dark:text-white">
                {label}
                {required && <span className="text-cyan ml-0.5" aria-hidden="true">*</span>}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                required={required}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-4 py-3 bg-cool-gray dark:bg-navy-800 border border-gray-200 dark:border-navy-600 rounded font-sans text-body-sm text-navy dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 transition-colors focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/40"
            />
        </div>
    );
}
