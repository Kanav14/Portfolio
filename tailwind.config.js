module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        "to-and-fro": "to-and-fro 3s ease-in-out infinite",
      },
      keyframes: {
        "to-and-fro": {
          "0%, 100%": { strokeDashoffset: 400 },
          "50%": { strokeDashoffset: 0 },
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
