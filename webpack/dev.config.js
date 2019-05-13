const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',  // 开发推荐这个
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
  },
  devServer: {
    port: '3000',
    open: true,
  },
}

module.exports = webpackMerge(baseConfig, devConfig)