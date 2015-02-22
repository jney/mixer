/**
 * @see https://developer.mozilla.org/fr/docs/Web/HTML/Utilisation_d%27audio_et_video_en_HTML5
 */

'use strict';

var $ = require('jquery');
var command = require('content/command');
var retrieveData = require('content/retrieve-data');

var player;
var track;
var firstCanPlayListener;

// wait for dom ready
$(function () {

  if ($('video').length > 0) {

    console.log('video detected');
    player = $('video').get(0);

    // on creation
    // we send an event to the bg with a player
    // and receive a track in return
    player.addEventListener('canplay', function firstCanPlayListener() {
      console.log('canplay');
      window.setTimeout(function () {
        player.removeEventListener('canplay', firstCanPlayListener, false);
        chrome.runtime.sendMessage({
          cmd: 'player_detected',
          player: retrieveData(player)
        });
      }, 1000);
    }, false);


    // update a track
    chrome.runtime.onMessage.addListener(function (request) {
      if (request.cmd === 'update_track') {
        console.log('update a track');
        track = request.track;
        command.execute(track, player);
      }
    });

    // on time udate
    player.addEventListener('timeupdate', function () {
      // send an event
    }, false);

  }
});
