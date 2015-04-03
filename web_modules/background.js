/* jslint node: true */
/* global chrome: true */

'use strict';

var _ = require('lodash');
var Track = require('objects/Track');

var tracks = [];

// executed at the extension installation
chrome.runtime.onInstalled.addListener(function() {
  // TODO
  // Get tracks from stored data
  console.log('Cylon installed');
  tracks = [];
});

// new player detected
chrome.runtime.onMessage.addListener(function(request, sender) {
  console.log('chrome events', request, sender);
  if ('track' in request) {

    // send the tracks to the options view
    tracks.push(request.track);

    chrome.runtime.sendMessage({
      from: 'background',
      tracks: tracks
    });

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
