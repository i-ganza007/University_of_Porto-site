/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,css}',
    './*.{html,js,css}'
  ],
  theme: {
    extend: {
      colors: {
        'customeGold': '#a18a4d',
        'custBlue': '#333',
        'bgCol': '#f2f2f2'
      }
    },
  },
  plugins: [],
}