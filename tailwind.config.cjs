/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "972px",
      xl: "1180px",
      "2xl": "1380px",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        arial: ["Arial", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
      },
      colors: {
        black: "#111",
        grayColor: "#838383",
        bodyColor: "#f5f5f5",
      },
    },
  },

  plugins: [],
});
