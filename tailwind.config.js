/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // This enables dark mode with class strategy
  theme: {
    extend: {
      colors: {
        lightBg: '#dfc0ac',            // warm sandy blush
        darkBg: '#2e1a08',             // deep amber-brown
        lightPrimaryColor: '#f5e8de',  // warm ivory-cream
        darkPrimaryColor: '#503520',   // warm sienna-brown
        lightSecondaryColor: '#eddac8', // warm peachy-blush — Interests section
        darkSecondaryColor: '#624428', // amber-brown — Interests dark
        lightTertiaryColor: '#e8d4c0', // warm sand
        darkTertiaryColor: '#3c2410',  // dark amber-brown
        lightText: '#000000',
        darkText: '#ffffff',
      },
      fontFamily: {
        body: ['Lato', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
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