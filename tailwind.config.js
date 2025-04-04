/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        light: '#e9e7e7',
        grey: '#d7d6d6',
        grdark: '#515155',
        dark: '#232323'
      }
    },
  },
  plugins: [],
}
