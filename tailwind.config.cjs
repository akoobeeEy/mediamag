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

      backgroundImage: {
        banner1: "url('./src/assets/images/banner1.jpg')",
        banner2: "url('./src/assets/images/banner2.jpg')",
        banner3: "url('./src/assets/images/banner3.jpg')",
        banner4: "url('./src/assets/images/banner4.jpg')",
      },
      colors: {
        "custom-black": "rgba(28, 28, 28, 0.1)",
        black: "#111",
        grayColor: "#838383",
        bodyColor: "#f5f5f5",
        titleColor: "#1c1c1c",
        redColor: "#e13439",
      },
    },
  },

  plugins: [],
});
