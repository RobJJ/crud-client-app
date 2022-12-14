/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      smlr: { max: "520px" },
      smlst: { max: "400px" },
    },
    fontFamily: {
      mainNavBar: ["Passion One", "cursive"],
      muktaTitle: ["Mukta", "sans-serif"],
      chivoLight: ["Chivo Mono", "monospace"],
      chivoReg: ["Chivo Mono", "monospace"],
      catamaran: ["Catamaran", "sans-serif"],
    },
  },
  plugins: [],
};
