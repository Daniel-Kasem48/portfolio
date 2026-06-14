/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#586DAC",
        // Aurora accent ramp
        aurora: {
          cyan: "#22d3ee",
          blue: "#3b82f6",
          violet: "#8b5cf6",
          fuchsia: "#d946ef",
        },
        // Deep neutral surface ramp for the dark glass theme
        ink: {
          950: "#05060a",
          900: "#0a0c12",
          850: "#0e1118",
          800: "#141824",
          700: "#1c2130",
          600: "#2a3040",
        },
      },
      fontFamily: {
        sans: ['Raleway', 'system-ui', 'sans-serif'],
        firamono: ['Fira Mono', 'monospace'],
      },
      fontSize: {
        // fluid display sizes
        'display': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'headline': ['clamp(1.75rem, 4vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
      },
      backgroundImage: {
        'aurora-text': 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 40%, #8b5cf6 70%, #d946ef 100%)',
        'aurora-line': 'linear-gradient(90deg, transparent, #22d3ee, #8b5cf6, transparent)',
        'grid-faint': 'linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0,0,0,0.45), inset 0 1px 0 0 rgba(255,255,255,0.05)',
        'glow-cyan': '0 0 24px -4px rgba(34,211,238,0.45)',
        'glow-violet': '0 0 24px -4px rgba(139,92,246,0.45)',
      },
      keyframes: {
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'aurora-drift': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(4%, -4%, 0) scale(1.12)' },
        },
        'aurora-drift-2': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1.05)' },
          '50%': { transform: 'translate3d(-5%, 5%, 0) scale(1)' },
        },
        'grid-move': {
          '0%': { transform: 'translate(0,0)' },
          '100%': { transform: 'translate(56px,56px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out both',
        'fade-in-up': 'fade-in-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'aurora-drift': 'aurora-drift 18s ease-in-out infinite',
        'aurora-drift-2': 'aurora-drift-2 24s ease-in-out infinite',
        'grid-move': 'grid-move 22s linear infinite',
        'shimmer': 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
