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
      }
    },
  },
  plugins: [],
}