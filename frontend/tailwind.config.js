/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#1A1C2C",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #2A2D3A, #3A3E4A)",
        designColor: "#8be9fd",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #131520, -10px -10px 19px #212438",
      },
    },
  },
  plugins: [],
};