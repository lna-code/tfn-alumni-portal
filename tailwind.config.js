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
        'tfn-light-green': '#6ad76c',
      },
      screens: { 'sm': { 'max': '640px' } 
      },
      backgroundImage: {
        'tfn-group': "url('/group.png')"
      }
    },
  },
  plugins: [],
}