// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        "glow-flow": "glow-animation 2s infinite",
      },
      keyframes: {
        "glow-animation": {
          "0%": { backgroundPosition: "200% 0%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
      },
      colors: {
        glow: {
          DEFAULT: "#00FFFF", // Cyan glow color
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
