'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        'background': './web_modules/background.js',
        'options': './web_modules/options.js',
        'content': './web_modules/content.js',
        'popup': './web_modules/popup.js'
    },
    output: {
        path: './chrome_extension/js',
        filename: '[name].js'
    },
    resolve: {
        root: [
            path.resolve('node_modules'),
            path.resolve('web_modules')
        ],
        extensions: ['', '.js'],
        alias: {
            jquery: path.join(__dirname, 'node_modules/jquery/dist/jquery.js'),
            react: path.join(__dirname, 'node_modules/react/addons.js'),
            lodash: path.join(__dirname, 'node_modules/lodash/index.js')
        }
    }/*,
    devtool: 'source-map'*/
};