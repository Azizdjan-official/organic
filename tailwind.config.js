/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#274C5B',
      'secondary': '#7EB693',
      'yellowish': '#274C5B',
      'fourthish': '#D4D4D4',
      'gray-light': '#F9F8F8',
      'gray': '#EFF6F1',
      'lastcolor': '#525C60',
      'white': '#fff',
    },
  },
  plugins: [],
}