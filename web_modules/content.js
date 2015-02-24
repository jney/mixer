/**
 * @see https://developer.mozilla.org/fr/docs/Web/HTML/Utilisation_d%27audio_et_video_en_HTML5
 */

'use strict';

var $ = require('jquery');
var command = require('content/command');
var retrieveData = require('content/retrieve-data');

var player;
var track;
var currentId = '';

// wait for dom ready
$(function() {

  if ($('video').length > 0) {
    player = $('video').get(0);
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
        player = $('video').get(0);
        // send new player to the server
        chrome.runtime.sendMessage({
          cmd: 'player_detected',
          player: dataPlayer
        });
      }
    }, false);

    // update a track
    chrome.runtime.onMessage.addListener(function(request) {
      if (request.cmd === 'update_track') {
        console.log('update a track', request.track);
        track = request.track;
        command.execute(track, player);
        console.log('player updated', player);
      }
    });

    // on time udate
    player.addEventListener('timeupdate', function() {
      // send an event
    }, false);

  }
});
