/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '28xl': '28px',
        '40': '40px',
        '50': '50px',
      },
      lineHeight: {
        '8.5': '34.44px',
        '61': '61.5px',
      },
      colors: {
        'grayCust1': '#C4C4C4'
      },
      borderRadius: {
        '50%': '50%'
      },
      spacing: {
        '109': '109px',
        '120': '120px',
        '100px': '100px',
        '700': '700px',
        'card': '265px'
      },
      screens: {
        'xxl': '1440px'
      }
    },
  },
  plugins: [],
}