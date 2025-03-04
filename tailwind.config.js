/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans Mongolian', 'system-ui', 'sans-serif'],
        heading: ['Noto Sans Mongolian', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'heading-1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'heading-2': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'heading-3': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body-large': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'slideIn': 'slideIn 0.5s ease-out',
        'loading': 'loading 0.5s ease out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        loading:{
          '0%': {  opacity: '1' },
          '100%': { opacity: '0' },
        }
      },
      colors: {
        primary: {
          light: '#9575CD',
          DEFAULT: '#673AB7',
          dark: '#512DA8',
        },
        secondary: {
          light: '#9C27B0',
          DEFAULT: '#7B1FA2',
          dark: '#4A148C',
        },
      },
    },
  },
  plugins: [],
}