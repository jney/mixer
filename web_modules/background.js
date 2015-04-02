/* jslint node: true */
/* global chrome: true */

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
  console.log('chrome events', request, sender);
  if (request.cmd === 'player_detected') {

    console.log('player detected', request.player);

    // we create a new track in function of the player datas and tab
    var track = _.extend({}, request.player, {
      currentTime: 0,
      loop: true,
      pause: true,
      play: false,
      playbackRate: 0,
      tabId: sender.tab.id,
      volume: 1
    });

    // send created track to the current tab
    notifyTab(track);

    // send the tracks to the options view
    tracks.push(track);
    tracks = _.uniq(tracks, 'id');

    notifyOptionsView(tracks);
    return;
  }

  if ('player' in request) {
    if ('track' in request.player) {
      // send track to tab
      chrome.tabs.sendMessage(request.player.track.tabId, {
        cmd: 'update_track',
        track: request.player.track
      });
    }
  }
});

function notifyTab(track) {
  chrome.tabs.sendMessage(track.tabId, {
    cmd: 'update_track',
    track: track
  });
}

function notifyOptionsView(t) {
  chrome.runtime.sendMessage({
    cmd: 'update_option_view',
    tracks: t
  });
}
