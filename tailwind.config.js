/** @type {import('tailwindcss').Config} */
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
      Poppins:["Poppins","sans-sarif"]
    }
  },
  plugins: [],
}

