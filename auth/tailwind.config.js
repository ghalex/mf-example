const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: colors.pink[100],
          200: colors.pink[200],
          300: colors.pink[300],
          400: colors.pink[400],
          500: colors.pink[500],
          600: colors.pink[600],
          700: colors.pink[700],
          800: colors.pink[800]
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
