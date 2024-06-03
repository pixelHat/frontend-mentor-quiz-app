/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        purple: '#A729F5',
        'dark-navy': '#313E51',
        navy: '#3B4D66',
        'grey-navy': '#626C7F',
        'light-bluish': '#ABC1E1',
        'light-gray': '#F4F6FA',
        green: '#26D782',
        red: '#EE5454'
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif']
      },
      screens: {
        sm: '768px',
        md: '1440px'
      },
      boxShadow: {
        'list-item': '0px 16px 40px rgba(143, 160, 193, 0.14)'
      },
      borderWidth: {
        3: '3px'
      }
    }
  },
  plugins: [require('daisyui')]
};
