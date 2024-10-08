/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        dark: "#1E1E1E",
        green: "#5AEE42",
        greenDark: "#327427",
        blue: "#1914BF",
        blueDark: "#131079",
        purple: "#5A57C1",
        purpleDark: "#36346C",
        red: "#F05635",
        darkRed: "#B43F25",
      },
      backgroundImage: {
        elixir: "url('assets/imgs/elixir.png')",
        exp: "url('assets/imgs/exp.png')",
        down: "url('assets/imgs/chevron-down.png')",
      },
    },
  },
  plugins: [],
};
