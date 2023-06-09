/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {

  important:true,
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tfn-green': '#006D3E',
        'tfn-powder': '#F5F6FA',
        'tfn-light-green': '#6AD76C',
      },
      screens: { 
        'sm': { 'max': '640px' },
        's': {'min': '650px'}
      },
      backgroundImage: {
        'tfn-group': "url('/group.png')"
      }
    },
  },
  plugins: [],
}