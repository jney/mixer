'use strict';

// describe player attributes types for execute method
var playerAttr = {
  volume: 'attr',
  currentTime: 'attr',
  loop: 'attr',
  pause: 'function',
  play: 'function',
  playbackRate: 'attr'
};

module.exports = {
  /**
   * execute a set of cmd in a player
   * @param cmd
   * @param player
   */
  execute: function (track, player) {
    var key;
    for (key in track) {
      if (key in playerAttr) {
        if (playerAttr[key] === 'attr') {
          player[key] = track[key];
          console.log('execute command', key + ' = ' + track[key]);
        } else if (playerAttr[key] === 'function') {
          if(track[key]){
            player[key]();
            console.log('execute command', player[key] + '()');
          }
        }
      }
    }
  }
};
