/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tfn-green': '#006D3E',
        'tfn-powder': '#F5F6FA'
      },
      backgroundImage: {
        'tfn-group': "url('/group.png')"
      }
    },
  },
  plugins: [],
}