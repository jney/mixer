'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        'background': './web_modules/background.js',
        'options': './web_modules/options.js',
        'content': './web_modules/content.js'
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
        extensions: ['', '.js']
    },
    devtool: 'source-map'
};