/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        first: '#8a8a8a',
        second: '#1d252e',
        third: '#141414',
        fourth: '#f9faf7',
        fifth: '#eaede3',
        sixth: '#76774B',
        seventh: '#E1E6F3'
      },
      backgroundImage:{
        aboutImg: "url(./src/assets/about.jpg)",
        contactImg: "url(./src/assets/contact.jpg)",
      },
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar')
    ({ nocompatible: true }),
  ],
}