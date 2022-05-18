module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: {
          0: "#f0f1f6",
          1: "#f9fafc",
          2: "#fbd7cc",
        },
        text: {
          5: "#c6cad4",
        },
        primary: {
          10: "#4fa3fc",
          20: "#2F54EB",
          100: "#fb6d3b",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
