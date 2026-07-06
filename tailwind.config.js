const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        mono: ['"IBM Plex Mono"', ...fontFamily.mono],
      },
      colors: {
        accent: {
          DEFAULT: 'rgb(94, 114, 228)',
          dim: 'rgb(76, 95, 208)',
          soft: 'rgb(139, 155, 244)',
        },
      },
      maxWidth: {
        content: '44rem',
      },
    },
  },
  plugins: [],
};
