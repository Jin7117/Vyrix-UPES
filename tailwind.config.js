/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F0EEE4",
        ink: "#111110",
        charcoal: "#1B1A18",
        line: "#DEDCD3",
        accent: "#E8C34A",
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Neue Montreal'", "'Inter'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
