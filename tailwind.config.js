/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0066ff',
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#001433',
        },
        secondary: {
          50: '#e6f7ed',
          100: '#ccefdb',
          200: '#99dfb7',
          300: '#66cf93',
          400: '#33bf6f',
          500: '#00af4b',
          600: '#008c3c',
          700: '#00692d',
          800: '#00461e',
          900: '#00230f',
        },
        accent: {
          50: '#fff7e6',
          100: '#ffefcc',
          200: '#ffdf99',
          300: '#ffcf66',
          400: '#ffbf33',
          500: '#ffaf00',
          600: '#cc8c00',
          700: '#996900',
          800: '#664600',
          900: '#332300',
        },
      },
    },
  },
  plugins: [],
};
