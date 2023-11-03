/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['node_modules/preline/dist/*.js', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'acumin-pro': ['Acumin Pro', 'sans-serif'],
      },
    },
  },
  plugins: [require('preline/plugin')],
};
