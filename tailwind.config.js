module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "800px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      zIndex: {
        "1": "1",
        "-1": "-1",
      },
      colors: {
        "d-gray": "#D8D8D8",
        "l-gray": "rgba(239, 242, 244, 0.498279)",
        "m-gray": "#E9EBEE",
      },
      fontSize: {
        xxs: "0.6875rem",
        xxxs: "0.5625rem",
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
