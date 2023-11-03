/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    'node_modules/preline/dist/*.js',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'acumin-pro': ['Acumin Pro', 'sans-serif'],
      },
    },
  },
  plugins: [require('preline/plugin')],
};
