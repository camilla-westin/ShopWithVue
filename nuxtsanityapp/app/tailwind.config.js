/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundColor: {
        greyish: "#FAF7F4",
        lightgrey: "#F9F9F9",
        darkgreen: "#3e6851",
      },
      fontFamily: {
        noto: ['"Noto Sans"', "sans-serif"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};
