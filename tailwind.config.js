module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        "gradient-vertical": "gradient-vertical 3s linear infinite",
        "gradient-horizontal": "gradient-horizontal 3s linear infinite",
        "fade-in": "fade-in 2s ease-in",
        "bounce": "bounce 1s infinite",
      },
      keyframes: {
        "gradient-vertical": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "0% 100%" },
        },
        "gradient-horizontal": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 0%" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      backgroundImage: {
        "overall-gradient":
          "linear-gradient(135deg, #ffffff, #e6e6e6, #f0f0f0)", // White gradient
        "radial-highlight":
          "radial-gradient(circle, #1A1A40, #292E49)", // Highlighted section gradient
      },
    },
  },
  plugins: [],
};
