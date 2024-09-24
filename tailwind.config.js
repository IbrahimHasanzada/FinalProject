/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      screens: {
        'xs': '480px',
        'lm': '980px', 
      },
    },
  },
  plugins: [],
}