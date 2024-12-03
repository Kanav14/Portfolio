// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        "glow-bounce": "glow-bounce 1.5s linear infinite",
      },
      keyframes: {
        "glow-bounce": {
          "0%": { backgroundPosition: "200% 0%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
      },
      colors: {
        glow: {
          DEFAULT: "#00FFFF",
        },
      },
    },
  },
  plugins: [],
};
