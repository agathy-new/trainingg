/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      xl: "1400px",   // Desktop large
      lg: "1200px",   // Desktop normal
      md: "992px",    // Tablet landscape
      sm: "768px",    // Tablet portrait
      xs: "468px",    // Mobile
    },

    extend: {
      colors: {
        primary: "#0B2B4B",
        accent: "#D4B5A2",
      },

      fontFamily: {
        sans: ["Avenir", "sans-serif"],
      },

      fontSize: {
        nav: "18px",
      },
    },
  },

  plugins: [],
};
