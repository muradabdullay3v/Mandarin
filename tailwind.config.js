/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // App Router
    "./pages/**/*.{js,ts,jsx,tsx}",     // Pages Router
    "./components/**/*.{js,ts,jsx,tsx}" // Components
  ],
  theme: {
    extend: {
      colors: {
        brand: "#863202",  // simpler, no need for DEFAULT object
      },
    },
  },
  plugins: [],
};
