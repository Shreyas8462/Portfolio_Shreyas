/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        matte: '#0B0F19',
        card: '#101827',
        neon: '#38bdf8',
        accent: '#a855f7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(56, 189, 248, 0.25)',
        accentGlow: '0 0 25px rgba(168, 85, 247, 0.2)',
      },
      backgroundImage: {
        'cyber-grid':
          'linear-gradient(to right, rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

