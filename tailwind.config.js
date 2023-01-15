/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        css: '#2062af',
        docker: '#0091e2',
        heroku: '#79589F',
        javascript: '#f7df19',
        nodejs: '#026e00',
        react: '#61dafb',
        styledComponents: '#db7093',
        typescript: '#3178c6',
        tailwindcss: '#06B6D4',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
