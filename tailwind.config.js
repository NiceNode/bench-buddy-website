/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'base': '#F7F0E4',
      },
      colors: {
        'aquamarine': '#92edb1',
      },
      fontFamily: {
        "satoshi": "Satoshi",
      }
    },
  },
  plugins: [],
}