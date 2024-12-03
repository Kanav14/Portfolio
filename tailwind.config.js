module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        'glow': 'glow-animation 2s infinite', // Define your glowing animation
        'glow-motion': 'glow-motion 4s linear infinite',
      },
      keyframes: {
        'glow-animation': {
          '0%': { backgroundPosition: '200% 0%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
        'glow-motion': {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 0%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      },
      colors: {
        glow: {
          light: '#00FFFF', // Light cyan
          dark: '#0099CC', // Darker cyan for contrast
        },
      },
    },
  },
  plugins: [],
};
