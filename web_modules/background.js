'use strict';

var _ = require('lodash');

var tracks = [];

// executed at the extension installation
chrome.runtime.onInstalled.addListener(function() {
  tracks = [];
  console.log('on installed');
});

// new player detected
chrome.runtime.onMessage.addListener(function(request, sender) {
  console.log('chrome events', arguments);
  if (request.cmd === 'player_detected') {

    console.log('player detected', request.player);

    // we create a new track in function of the player datas and tab
    var track = _.extend({}, request.player, {
      tab: sender.tab.id,
      volume: 1,
      currentTime: 0,
      loop: true,
      pause: true,
      play: false,
      playbackRate: 0
    });

    // send created track to the current tab
    notifyTab(track);

    // send the tracks to the options view
    tracks.push(track);
    notifyOptionsView(tracks);
    return;
  }

});

function notifyTab(track) {
  chrome.tabs.sendMessage(track.tab, {
    cmd: 'update_track',
    track: track
  });
}

function notifyOptionsView(tracks) {
  chrome.runtime.sendMessage({
    cmd: 'update_option_view',
    tracks: tracks
  });
}
