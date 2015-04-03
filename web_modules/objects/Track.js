/* jslint node: true */
/* global chrome: true */

'use strict';

var _ = require('lodash');

var defaults = {
  duration: 0,
  image: chrome.extension.getURL('images/icon48.png')
};

function Track(t) {
  var track = {};

  switch (typeof t) {
    case 'object':
      track = t;
      track.id = t.id || _.uniqueId();
      break;
    case 'undefined':
      track.id = _.uniqueId();
      break;
    default:
      track.id = t;
  }

  return _.defaults(track, defaults);
}

module.exports = Track;
