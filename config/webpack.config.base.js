const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
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
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{ loader: 'babel-loader' }],
    },
    {
      test: /\.s?css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader!sass-loader',
      }),
    },
    {
      test: /\.(png|jpg|jpeg|gif)($|\?)/,
      use: [{ loader: 'file-loader' }],
    }, {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    }],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
}