// tailwind.config.js
export default {
  content: ['./index.html', './src/pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#0C49B0',
        secon: '#082E70',
        link: '#2e68c9',
        mainBlack: '#1A1A1A',
        gray: '#666666',
        lighGray: '#E7EDF5',
      },
    },
  },
  plugins: [],
}
