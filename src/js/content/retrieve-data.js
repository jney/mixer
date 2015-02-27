/* jslint node: true */
/* global window: true */

'use strict';

var $ = require('jquery');

function parseParams(str) {
  return str.split('&').reduce(function(params, param) {
    var paramSplit = param.split('=').map(function(value) {
      return decodeURIComponent(value.replace('+', ' '));
    });
    params[paramSplit[0]] = paramSplit[1];
    return params;
  }, {});
}

module.exports = function(player) {
  return {
    begin: 0,
    duration: player.duration,
    end: player.duration,
    id: parseParams(window.location.search.slice(1)).v,
    image: $('meta[property="og:image"]').attr('content'),
  };
};
