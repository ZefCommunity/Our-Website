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
      colors: {
        zef: {
          navy: "#072366",
          green: "#0ecb7d",
          "green-dark": "#0ab56d",
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.65s ease-out forwards",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};