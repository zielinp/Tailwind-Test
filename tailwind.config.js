import autoprefixer from 'autoprefixer'; // Zamiast require('autoprefixer')


export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}',],
  theme: {
    extend: {},
  },
  plugins: [
    autoprefixer, 
  ],
};
