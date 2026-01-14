/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a2332',
          dark: '#151c28',
          light: '#2d3e50',
        },
        accent: {
          DEFAULT: '#c87548',
          dark: '#b3643f',
          light: '#d88b61',
        },
        teal: {
          DEFAULT: '#3d5e5c',
          dark: '#2f4a48',
          light: '#4d706e',
        },
        navy: {
          DEFAULT: '#273142',
          dark: '#1f2937',
          light: '#364153',
        },
        neutral: {
          light: '#f4f4f4',
          DEFAULT: '#e0e0e0',
          dark: '#9e9e9e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
