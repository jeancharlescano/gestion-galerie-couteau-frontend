/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "fire-img": "url('/src/assets/img/bg.jpeg')",
      },
      colors: {
        "main-black": "#232C33",
        "main-black-lighter": "#364149",
        "black-lighter": "#262424",
        gold: "#AF7E39",
      },
      fontFamily: {
        "knife-title": "The Nautigal",
      },
      animation: {
        "slide-right": "slideRight 1s ease forwards",
        "slide-top": "slideTop 1s .4s ease forwards",
      },
      keyframes: {
        slideRight: {
          "0%": {
            transform: "translateX(-100px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        slideTop: {
          "0%": {
            transform: "translateY(-100px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
