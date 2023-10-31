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
        'base-color': '#F7F0E4',
      },
      fontFamily: {
        "satoshi": "Satoshi-Medium",
        // "satoshi": 'url(/src/fonts/Satoshi-Regular.woff) format("woff")'
      }
    },
  },
  plugins: [],
}