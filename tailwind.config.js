/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#70C7BA',
        'primary-dark': '#49EACB',
        background: '#1B1D29',
        'card-bg': '#231F20',
        'border-color': 'rgba(112, 199, 186, 0.2)',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B6B6B6',
      },
      boxShadow: {
        'primary-lg': '0 4px 15px rgba(112, 199, 186, 0.15)',
      },
    },
  },
  plugins: [],
};