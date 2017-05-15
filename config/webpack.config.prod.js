const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const { merge, union } = require('lodash')

const config = require('./index')
const webpackConfig = require('./webpack.config.base')

module.exports = merge(webpackConfig, {
  devtool: 'source-map',
  entry: {
    vendor: './src/vendor.js',
    mersocarlin: './src/index.js',
  },
  output: {
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    filename: '[name].[chunkhash:8].js',
    path: config.paths.appBuild,
    publicPath: config.paths.publicPath,
    sourceMapFilename: '[name].map',
  },
  plugins: union(webpackConfig.plugins, [
    new HtmlWebpackPlugin({
      inject: true,
      filename: '../index.html',
      template: `${config.paths.appPath}/src/index.html`,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new ExtractTextPlugin('[name].[chunkhash:8].css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
  ]),
})
