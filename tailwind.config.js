/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      Sans: ['poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        lightestGray: '#F3F3F3',
        greenBtn: '#28A745',
        // You can add more custom colors here if needed
      },
    },
  },
  plugins: [],
};
