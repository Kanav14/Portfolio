// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-light': 'bounce-animation 3s infinite', // Bouncing light animation
      },
      keyframes: {
        'bounce-animation': {
          '0%, 100%': { backgroundPosition: '0% 50%' }, // Light starts/stops in the middle
          '50%': { backgroundPosition: '100% 50%' },   // Light moves to the end
        },
      },
      colors: {
        glowVertical: {
          DEFAULT: '#0055AA', // Darker blue for vertical lines
        },
        glowHorizontal: {
          DEFAULT: '#0055AA', // Darker cyan for horizontal lines
        },
      },
    },
  },
  plugins: [],
};
