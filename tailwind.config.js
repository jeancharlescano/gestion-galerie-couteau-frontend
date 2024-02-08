/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fire-img': "url('/src/assets/img/bg.jpeg')"
      },
      colors: {
        'main-black': '#232C33',
        'black-lighter': '#262424',
        'gold': '#AF7E39'
      },
      fontFamily: {
        'knife-title': 'The Nautigal'
      }
    },
  },
  plugins: [],
}

