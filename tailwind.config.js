/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        text: '#fbfbeb',
        100: '#f6f4cb',
        200: '#eee89a',
        300: '#e4d560',
        400: '#dbc134',
        500: '#BEA024',
        600: '#af881f',
        700: '#8c631c',
        800: '#75501e',
        900: '#64431f',
        950: '#3a230e',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        80: '92px',
      },
      animation: {
        slidein: 'slidein 1s ease var(--slidein-delay, 0) forwards',
      },
      keyframes: {
        slidein: {
          from: {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
