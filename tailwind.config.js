// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        'glow': 'glow-animation 2s linear infinite', // Line glow animation
      },
      keyframes: {
        'glow-animation': {
          '0%': { backgroundPosition: '200% 0%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      },
      colors: {
        glow: {
          DEFAULT: '#00FFFF', // Cyan glow color
        },
      },
    },
  },
  plugins: [],
};
