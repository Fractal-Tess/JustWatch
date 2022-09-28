const daisyui = require('daisyui');
const defaultTheme = require('tailwindcss/defaultTheme');
const { join } = require('path');

const ui_package_path = join(__dirname, '../ui');

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    `${ui_package_path}/components/**/*.{html,js,ts,tsx}`,
    'src/**/*.{html,js,ts,tsx}',
    'pages/**/*.{html,js,ts,tsx}',
  ],
  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        sans: ['roboto', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'top-xl': '0 -20px 25px -5px rgba(0, 0,  0,  .1)',
      },
      // TODO: Make this more random and subtle
      keyframes: {
        'gradient-keyframes-x': {
          '0%': { 'background-position': 'left' },
          '100%': { 'background-position': 'right' },
        },
      },
      animation: {
        'gradient-animation-x':
          'gradient-keyframes-x 5s linear infinite alternate',
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },

  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
        },
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
        },
      },
    ],
  },
  plugins: [daisyui],
};

module.exports = config;
