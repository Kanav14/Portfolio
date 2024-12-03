module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        'glow': 'glow-animation 2s infinite', // Define your glowing animation
        'bounce': 'bounce-animation 1s infinite', // Added bounce animation for lines
      },
      keyframes: {
        'glow-animation': {
          '0%': { backgroundPosition: '200% 0%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
        'bounce-animation': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }, // Bounce effect
        },
      },
      colors: {
        glow: {
          DEFAULT: '#00FFFF', // Cyan glow color
          dark: '#008080', // Darker shade for lines
        },
      },
    },
  },
  plugins: [],
};
