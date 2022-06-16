module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        "big": "48rem"
      }
    },
    screens: {
      "sm": "480px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px"
    },
    fontFamily: {
      nunito: ['Nunito', "sans-serif"]
    }
  },
  plugins: [],
}
