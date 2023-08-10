/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fire-img': "url('/src/assets/img/gestionGallerieCouteau.jpg')"
      },
      colors: {
        'main-black': '#181717',
        'black-lighter': '#262424',
        'gold': '#987252'
      },
      fontFamily: {
        'knife-title': 'The Nautigal'
      }
    },
  },
  plugins: [],
}

