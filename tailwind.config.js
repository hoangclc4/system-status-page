/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  darkMode: ['class'], // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}

