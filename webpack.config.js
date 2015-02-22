'use strict';

var webpack = require('webpack');
var path = require('path');

var autoprefixer = require('autoprefixer-core');
var csswring = require('csswring');
var postcssImport = require('postcss-import');

module.exports = {
  context: path.join(__dirname, 'web_modules'),
  // our different entries
  entry: {
    'background': 'background',
    'options': 'options',
    'content': 'content',
    'popup': 'popup'
  },
  // output configuration
  output: {
    path: './chrome_extension/js',
    filename: '[name].js'
  },
  resolve: {
    // modules dir
    root: [
      path.resolve('node_modules'),
      path.resolve('web_modules'),
      path.resolve('sass')
    ],
    // allowed extensions
    extensions: ['', '.js', '.jsx', '.css'],
    // alias for vendors
    alias: {
      jquery: path.join(__dirname, 'node_modules/jquery/dist/jquery.js'),
      react: path.join(__dirname, 'node_modules/react/addons.js'),
      lodash: path.join(__dirname, 'node_modules/lodash/index.js')
    }
  },
  module: {
    // specific loaders
    loaders: [
      // jsx
      {
        test: /\.jsx$/,
        loader: 'jsx-loader'
      },
      {
        test: /\.css$/,
        // Passing indentedSyntax query param to node-sass
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  postcss: [postcssImport, autoprefixer, csswring]
  /*,
  devtool: 'source-map'*/
};
