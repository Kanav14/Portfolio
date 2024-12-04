module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        "gradient-vertical": "gradient-vertical 1.5s linear infinite",
        "gradient-horizontal": "gradient-horizontal 1.5s linear infinite",
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
      },
      backgroundImage: {
        "overall-gradient":
          "linear-gradient(135deg, #0F2027, #203A43, #2C5364)",
        "radial-highlight":
          "radial-gradient(circle, #1A1A40, #292E49)",
      },
    },
  },
  plugins: [],
};
