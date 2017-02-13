const webpack = require('webpack')
const _ = require('lodash')

const webpackConfig = require('./webpack.config.base')

module.exports = _.merge(webpackConfig, {
  plugins: _.union(webpackConfig.plugins, [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: false,
    }),
  ]),
})
