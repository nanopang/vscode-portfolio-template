/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#0078D4',
      dark: '#181818',
      "dark-grey": "#2E2E2E",
      grey: '#949494',
      editor: '#202020',
      "grey-white": "#CCCCCC"
    },
    extend: {},
  },
  plugins: [],
}
