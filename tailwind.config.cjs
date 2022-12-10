/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brancoEscuro: "#EAEAEA",
        cinza1: "#F2F2F2"
      }
    },
  },
  plugins: [],
}