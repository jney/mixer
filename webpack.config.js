'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    // our different entries
    entry: {
        'background': './web_modules/background.js',
        'options': './web_modules/options.js',
        'content': './web_modules/content.js',
        'popup': './web_modules/popup.jsx'
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
            path.resolve('web_modules')
        ],
        // allowed extensions
        extensions: ['', '.js', '.jsx'],
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
            { test: /\.jsx$/, loader: 'jsx-loader'}
        ]
    }
    /*,
    devtool: 'source-map'*/
};