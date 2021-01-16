module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      zIndex: {
        "1": "1",
        "-1": "-1",
      },
    },
    fontFamily: {
      display: ["Roboto", "Helvetica", "sans-serif"],
      body: ["Roboto", "Helvetica", "sans-serif"],
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
