const webpack = require('webpack')
const { merge, union } = require('lodash')

const webpackConfig = require('./webpack.config.base')

module.exports = merge(webpackConfig, {
  plugins: union(webpackConfig.plugins, [
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),
  ]),
})
