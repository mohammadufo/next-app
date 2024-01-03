/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const customColors = {
  primary: '#6519FF',
  secondary: '#ffdbdb',
  border: '#E3E3E3',
  border_2: '##E9E9E9C7',
  title: '#121212',
  title_2: '#4F4F4F',
  caption: '#B8B8B8',
  span: '#8F8F8F',
  span_2: '#797979',
  orangeCu: '#fabb00',
  error: '#f06f5e',
  bg_primary: '#E7E7F7',
  bgColor1: '#D9C7FFB2',
  bgColor2: '#EDE4FFB2',
  bgColor3: '#F3EDFFB2',
  bg_success: '#F4F8F9',
  bg_warning: '#FFB82A17',
  bg_danger: '#FF5D5D17',
  danger: '#FF5D5D',
  success: '#29A574',
  warning: '#FFB82A',
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1024px',
      '2xl': '1200px',
      '3xl': '1300px',
    },
    fontSize: {
      xxs: '.75rem',
      xs: '.8125rem',
      sm: '.875rem',
      tiny: '.9375rem',
      base: '1rem',
    },
    extend: {
      colors: {
        ...customColors,
      },
      boxShadow: {
        card: '0 2px 8px #00000026',
        'card-hover': '0 5px 12px #0003',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    plugin(function ({ addComponents, matchComponents, theme }) {
      addComponents({
        ':root': {
          ...mapColors(customColors),
        },
        '.container-lg': {
          maxWidth: '1300px',
          width: '100%',
          margin: 'auto',
        },
      })
    }),
  ],
}

const mapColors = (colors) => {
  let object = {}
  for (let item in colors) {
    object[`--color-${item} `] = colors[item]
  }
  return object
}

// content: [
//   './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//   './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//   './src/app/**/*.{js,ts,jsx,tsx,mdx}',
// ],
