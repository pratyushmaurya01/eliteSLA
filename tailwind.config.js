/** @type {import('tailwindcss').Config} */

// ─────────────────────────────────────────────────────────────────
//  ELITE SLA — GLOBAL DESIGN TOKENS
//  Consumes CSS variables from src/index.css for seamless theming
// ─────────────────────────────────────────────────────────────────

const tokens = {
    colors: {
        'bg-primary':     'var(--bg-primary)',
        'bg-secondary':   'var(--bg-secondary)',
        'bg-card':        'var(--bg-card)',
        'bg-elevated':    'var(--bg-elevated)',
        'bg-services':    'var(--bg-services)',

        'text-primary':   'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted':     'var(--text-muted)',

        'border-subtle':  'var(--border-subtle)',
        'border-strong':  'var(--border-strong)',

        accent:           'var(--accent-primary)',
        'accent-hover':   'var(--accent-hover)',
        'accent-subtle':  'var(--accent-subtle)',
        'accent-contrast':'var(--accent-contrast)',

        'accent-violet':  'var(--accent-violet)',
        'accent-rust':    'var(--accent-rust)',
        'accent-sage':    'var(--accent-sage)',
        'accent-ochre':   'var(--accent-ochre)',

        // Backwards compatibility mappings for existing utility classes
        navy:             'var(--bg-primary)',
        'navy-800':       'var(--bg-secondary)',
        'navy-700':       'var(--bg-card)',
        'navy-600':       'var(--border-subtle)',

        white:            'var(--text-primary)',
        'cool-gray':      'var(--bg-secondary)',

        cyan:             'var(--accent-primary)',
        'cyan-dark':      'var(--accent-hover)',
        'cyan-light':     'var(--accent-subtle)',

        'gray-100':       'var(--bg-secondary)',
        'gray-200':       'var(--border-subtle)',
        'gray-400':       'var(--text-secondary)',
        'gray-500':       'var(--text-muted)',
        'gray-600':       'var(--text-secondary)',
        'gray-800':       'var(--text-primary)',
    },

    fonts: {
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'sans-serif'],
    },

    fontSize: {
        'display-xl': ['3.5rem',   { lineHeight: '1.1',  fontWeight: '800', letterSpacing: '-0.03em' }],
        'display-lg': ['2.75rem',  { lineHeight: '1.12', fontWeight: '700', letterSpacing: '-0.025em' }],
        'display-md': ['2rem',     { lineHeight: '1.2',  fontWeight: '700', letterSpacing: '-0.02em' }],
        'heading-lg': ['1.5rem',   { lineHeight: '1.3',  fontWeight: '600', letterSpacing: '-0.015em' }],
        'heading-md': ['1.25rem',  { lineHeight: '1.4',  fontWeight: '600', letterSpacing: '-0.01em' }],
        'heading-sm': ['1.125rem', { lineHeight: '1.5',  fontWeight: '600', letterSpacing: '0em' }],
        'body-lg':    ['1.125rem', { lineHeight: '1.7',  fontWeight: '400', letterSpacing: '0em' }],
        'body-md':    ['1rem',     { lineHeight: '1.6',  fontWeight: '400', letterSpacing: '0em' }],
        'body-sm':    ['0.875rem', { lineHeight: '1.6',  fontWeight: '400', letterSpacing: '0em' }],
        'label':      ['0.75rem',  { lineHeight: '1.4',  fontWeight: '600', letterSpacing: '0.08em' }],
        'label-sm':   ['0.6875rem',{ lineHeight: '1.4',  fontWeight: '600', letterSpacing: '0.1em' }],
    },

    borderRadius: {
        sm:   '0.125rem',
        DEFAULT:'0.25rem',
        md:   '0.375rem',
        lg:   '0.5rem',
        xl:   '0.75rem',
        full: '9999px',
    },

    boxShadow: {
        sm:   '0 1px 3px rgba(0,0,0,0.3)',
        DEFAULT:'0 4px 14px rgba(0,0,0,0.4)',
        md:   '0 8px 24px rgba(0,0,0,0.5)',
        lg:   '0 16px 40px rgba(0,0,0,0.6)',
    },

    transition: {
        fast:   '150ms ease',
        base:   '250ms ease',
        slow:   '400ms ease',
    },
};

export default {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                ...tokens.colors,
                brand: {
                    DEFAULT: 'var(--accent-primary)',
                    dark:    'var(--accent-hover)',
                    light:   'var(--accent-subtle)',
                },
            },
            fontFamily: tokens.fonts,
            fontSize: tokens.fontSize,
            borderRadius: tokens.borderRadius,
            boxShadow: tokens.boxShadow,
            maxWidth: {
                site: '1400px',
            },
            keyframes: {
                'fade-up': {
                    '0%':   { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-in': {
                    '0%':   { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'line-grow': {
                    '0%':   { width: '0', opacity: '0' },
                    '100%': { width: '100%', opacity: '1' },
                },
                'pulse-dot': {
                    '0%, 100%': { opacity: '1' },
                    '50%':      { opacity: '0.35' },
                },
            },
            animation: {
                'fade-up':    'fade-up 0.5s ease forwards',
                'fade-in':    'fade-in 0.4s ease forwards',
                'line-grow':  'line-grow 0.6s ease forwards',
                'pulse-dot':  'pulse-dot 2s ease infinite',
            },
        },
    },
    plugins: [],
};
