/* jslint node: true */
/* global document: true */

'use strict';

var _ = require('lodash');
var $ = require('jquery');

module.exports = function(player) {
  return {
    begin: 0,
    duration: player.duration,
    end: player.duration,
    id: _.uniqueId(),
    image: $('meta[property="og:image"]').attr('content'),
    name: document.title
  };
};
