/* jslint node: true */

'use strict';

var _ = require('lodash');

var defaults = {
  loop: false,
  play: false,
  playbackRate: 1,
  quality: 1,
  volume: 1,
};

function Player(p) {
  var player = {};

  switch (typeof p) {
    case 'object':
      this.id = p.id || _.uniqueId();
      player = p;
      break;
    case 'undefined':
      this.id = _.uniqueId();
      break;
    default:
      this.id = p;
  }

  this.loop = player.loop || defaults.loop;
  this.play = player.play || defaults.play;
  this.playbackRate = player.playbackRate || defaults.playbackRate;
  this.quality = player.quality || defaults.quality;
  this.volume = player.volume || defaults.volume;
}

module.exports = Player;
