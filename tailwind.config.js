module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
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
