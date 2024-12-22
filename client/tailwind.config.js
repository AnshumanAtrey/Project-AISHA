/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
    },
    extend: {
      fontSize: {
        h1: "clamp(1.5625rem, -1.5625rem + 10vw, 4.0625rem);",
      },
    },
  },
  plugins: [],
};
