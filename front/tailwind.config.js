/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      '2xl': {'min': '1536px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'min': '1280px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'min': '1024px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'min': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'min': '640px'},
      // => @media (max-width: 639px) { ... }
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

