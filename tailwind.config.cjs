/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  content: [
    "./src/**/*.{ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "primary-purple": "#915eff",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
