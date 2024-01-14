import { colors, fontFamily } from "./src/constant";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily,
      screens: {
        sm: "641px",
        md: "769px",
      },
    },
  },
  plugins: [],
};
