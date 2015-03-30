/* jslint node: true */

'use strict';

var _ = require('lodash');

var defaults = {
  loop: false,
  play: false,
  playbackRate: 1,
  quality: 1,
  volume: 1
};

function Player(p) {
  var player = {};

  switch (typeof p) {
    case 'object':
      player = p;
      player.id = p.id || _.uniqueId();
      break;
    case 'undefined':
      player.id = _.uniqueId();
      break;
    default:
      player.id = p;
  }

  return _.defaults(player, defaults);
}

module.exports = Player;
