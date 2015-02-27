/**
 * @see https://developer.mozilla.org/fr/docs/Web/HTML/Utilisation_d%27audio_et_video_en_HTML5
 */

/* jslint node: true */
/* global chrome: true, document: true */

'use strict';

var command = require('content/command');
var retrieveData = require('content/retrieve-data');

var currentId = '';
var player;
var track;
var videos = document.getElementsByTagName('video');

if (videos.length) {
  player = videos[0];
  // on creation
  // we send an event to the bg with a player
  // and receive a track in return
  player.addEventListener('canplay', function() {
    console.log('canplay');
    // get player's data
    var dataPlayer = retrieveData(player);
    // if new player, we send an event to the bg
    if (dataPlayer.id !== currentId) {
      // set new current id
      currentId = dataPlayer.id;
      // player = $('video').get(0);
      // send new player to the server
      chrome.runtime.sendMessage({
        cmd: 'player_detected',
        player: dataPlayer
      });
    }
  }, false);

  // update a track
  chrome.runtime.onMessage.addListener(function(req) {

    if (req.cmd === 'update_track') {
      updateTrack.apply(this, arguments);
      return;
    }

    if (req.cmd === 'play_track') {
      playTrack.apply(this, arguments);
      return;
    }

  });

  // on time udate
  player.addEventListener('timeupdate', function() {
    // send an event
  }, false);

}

function playTrack(req) {
  // track = req.track;
  command.execute(track, player);
}

function updateTrack(req) {
  track = req.track;
  command.execute(track, player);
}
