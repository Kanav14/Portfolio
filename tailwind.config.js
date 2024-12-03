// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        "glow-bounce": "glow-bounce 1.2s ease-in-out infinite",
      },
      keyframes: {
        "glow-bounce": {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "200% 0%" },
        },
      },
      colors: {
        glow: {
          DEFAULT: "#0066FF", // Darker blue glow color
        },
      },
    },
  },
  plugins: [],
};
