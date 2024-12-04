// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        "line-dash": "dash-flow 2s infinite linear alternate",
        typewriter: "typing 3s steps(20, end), blink-caret 0.5s step-end infinite",
      },
      keyframes: {
        "dash-flow": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "40px 0" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "15ch" },
        },
        "blink-caret": {
          from: { borderColor: "transparent" },
          to: { borderColor: "white" },
        },
      },
      colors: {
        glow: {
          DEFAULT: "#0044cc", // Dark glossy blue
        },
      },
    },
  },
  plugins: [],
};
