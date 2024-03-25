/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      maxWidth: {
        base: '87.5rem',
        511: '31.9375rem',
        618: '38.625rem',
      },
      screens: {
        xs: '30rem',
        '2xl': '90rem',
      },
      fontFamily: {
        manrope: ['Manrope', 'Sans-serif'],
        forma: ['Forma DJR Cyrilic Variable', 'Sans-serif'],
      },
      colors: {
        brand: {
          primary: '#235560',
          green: '#235560',
          'light-primary': '#F1FCF8',
          'light-input': '#F7F9FA',
          whitish: '#F7F7F7',
          dark: '#0B0B0B',
          'dark-2': '#2F2F2F',
          'light-green': '#9DDC21',
          gray: {
            100: '#999999',
            200: '#5E5E5E',
            300: '#4B4B4B',
            400: '#8C8C8C',
            500: '#F3F3F3',
          },
        },
      },
      fontSize: {
        30: '1.875rem',
      },
      padding: {
        base: '3.75rem',
      },
      spacing: {
        100: '6.25rem',
        360: '22.5rem',
      },
      borderRadius: {
        20: '1.25rem',
        30: '1.875rem',
      },
      dropShadow: {
        box: '0px 4px 20px 0px #0000000D',
      },
      boxShadow: {
        list: '0px 10px 20px 0px #0000001A',
        button: '0px 4px 20px 0px #0000001F',
      },
      backgroundImage: {
        farm: "url('../assets/images/img-factory.png')",
        block:
          'linear-gradient(104.28deg, rgba(0, 0, 0, 0.49) 46.14%, rgba(0, 0, 0, 0.21) 77%)',
      },
    },
  },
  plugins: [],
};
