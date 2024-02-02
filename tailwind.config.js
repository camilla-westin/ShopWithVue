/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        greyish: "#FAF7F4",
        lightgrey: "#F9F9F9",
        darkgreen: "#3e6851",
      },
    },
  },
  plugins: [],
};
