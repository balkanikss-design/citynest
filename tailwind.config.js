/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    { pattern: /^(bg|text|border|ring|from|to|via)-(page|surface|charcoal|graphite|mid-grey|steel-grey|brand|brand-secondary|accent)(-\w+)?$/ },
    { pattern: /^rounded-(btn|card)$/ },
    { pattern: /^max-w-(prose|wide)$/ },
    { pattern: /^font-(sans|display)$/ },
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#263435',
        graphite: '#111819',
        'mid-grey': '#6d7675',
        'steel-grey': '#8a9291',
        page: '#f5f6f7',
        surface: '#ffffff',
        brand: {
          DEFAULT: '#37b3e6',
          light: '#7bc7ba',
          dark: '#2a92bd',
          muted: 'rgba(55, 179, 230, 0.14)',
        },
        'brand-secondary': {
          DEFAULT: '#7bc7ba',
          light: '#9dd4ca',
          dark: '#5fb5a8',
          muted: 'rgba(123, 199, 186, 0.18)',
        },
        accent: '#f4836a',
      },
      fontFamily: {
        sans: ['Inter', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['DM Sans', 'var(--font-display)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        btn: '999px',
        card: '24px',
      },
      maxWidth: {
        prose: '65ch',
        wide: '88ch',
        '8xl': '1440px',
        '9xl': '1600px',
      },
      backgroundImage: {
        linework:
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(55, 179, 230, 0.1), transparent)',
        'hero-pattern':
          'linear-gradient(135deg, rgba(55, 179, 230, 0.08) 0%, rgba(123, 199, 186, 0.06) 45%, transparent 70%)',
      },
      boxShadow: {
        card:
          '0 18px 45px -20px rgb(16 24 40 / 0.25), 0 0 0 1px rgb(15 23 42 / 0.06)',
        'card-hover':
          '0 26px 80px -24px rgb(15 23 42 / 0.45), 0 0 0 1px rgb(55 179 230 / 0.35)',
        header: '0 1px 0 0 rgb(15 23 42 / 0.06)',
        glow: '0 0 110px -40px rgb(55 179 230 / 0.55)',
      },
    },
  },
  plugins: [],
}

