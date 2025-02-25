/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      '2xl': {'min': '1536px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'md': {'min': '768px', 'max': '1023px'},
      'sm': {'min': '640px', 'max': '767px'},
    },
    extend: {
      fontFamily: {
        quicksand: ['Quicksand'],
        poppins: ['Poppins']
      }
    },
  },
  plugins: [],
}

