/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      fontFamily: {
        sans: ['Montserrat', '"Poppins"', '"Lora"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        dmSans: ['DM Sans'],
      },
      screens: {
        'max-sm': { max: '480px' },
        'max-md': { max: '640px' },
        'max-lg': { max: '768px' },
        'max-xl': { max: '1024px' },
      },
      fontSize: {
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '4px': '4px',
        '5px': '5px',
        '6px': '6px',
        '7px': '7px',
        '8px': '8px',
        '9px': '9px',
        '10px': '10px',
        '11px': '11px',
        '12px': '12px',
        '10px': '10px',
        '20px': '20px',
        '24px': '24px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
        '90%': '90%',
        '43%': '43%',
        '52px': '52px',
      },
      borderRadius: {
        br: '0.625rem',
        4: '4px',
      },
      colors: {
        'pry-blue': '#0A35A6',
        black: colors.black,
        blue: colors.blue,
        red: colors.rose,
        warning: colors.yellow,
        purple: '#6C6CFF',
        'faded-purple': '#F2F2FF',
        success: colors.green,
        header: '#4B4B4B',
        layout: '#f3f5f8',
        bar: '#ffa800',
        gray: {
          10: '#FDFDFD',
          100: '#F0F0F0',
          200: '#d3d3d3',
          300: '#bdbdbe',
          400: '#a7a7a8',
          500: '#919192',
          600: '#7A797D',
          700: '#656566',
          800: '#4f4f51',
          900: '#39393b',
          main: '#7A797D',
        },
        primary: {
          100: '#e6ebf6',
          200: '#cdd7ed',
          300: '#b3c2e4',
          400: '#9aaedb',
          500: '#819ad3',
          600: '#6886ca',
          700: '#4f72c1',
          800: '#355db8',
          900: '#1c49af',
          main: '#0335a6',
        },
        secondary: {
          100: '#e6f7f9',
          200: '#ccf0f3',
          300: '#b3e8ed',
          400: '#99e1e7',
          500: '#80d9e1',
          600: '#66d1db',
          700: '#4dcad5',
          800: '#33c2cf',
          900: '#1abbc9',
          main: '#00B3C3',
        },
        tertiary: {
          100: '#fff1f4',
          200: '#7f9bd3',
          300: '#ffd4de',
          400: '#ffc5d3',
          500: '#ffb7c8',
          600: '#ffa9bd',
          700: '#ff9ab2',
          800: '#ff8ca7',
          900: '#23418e',
          main: '#FF6F91',
        },
        blue: {
          100: '#F7F7F9',
        },
        border: {
          100: '#DDDDDD',
        },
        green: '#23AC83',
        white: '#ffffff',
        'th-primary': 'var(--primary)',
        'th-tertiary': 'var(--tertiary)',
        'th-gray': 'var(--gray)',
        'th-secondary': 'var(--secondary)',
      },
      animation: {
        scaleSideBarNav: 'scaleSideBarNav 300ms ease-in-out forwards',
        scaleComment: 'scaleComment 800ms ease',
        slide: 'slide 500ms ease',
        slideBack: 'slideBack 500ms ease',
        shake: 'shake 500ms ease',
        scaleModal: 'scaleModal 500ms ease-in-out',
        rotate: 'rotate infinite 1.5s linear'
      },
      keyframes: {
        scaleSideBarNav: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      keyframes: {
        scaleComment: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
      },
      keyframes: {
        slideBack: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
      keyframes: {
        shake: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      keyframes: {
        scaleModal: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      keyframes: {
        rotate: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'}
        }
      }
    },
  },
  variants: {},
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
}
