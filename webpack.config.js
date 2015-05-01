/* jshint node: true */
var path = require('path');
var webpack = require('webpack');


module.exports = {
  context: path.join(__dirname),
  entry: './lib/index.js',

  output: {
    path: 'build',
    publicPath: 'build/',
    filename: 'mersocarlin.js'
  },

  externals: {
   'react': 'var React'
  },

  resolve: {
    modulesDirectories: ['webmodules', 'node_modules', 'bower_components'],
    extensions: ['', '.js', '.json', 'css', 'sass']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "root.jQuery": "jquery"
    })
  ],

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?outputStyle=expanded&'
        + 'includePaths[]=' + (path.resolve(__dirname, './bower_components'))
        + '&'
        + 'includePaths[]=' + (path.resolve(__dirname, './node_modules'))
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'imports?_=lodash&$=jquery!jsx?harmony!babel-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: "file-loader"
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  }
};
