// const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmlPlugin = require('html-webpack-plugin')

const common = require('./webpack.common')

const dev = {
  mode: 'development',
  devServer: {
    // open: true,
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new HtmlPlugin({
      template: './public/index.html'
    })
  ]
}

module.exports = merge(common, dev)
