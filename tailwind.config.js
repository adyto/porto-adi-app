module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screen: {
        "sm": "480px"
      },
      spacing: {
        "big": "48rem"
      }
    },
    fontFamily: {
      nunito: ['Nunito', "sans-serif"]
    }
  },
  plugins: [],
}
