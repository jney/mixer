'use strict';

var $ = require('jquery');

function parseParams(str) {
    return str.split('&').reduce(function (params, param) {
        var paramSplit = param.split('=').map(function (value) {
            return decodeURIComponent(value.replace('+', ' '));
        });
        params[paramSplit[0]] = paramSplit[1];
        return params;
    }, {});
}

module.exports = function(player ){
    return {
        id: parseParams(window.location.search.slice(1)),
        image: $('meta[property="og:image"]').attr('content')
    }
}