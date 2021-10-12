module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('tailwindcss')
    // require('postcss-prefixer')({ prefix: 'auth-' })
  ]
}
