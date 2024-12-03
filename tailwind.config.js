// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        'glow-bounce': 'glow-bounce 2s infinite', // Glowing and bouncing animation for lines
      },
      keyframes: {
        'glow-bounce': {
          '0%': { backgroundPosition: '200% 0%' },
          '50%': { backgroundPosition: '100% 0%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      },
      colors: {
        glow: {
          DEFAULT: '#0066FF', // Darker blue glow color
        },
      },
    },
  },
  plugins: [],
};
