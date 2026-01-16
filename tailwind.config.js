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
    extend: {
      colors: {
        primary: "#0B2B4B",
        accent: "#E3A18C",
      },
      fontSize: {
        nav: "18px",
      },
    },
  },
  plugins: [],
};
