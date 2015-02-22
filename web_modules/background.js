'use strict';

var $ = require('jquery');
var _ = require('lodash');

var tracks = [];

// executed at the extension installation
chrome.runtime.onInstalled.addListener(function () {
  tracks = [];
  console.log('on installed');
});

// new player detected
chrome.runtime.onMessage.addListener(function (request, sender) {
  if (request.cmd === 'player_detected') {

    console.log('player detected', request.player);

    // we create a new track in function of the player datas and tab
    var newTrack = _.extend({}, request.player, {
      tab: sender.tab.id,
      volume: 1,
      currentTime: 0,
      loop: true,
      pause: true,
      play: false,
      playbackRate: 0
    });

    // send created track to the current tab
    notifyTab(newTrack);

    // send the tracks to the options view
    notifyOptionsView(tracks);
  }
});

function notifyTab(track) {
  console.log('tab id', track.tab);
  console.log('track', track);
  chrome.tabs.sendMessage(track.tab, {
    cmd: 'update_track',
    track: track
  });
};

function notifyOptionsView(tracks) {
  chrome.runtime.sendMessage({
    cmd: 'update_option_view',
    tracks: tracks
  });
};

