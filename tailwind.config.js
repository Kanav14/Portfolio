// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        'glow': 'glow-animation 2s linear infinite', // Smooth glowing animation
      },
      keyframes: {
        'glow-animation': {
          '0%': { backgroundPosition: '200% 0%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      },
      colors: {
        verticalGlow: {
          DEFAULT: '#00BBFF', // More vibrant blue for vertical lines
        },
        horizontalGlow: {
          DEFAULT: '#00FFFF', // Cyan for horizontal lines
        },
      },
    },
  },
  plugins: [],
};
