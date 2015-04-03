/**
 * @see https://developer.mozilla.org/fr/docs/Web/HTML/Utilisation_d%27audio_et_video_en_HTML5
 */

/* jslint node: true */
/* global chrome: true, document: true */

'use strict';

var retrieveData = require('content/retrieve-data');
var videos = document.getElementsByTagName('video');

if (videos.length) {
  // for now we just handle one element per page
  var trackEl = videos[0];

  console.log('should pause but it does not');
  trackEl.pause();

  // on creation
  // we send an event to the bg with a player
  // and receive a track in return
  trackEl.addEventListener('canplay', function() {
    console.log('canplay');
    // get player's data
    var track = retrieveData(trackEl);
    trackEl.dataset.cylonId = track.id;

    // send new player to the server
    chrome.runtime.sendMessage({
      from: 'content',
      track: track
    });
  }, false);

  // update a track
  chrome.runtime.onMessage.addListener(function(msg) {

    if ('player' in msg) {
      if (msg.player.play === true) {
        trackEl.play();
        return;
      }

      if (msg.player.play === false) {
        trackEl.pause();
        return;
      }
    }
  });

  // on time update
  trackEl.addEventListener('timeupdate', function() {
    // send an event
  }, false);

}
