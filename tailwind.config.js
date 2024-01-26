/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#344054',
        lightBlue: '#EDF2F5',
        lightGray: '#F8F8F8',
        mediumBlue1: '#2F5478',
        mediumBlue2: '#22405C',
      },
      animation: {
        slideup: 'slideup 0.4s ease-in-out',
        slidedown: 'slidedown 0.4s ease-in-out',
        slideright: 'slideright 0.3s ease-in-out',
        slideleft: 'slideleft 0.3s ease-in-out',
        slowfade: 'slowfade 0.2s ease-in-out  ',
        slowfade2: 'slowfade 1s  ease-in-out  ',
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slowfade2: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)', },
          to: { opacity: 1, transform: 'translateY(0%)' },

        },
        slidedown: {
          from: { opacity: 0, transform: 'translateY(-25%)' },
          to: { opacity: 1, transform: 'translateY(0%)' },
        },
        slideright: {
          from: { opacity: 0, transform: 'translateX(25%)' },
          to: { opacity: 1, transform: 'translateX(0%)' },
        },
        slideleft: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(25%)' },
        },
      }
    },
  },
  plugins: [],
}

