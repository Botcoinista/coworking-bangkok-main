/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"], // Make sure the key for the fontFamily is lowercase "sans"
      sans: ["sans-serif"], // Make sure the key for the fontFamily is lowercase "sans"
      rajdhani: ["Rajdhani"], // Make sure the key for the fontFamily is lowercase "sans"
      work: ["work-sans", "system-ui", "work-sans"], // Make sure the key for the fontFamily is lowercase "sans"
    },
    extend: {
      colors: {
        black: "#000000",
        banner: "#272727",
        darkgray: "#3F3F3F",
        gray: "#616161",
        lightgray: "#848484",
        semilightgray: "#404040",
        lightestGray: "#F3F3F3",
        linegray: "#D2D2D2",
        lightwhite: "#F3F3F3",
        white: "#FFFFFF",
        turquoise: "#27B2BB",
        yellow: "#FBBD02",
        greenBtn: "#28A745",
        red: "A72828",
        coffeecircle: "#F5EEE8",
        // You can add more custom colors here if needed
      },
      instagram: {
        DEFAULT: "#E1306C",
        500: "#E1306C",
        // ... other shades if you want to define
      },
      backgroundImage: {
        "instagram-gradient":
          "linear-gradient(45deg, rgba(229,64,109,1) 0%, rgba(252,175,69,1) 100%)",
      },
      screens: {
        mxs: "190px",
        mobile: "390px",
        xs: "480px",
      },
      width: {
        "1/2": "50%",
        "6/10": "60%",
        hero: "1015px",
      },
      borderRadius: {
        "4xl": "2rem", // or whatever size fits your design
        "5xl": "2.5rem", // example of even larger border-radius
        // ... other custom sizes
      },
      fontSize: {
        "custom-small": "0.875rem", // 14px
        "custom-base": "1rem", // 16px
        twenty: "20px",
        twentyfour: "24px",
        twentyeight: "28px",
        thirtytwo: "32px",
        thirtysix: "36px",
        thirtyeight: "38px",
        fortyeight: "48px",
        fiftysix: "56px",
        sixty: "60px",
        seventyeight: "78px", // 78px
        hundredeighty: "180px", // 180px
        // ... add as many custom sizes as you need
      },
    },
  },
  plugins: [],
  // You may also need to configure other properties based on your project requirements
};
