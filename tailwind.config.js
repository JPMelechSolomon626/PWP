/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#556b2f",

          "secondary": "#baa693",

          "accent": "#a0403e",

          "neutral": "#2a323c",

          "base-100": "#1d232a",

          "info": "#1a1952",

          "success": "#4169e1",

          "warning": "#fbbd23",

          "error": "#f87272",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
