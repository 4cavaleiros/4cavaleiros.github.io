var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './public/js/index',
  ],
  output: {
    filename: 'static/bundle.js',
    path: path.join(__dirname, './dist'),
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.DefinePlugin({
      '__DEVTOOLS__': false,
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.jade',
      favicon: './public/img/favicons/favicon.ico',
      inject: false
    }),
    new CopyWebpackPlugin([
      { from: 'public/img', to: 'static/img' },
      { from: 'public/video', to: 'static/video' },
      { from: 'CNAME' },
    ]),
  ],
  resolve: {
    extensions: ['', '.js', '.styl'],
    root: '../'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'stage-0']
      },
    }, {
      test: /(\.styl)$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader'),
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
    }, {
      test: /.\.jade$/,
      loader: 'jade-loader'
    },
    { test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url' },
    { test: /\.(png|jpg|webm)$/, loader: 'url' },
    { test: /\.(json)$/, loader: 'json' }
    ]
  }
};

