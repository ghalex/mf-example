// const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const dev = {
  mode: 'production'
}

module.exports = merge(common, dev)
