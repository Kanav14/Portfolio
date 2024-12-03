module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        'glow-motion': 'glow-animation 2s infinite', // Subtle glow animation
      },
      keyframes: {
        'glow-animation': {
          '0%': { boxShadow: '0 0 5px #00BFFF' },
          '50%': { boxShadow: '0 0 15px #00BFFF' },
          '100%': { boxShadow: '0 0 5px #00BFFF' },
        },
      },
      colors: {
        glow: {
          light: '#00BFFF', // Bright blue
          dark: '#004080', // Darker blue for contrast
        },
      },
    },
  },
  plugins: [],
};
