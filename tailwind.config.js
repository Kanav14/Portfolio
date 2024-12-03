// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-light': 'bounce-animation 1.5s infinite', // Faster animation (1.5s)
      },
      keyframes: {
        'bounce-animation': {
          '0%, 100%': { backgroundPosition: '0% 50%' }, // Start/stop at one end
          '50%': { backgroundPosition: '100% 50%' },   // Move to the other end
        },
      },
      colors: {
        glow: {
          DEFAULT: '#0077FF', // Unified blue glow for both lines
        },
      },
    },
  },
  plugins: [],
};
