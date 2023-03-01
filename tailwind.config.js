/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#263793',
        brandDark: '#5A6BC4',

        navigation: 'transparent',
        navigationText: '#000000',

        heroSection: '#f8f8f8',
        background: '#FFFFFF',
        brandText: '#FFFFFF',

        heading: '#000000',
        subheading: '#1A1A1A',
        text: '#333333',

        shadow: 'rgba(0, 0, 0, .2)',
      },
    },
  },
  plugins: [],
};
