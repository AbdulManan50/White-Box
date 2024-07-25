/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Roboto'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    screens:{
      sm:"426px",
      md:"769px",
      xl:"1280px",
    },
  },
  plugins: [],
}
