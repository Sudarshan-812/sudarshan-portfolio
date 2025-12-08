/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // MOVED HERE (Root Level) - Critical for manual toggling
  darkMode: 'class', 
  theme: {
    extend: {
      // 1. ADDED FONTS HERE
      fontFamily: {
        sans: ['Inter', 'sans-serif'],     // Default font (Body)
        display: ['Satoshi', 'sans-serif'], // Heading font
      },
      // 2. EXISTING ANIMATIONS
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, 
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
    },
  },
  plugins: [],
};