// tailwind.config.js
export default {
  content: ['./index.html', './src/pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#0C49B0',
        secondary: '#082E70',
        mainBlack: '#1A1A1A',
        gray: '#666666',
      },
    },
  },
  plugins: [],
}
