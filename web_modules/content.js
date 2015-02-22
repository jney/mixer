/**
 * @see https://developer.mozilla.org/fr/docs/Web/HTML/Utilisation_d%27audio_et_video_en_HTML5
 */

'use strict';

var $ = require('jquery');
var command = require('content/command');
var retrieveData = require('content/retrieve-data');

var player;
var track;

// wait for dom ready
$(function () {

    if ($('video').length > 0) {

        player = $('video').get(0);

        // on creation
        // we send an event to the bg with a player
        // and receive a track in return
        player.addEventListener('canplay', function () {
            console.log('toto');
            chrome.runtime.sendMessage({
                cmd: 'player_detected',
                player: retrieveData(player)
            });
        }, false);

        // update a track
        chrome.runtime.onMessage.addListener(function(request){
            if(request.cmd === 'update_track'){
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