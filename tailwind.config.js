module.exports = {
  purge: [
    './src/components/**/*.tsx',
    './src/modules/**/*.tsx',
    './src/pages/**/*.tsx',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Josefin Sans', 'Helvetica', 'Arial'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
