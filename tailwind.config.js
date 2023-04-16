/** @type {import('tailwindcss').Config} */

const colors = {
  primary: {
    '40': '#bdacd3',
    '70': '#8c6db2',
    '500': '#5b2f91',
    '600': '#351f65',
  },
  mango: '#fcd141',
  'primary-blue': '#005c95',
  'primary-hover': '#241a49',
  blackish: '#0a0a0a',
  white: '#ffffff',
  'off-white': '#f1f4f8',
  'danger-hover': '#e32626',
  coral: '#ee543e',
  black: '#000000',
  'danger-bg': '#fce8e8',
  'baseline-blue': '#27accd',
  blue: {
    '40': '#a9deeb',
    '70': '#68c5dc',
  },
  teal: '#008080',
  'secondary-hover': '#00325e',
  warning: '#eda333',
  success: '#40700b',
  info: '#0496b8',
  danger: '#ff0000',
  'gray-default': '#96999c',
  disabled: '#d9d9d6',
  'info-hover': '#007c99',
  'success-hover': '#2d5303',
};

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
}
