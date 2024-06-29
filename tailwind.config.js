module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#0a3d62",
        secondary: "#4da8da",
        accent: "#f39c12",
      },
      textDecorationColor: {
        accent: "#f39c12",
      },
      textDecorationThickness: {
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
      },
    },
  },
  plugins: [],
};
