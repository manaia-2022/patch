/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './client/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}

// Ask Ash about adding themes to this config file
