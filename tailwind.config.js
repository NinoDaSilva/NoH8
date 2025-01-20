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
    },
    fontSize: {
      "base": "1.375rem",//22px
      "lg": "1.625rem",//26px
      "xl": "4.375rem",//70px
      "2xl": "8.1875rem"//131px
    },
    fontFamily: {
      "main": ['Michroma', 'sans-serif'],
      "secondary": ['Didact Gothic', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}