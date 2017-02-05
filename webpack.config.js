const path = require('path');
const webpack = require('webpack');


module.exports = {
  context: path.join(__dirname),
  entry: './src/index.js',

  output: {
    path: 'dist',
    publicPath: 'dist/',
    filename: 'mersocarlin.js',
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
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'GOOGLE_ANALYTICS_ID': JSON.stringify(process.env.GOOGLE_ANALYTICS_ID || 'UA-17163651-1'),
        'GOOGLE_MAPS_API_KEY': JSON.stringify(process.env.GOOGLE_MAPS_API_KEY || 'AIzaSyA946EyUxmKjZBttWpQJBIOdOdaBee8LHc'),
        'MAP_CENTER_LATITUDE': JSON.stringify(process.env.MAP_CENTER_LATITUDE || '52.5205177'),
        'MAP_CENTER_LONGITUDE': JSON.stringify(process.env.MAP_CENTER_LONGITUDE || '13.4014216'),
        'API_SERVICE_URL': JSON.stringify(process.env.API_SERVICE_URL || 'https://mersocarlin-api.herokuapp.com/'),
      },
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?outputStyle=expanded&'
        + 'includePaths[]=' + (path.resolve(__dirname, './bower_components'))
        + '&'
        + 'includePaths[]=' + (path.resolve(__dirname, './node_modules')),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader',
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
};
