// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "poppins": ["Poppins"], // Make sure the key for the fontFamily is lowercase "sans"
      "sans": ["sans-serif"], // Make sure the key for the fontFamily is lowercase "sans"
      "rajhadi": ["rajhadi"], // Make sure the key for the fontFamily is lowercase "sans"
      "rajhadi": ["rajhadi"], // Make sure the key for the fontFamily is lowercase "sans"
    },
    extend: {
      colors: {
        black: "#000000",
        banner: "#272727",
        darkgray: "#3F3F3F",
        gray: "#616161",
        lightgray: "#848484",
        lightestGray: "#F3F3F3",
        linegray: "#D2D2D2",
        lightwhite: "#F3F3F3",
        white: "#FFFFFF",
        turquoise: "#27B2BB",
        yellow: "#FBBD02",
        greenBtn: "#28A745",
        red: "A72828",
        coffecircle: "#F5EEE8",
        // You can add more custom colors here if needed
      },
      borderRadius: {
        "4xl": "2rem", // or whatever size fits your design
        "5xl": "2.5rem", // example of even larger border-radius
        // ... other custom sizes
      },
    },
  },
  plugins: [],
  // You may also need to configure other properties based on your project requirements
};
