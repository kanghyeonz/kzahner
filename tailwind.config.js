const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Crimson Pro has no Hangul; Noto Serif KR supplies it (src/fonts-ko.css)
        primary: ['"Crimson Pro"', '"Noto Serif KR"', ...fontFamily.serif],
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        accent: {
          DEFAULT: 'rgb(94, 114, 228)',
          dim: 'rgb(76, 95, 208)',
          soft: 'rgb(139, 155, 244)',
        },
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
