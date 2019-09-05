const merge = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8000
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV:JSON.stringify('development')
      }
    })
  ]
})