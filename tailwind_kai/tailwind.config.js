const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '10vh': '10vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '100vh': '100vh',
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      borderStyle:{
        'double': 'double',
      },
      spacing: {
        'logo': '1.5625rem',
        'menu-bar': '5.3125rem',
        '0.5': '0.125rem',
        '0.75': '0.1875rem',
        '2.5': '0.625rem',
        '3.5': '0.875rem',
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
        '8.5': '2.125rem',
        '9.5': '2.375rem',
        '10.5': '2.625rem',
        '11.5': '2.875rem',
        '12.5': '3.125rem',
        '13.5': '3.375rem',
        '14.5': '3.625rem',
        '15.5': '3.875rem',
        '16.5': '4.125rem',
        '17.5': '4.375rem',
        '18.5': '4.625rem',
        '21': '5.25rem',
        '22.5': '5.625rem',
        '25': '6.25rem',
        '29': '7.25rem',
        '30': '7.5rem',
        '37': '9.25rem',
        '38': '9.5rem',
        '45': '11.25rem',
        '50': '12.5rem',
        '51.5': '12.875rem',
        '61': '15.25rem',
        '72': '18rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '115': '28.75rem',
        '116': '29rem',
        '120': '30rem',
        '125': '31.25rem',
        '140': '35rem',
        '145': '36.25rem',
        '150': '37.5rem',
        '160': '40rem',
        '285': '71.25rem',
        '288': '72rem',
        '290': '72.5rem',
        '293': '73.25rem',
        '300': '75rem',
        '500': '125rem',
      },
      fontFamily: {
        main: ['Open Sans Condensed', 'Tahoma', 'Arial', 'sans-serif'],
        sub: ['Roboto Condensed', 'Tahoma', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '0.1xs': '0.0625rem',
        '0.5xs': '0.8125rem',
        '2.5xl': '1.65rem',
        '4.5xl': '2.5rem',
      },
      inset:{
        '1/2': '50%',
      },
    },
    opacity:{
      '0': '0',
      '10': '0.1',
      '15': '0.15',
      '20': '0.2',
      '25': '0.25',
      '30': '0.3',
      '35': '0.35',
      '40': '0.4',
      '45': '0.45',
      '50': '0.5',
      '55': '0.55',
      '60': '0.6',
      '65': '0.65',
      '70': '0.7',
      '75': '0.75',
      '80': '0.8',
      '85': '0.85',
      '90': '0.9',
      '95': '0.95',
      '100': '1',
    },
    colors: {
      // Build your palette here
      trueGray: colors.trueGray,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      gray: colors.gray,
      warmGray: colors.warmGray,
      rose: colors.rose,
      red: colors.red,
      amber: colors.amber,
      yellow: colors.yellow,
      orange: colors.orange,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      white: colors.white,
      black: colors.black,
      dark: '#181818',
      primary: '#001e46',
    },
    cursor: {
      move: 'move',
      wait: 'wait',
      not_allowed: 'not-allowed',
      grab: 'grab',
      pointer: 'pointer',
    },
    screens: {
      'small': '350px',
      
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      'laptop': '1360px',

      '2xl': '1536px',
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    display: ['responsive', 'group-hover'],
    extend: {
      borderWidth: ['hover', 'focus'],
      fontSize: ['hover', 'focus'],
      fontWeight: ['hover', 'focus'],
      fontFamily: ['hover', 'focus'],
    },
  },
  plugins: [],
}