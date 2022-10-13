/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      s: 16,
      m: 18,
      l: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      transparent: "transparent",
      gray: {
        900: "#AFAFAF4D",
        800: "#C4C4CC",
        700: "#E2E2E2",
      },
      blue: {
        900: "#2B2B4F",
        800: "#3C3C6A",
        700: "#61DAFB",
        600: "#8FDFF4",
      },
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      }
    },
  },
  plugins: [],
}
