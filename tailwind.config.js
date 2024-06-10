/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        josefinsans: ['Josefin Sans', 'sans - serif'],
        libre: ['Libre Baskerville', 'serif'],
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
      lg: '1280px', // Large screens like a 27-inch monitor
      xl: '1920px',
    },
  },
  plugins: [],
};
