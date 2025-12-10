/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5C4033",
        primaryLight: "#A47551",
        primaryDark: "#3E2A21",
        beige: "#DCC3A1",
      },
    },
  },
  plugins: [],
};
