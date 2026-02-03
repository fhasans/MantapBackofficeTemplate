/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mantap: {
          blue: '#003D79', // Biru khas Mandiri
          gold: '#FFB81C', // Emas khas Mandiri
        }
      }
    },
  },
  plugins: [],
}