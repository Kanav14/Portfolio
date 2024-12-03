module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#0066FF", // Updated glow color
        },
      },
    },
  },
  plugins: [],
};
