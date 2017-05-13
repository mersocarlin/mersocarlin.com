'use strict'

const path = require('path')
const { merge } = require('lodash')

const appConfig = {
  IP: 'localhost',
  PORT: '8080',

  paths: {
    appPath: __dirname,
    appBuild: path.join(__dirname, 'dist'),
    publicPath: '/dist',
  },
}

module.exports = merge(appConfig, {
  HOST: `http://${appConfig.IP}:${appConfig.PORT}`,
})
