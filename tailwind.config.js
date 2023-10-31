import autoprefixer from 'autoprefixer'; // Zamiast require('autoprefixer')


export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}',],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
    },
  },
  plugins: [
    autoprefixer, 
  ],
};
