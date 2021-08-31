const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const rootFolder = path.resolve(__dirname, '..')

module.exports = {
  entry: './src/bootstrap.ts',
  output: {
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
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      // remoteType: 'var',
      remotes: {
        auth: 'auth@http://localhost:8081/remoteEntry.js'
      },
      shared: require(rootFolder + '/package.json').dependencies
      // shared: {
      //   vue: { singleton: true },
      //   'vue-router': { singleton: true }
      // }
    }),
    new VueLoaderPlugin()
  ]
}
