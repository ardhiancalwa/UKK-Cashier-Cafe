/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  // darkMode: 'media',
  // ...
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        custom: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        normal: 400,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [
     require('flowbite/plugin'),
  ],
}