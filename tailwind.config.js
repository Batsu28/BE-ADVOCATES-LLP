/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'italic'],
        merri: ['Merriweather', 'italic'],
        noto: ['Noto Sans', 'italic'],
        roboto: ['Roboto', 'italic'],
      },
    },
  },
  plugins: [],
}