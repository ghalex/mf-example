const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ece9fd',
          200: colors.purple[200],
          300: colors.purple[300],
          400: colors.purple[400],
          500: colors.purple[500],
          600: '#6b47c0',
          700: colors.purple[700],
          800: colors.purple[800]
        }
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['group-focus']
    }
  },
  plugins: [],
  purge: [
    './src/components/**/*.vue',
    './src/pages/**/*.vue',
    './src/**/*.vue'
  ],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  }
}
