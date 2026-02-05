/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      spacing: {
        '7.5': '30px',
        '15': '60px',
        '70': '280px'
      },
      borderRadius: {
        '2.5': '10px'
      },
      zIndex: {
        '5': '5'
      },
      backdropBlur: {
        'lg': '10px'
      },
      transitionDuration: {
        '250': '250ms'
      },
      colors: {
        'onyx': '#2a2a2a',
        'jet': '#383838',
        'eerie-black-1': '#1a1a1a',
        'eerie-black-2': '#1f1f1f',
        'smoky-black': '#121212',
        'white-1': '#ffffff',
        'white-2': '#fafafa',
        'orange-yellow-crayola': '#ffb347',
        'vegas-gold': '#d4af37',
        'light-gray': '#d6d6d6',
        'light-gray-70': 'rgba(214, 214, 214, 0.7)',
        'bittersweet-shimmer': '#ff6b6b',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'fs-1': '24px',
        'fs-2': '18px',
        'fs-3': '17px',
        'fs-4': '16px',
        'fs-5': '15px',
        'fs-6': '14px',
        'fs-7': '13px',
        'fs-8': '11px',
      },
      fontWeight: {
        'fw-300': '300',
        'fw-400': '400',
        'fw-500': '500',
        'fw-600': '600',
      },
      boxShadow: {
        'shadow-1': '-4px 8px 24px rgba(0, 0, 0, 0.25)',
        'shadow-2': '0 16px 30px rgba(0, 0, 0, 0.25)',
        'shadow-3': '0 16px 30px rgba(0, 0, 0, 0.15)',
        'shadow-4': '0 10px 20px rgba(0, 0, 0, 0.1)',
        'shadow-5': '0 3px 6px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-onyx': 'linear-gradient(to bottom right, hsl(240, 1%, 25%) 3%, hsl(0, 0%, 19%) 97%)',
        'gradient-jet': 'linear-gradient(to bottom right, hsla(240, 1%, 18%, 0.251) 0%, hsla(240, 2%, 11%, 0) 100%), hsl(240, 2%, 13%)',
        'gradient-yellow-1': 'linear-gradient(to bottom right, hsl(45, 100%, 71%) 0%, hsla(36, 100%, 69%, 0) 50%)',
        'gradient-yellow-2': 'linear-gradient(135deg, hsla(45, 100%, 71%, 0.251) 0%, hsla(35, 100%, 68%, 0) 59.86%), hsl(240, 2%, 13%)',
        'gradient-border-onyx': 'linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)',
        'gradient-text-yellow': 'linear-gradient(to right, hsl(45, 100%, 72%), hsl(35, 100%, 68%))',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
}
