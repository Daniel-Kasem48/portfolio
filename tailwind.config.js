/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "navy-blue": "#586DAC", // Your navy blue shade
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      firamono: ['Fira Mono', 'monospace'],
    },
    extend: {
      keyframes: {
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
      },
    },
  },
  plugins: [],
}