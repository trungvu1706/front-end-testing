/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      orange: {
        300: '#FFCC21',
        400: '#FF963C',
        500: '#EA6C00',
        600: 'linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)',
      },
      black: {
        400: '#777',
        500: '#414141',
        600: '#2E2E2E',
      },
      white: {
        400: '#D9D9D9',
        900: '#fff',
      },
    },
  },
  plugins: [],
}
