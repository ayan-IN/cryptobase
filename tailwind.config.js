/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Sans', 'sans-serif'],
      },
    },
    colors: {
      grey: { 100: '#808080', 200: '#323232', 300: '#212121' },
      white: '#ffffff',
      blue: '#2562ea',
      blueLight:'#e5ebfb',
      red: '#ed2429',
      green: '#03bb48',
      bgBase: '#f2f2f2',
    },
    fontSize: {
      sm: '14px',
      md: '18px',
      lg: '24px',
      xl: '32px',
      base: '16px',
    },
  },
  plugins: [],
}
