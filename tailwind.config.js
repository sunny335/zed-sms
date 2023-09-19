/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [ './src/**/*.html', './src/**/*.vue', './src/**/*.jsx', ],
  darkMode: 'class', // Enable dark mode using class
  variants: {
    extend: {
      backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
      textColor: ['dark', 'dark-hover', 'dark-active'],
    },
  },
  content: [],
  theme: {
    extend: {
      colors:{
        primary:{
          100: '#0057FF'
        },
        secondary:{
          100: '#1E2329'
        }
      }
    },
    fontFamily:{
      Poppins:["Poppins","sans-sarif"],
      Inter:["Inter","sans-sarif"]
    },
    
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
          '.scrollbar': {
              overflowY: 'auto',
              scrollbarColor: `#DDE2E5`,
              scrollbarWidth: 'thin',
          },
          '.scrollbar::-webkit-scrollbar': {
              height: '2px',
              width: '5px',
          },
          '.scrollbar::-webkit-scrollbar-thumb': {
              backgroundColor: "#DDE2E5",
          },
          '.scrollbar::-webkit-scrollbar-track-piece': {
              backgroundColor: "#fff",
          },
      });
  }),
  ],
}

