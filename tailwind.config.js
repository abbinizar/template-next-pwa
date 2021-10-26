module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyanBlue: '#307FE2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
