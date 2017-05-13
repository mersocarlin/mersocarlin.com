'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.config.development')

const config = require('./config')

const devServer = new WebpackDevServer(webpack(webpackConfig), {
  compress: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  historyApiFallback: true,
  hot: true,
  inline: true,
  publicPath: '/',
  stats: {
    chunks: false,
    colors: true,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
})

devServer.listen(config.PORT, config.IP, (err) => {
  if (err) {
    console.log(err) // eslint-disable-line
  }

  console.log(`\nListening at http://${config.IP}:${config.PORT}`) // eslint-disable-line
})
