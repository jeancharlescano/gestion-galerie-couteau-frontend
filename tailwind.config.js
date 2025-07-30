/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-black': '#232c33',
        'main-black-lighter': '#364149',
        'black-lighter': '#262424',
        'gold': '#db2b39',
      },
      fontFamily: {
        'knife-title': ['"The Nautigal"', 'cursive'],
      },
      backgroundImage: {
        'fire-img': "url('/assets/img/bg.jpeg')",
      },
      animation: {
        'slide-right': 'slideRight 1s ease forwards',
        'slide-left': 'slideLeft 1s ease forwards',
        'slide-top': 'slideTop 1s 0.4s ease forwards',
        'zoom-in': 'zoomIn 1s ease forwards',
      },
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideTop: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}