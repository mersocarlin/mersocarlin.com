const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge, union } = require('lodash')

const config = require('./config')
const webpackBaseConfig = require('./webpack.config.base')

module.exports = merge(webpackBaseConfig, {
  devtool: 'cheap-module-eval-source-map',
  entry: merge(webpackBaseConfig.entry, {
    'webpack-client': `webpack-dev-server/client?${config.HOST}`,
    'only-dev-server': 'webpack/hot/only-dev-server',

    mersocarlin: [
      './src/vendor.js',
      './src/index.js',
    ],
  }),
  output: {
    path: config.paths.appBuild,
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    publicPath: '/',
  },
  plugins: union(webpackBaseConfig.plugins, [
    new HtmlWebpackPlugin({
      inject: true,
      template: `${config.paths.appPath}/src/index.html`,
    }),
    new ExtractTextPlugin('mersocarlin.css'),
    new webpack.HotModuleReplacementPlugin(),
  ]),
})
