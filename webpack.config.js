const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    mersocarlin: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        GOOGLE_ANALYTICS_ID: JSON.stringify(process.env.GOOGLE_ANALYTICS_ID || 'UA-17163651-1'),
        GOOGLE_MAPS_API_KEY: JSON.stringify(process.env.GOOGLE_MAPS_API_KEY || 'AIzaSyA946EyUxmKjZBttWpQJBIOdOdaBee8LHc'),
        MAP_CENTER_LATITUDE: JSON.stringify(process.env.MAP_CENTER_LATITUDE || '52.5205177'),
        MAP_CENTER_LONGITUDE: JSON.stringify(process.env.MAP_CENTER_LONGITUDE || '13.4014216'),
        API_SERVICE_URL: JSON.stringify(process.env.API_SERVICE_URL || 'https://mersocarlin-api.herokuapp.com/'),
      },
    }),
    new ExtractTextPlugin('[name].css'),
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.s?css$/, loader: ExtractTextPlugin.extract('style', 'css!sass', { publicPath: './' }) },
      { test: /\.(png|jpg|jpeg|gif)$/, loader: 'file' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=50000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' },
    ],
  },
}
