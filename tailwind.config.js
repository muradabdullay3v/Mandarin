/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/app/**/*.{ts,tsx,js,jsx}",
  "./src/components/**/*.{ts,tsx,js,jsx}"
],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        secondary: "#10B981",
        danger: "#EF4444",
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
