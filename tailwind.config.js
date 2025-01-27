/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "blanc": "#fafafa",
      "gris": "F3F3F3",
      "noir": "#191a23",
      "vert": "b9ff66",
    },
    fontSize: {
      "xs": "1rem", //16px
      "sm": "1.125rem", //18px
      "base": "1.25rem",//20px
      "lg": "1.625rem", //26px
      "xl": "2.25rem", //36px
      "2xl": "2.5rem", //40px
      "3xl": "3.75", //60px
    },
    fontFamily: {
      "main": ['Space Grotesk', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}