const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
        mono: ['Jetbrains Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: colors.indigo,
        gray: colors.zinc,
      },
    },
  },
  plugins: [],
}
