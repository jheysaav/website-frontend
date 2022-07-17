import { defineConfig } from 'windicss/helpers'
import colors from "windicss/colors"

export default defineConfig({
	darkMode: "class",
	extract: {
		include: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	},
	theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
        mono: ["Jetbrains Mono", "monospace"],
      },
      colors: {
        primary: colors.blue,
        grey: colors.neutral,
      },
    },
  },
})
