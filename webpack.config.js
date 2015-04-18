/* jshint node: true */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname),

  entry: {
    poll: ['./lib/index.js']
  },

  output: {
    path: 'build',
    publicPath: '/build/',
    filename: 'mersocarlin.js',
    //libraryTarget: 'umd',
    library: 'Mersocarlin'
  },

  node: {
    fs: "empty"
  },

  resolve: {
    modulesDirectories: ['webmodules', 'node_modules', 'bower_components'],
    extensions: ['', '.js', '.json', 'css', 'sass']
  },

  plugins: [
    /*new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'BRAVI_APPSTORE_APPS_SERVICE_URL': JSON.stringify(process.env.BRAVI_APPSTORE_APPS_SERVICE_URL || 'http://bravi-appstore-apps-service.develop.bravi.com.br'),
        'BRAVI_APPSTORE_AUTH_SERVICE_URL': JSON.stringify(process.env.BRAVI_APPSTORE_AUTH_SERVICE_URL || 'http://bravi-appstore-auth-service.develop.bravi.com.br'),
      }
    }),*/
    new webpack.IgnorePlugin(/vertx/),
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
      },
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?harmony'
      }
    ]
  }
};
