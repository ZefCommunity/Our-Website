/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "great-vibe": ["Great Vibe", "sans-serif"],
        "josefin-sans": ["Josefin Sans", "sans-serif"],
        "montserrat": ["Montserrat", "sans-serif"]
      },
    },
  },
  plugins: [],
};