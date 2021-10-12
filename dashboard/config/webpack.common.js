require('dotenv').config({ path: './.env' })

const path = require('path')
const webpack = require('webpack')

const { VueLoaderPlugin } = require('vue-loader')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const rootFolder = path.resolve(__dirname, '..')

module.exports = {
  entry: './src/bootstrap.ts',
  output: {
    publicPath: 'http://localhost:8082/',
    filename: '[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, '..', 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'babel-loader'

      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader'

      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [{ loader: 'file-loader' }]
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './Main': './src/index'
      },
      shared: require(rootFolder + '/package.json').dependencies
      // shared: {
      //   vue: { singleton: true, eager: true },
      //   'vue-router': { singleton: true }
      // }
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ]
}
