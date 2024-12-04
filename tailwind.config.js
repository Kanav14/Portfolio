module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        "line-motion": "line-motion 5s linear infinite",
      },
      keyframes: {
        "line-motion": {
          "0%": { strokeDashoffset: 200 },
          "100%": { strokeDashoffset: 0 },
        },
      },
      colors: {
        glow: {
          DEFAULT: "#00FFFF", // Cyan
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
