/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pizza: {
          50: "#fff7ec",
          100: "#ffeed3",
          200: "#ffd9a5",
          300: "#ffbd6d",
          400: "#ff9532",
          500: "#ff750a",
          600: "#fd5b00",
          700: "#cc4102",
          800: "#a1330b",
          900: "#822c0c",
          950: "#461304",
        },
      },
    },
  },
  plugins: [],
};
