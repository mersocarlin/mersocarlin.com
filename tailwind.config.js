const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
    },
    fontFamily: {
      sans: ['Josefin Sans', 'Helvetica', 'Arial'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
