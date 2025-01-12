/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // This enables dark mode with class strategy
  theme: {
    extend: {
      colors: {
        lightBg: '#FEFAE0',
        darkBg: '#582630',
        lightPrimaryColor: '#E9EDC9',
        darkPrimaryColor: '#A54657',
        lightSecondaryColor: '#FAEDCD',
        darkSecondaryColor: '#e26d5c',
        lightTertiaryColor: '#fdf0d5',
        darkTertiaryColor: '#2c2a32',
        lightText: '#000000',
        darkText: '#ffffff',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'split-enter': 'splitEnter 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        splitEnter: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
}