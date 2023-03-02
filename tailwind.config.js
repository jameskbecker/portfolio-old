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
        heroSectionDark: '#161616',

        background: '#FFFFFF',
        backgroundDark: '#161616',

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
