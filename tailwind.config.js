/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "blanc": "#fafafa",
      "noir": "#e1e1e1",
      "bleuNuit": "#181831",
      "bleu": "#1da1f2"
    },
    fontSize: {
      "xs": "0.938rem", //15px
      "base": "1rem",//16px
      "lg": "1.25rem",//20px
      "xl": "2.5rem",//40px
      "2xl": "3.125rem"//50px
    },
    fontFamily: {
      "uncut-sans": "Uncut Sans"
    },
    extend: {},
  },
  plugins: [],
}