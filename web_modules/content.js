/**
 * @see https://developer.mozilla.org/fr/docs/Web/HTML/Utilisation_d%27audio_et_video_en_HTML5
 */

'use strict';

var $ = require('jquery');
var command = require('content/command');
var retrieveData = require('content/retrieve-data');


$(function () {
    var player;
    var track;

    if ($('video').length > 0) {

        player = $('video').get(0);

        // creation
        player.addEventListener('canplay', function () {
            // notify the background to add a new track
            chrome.runtime.sendMessage({
                cmd: 'player_detected',
                player: retrieveData(player)
            }, function(ret){
                track = ret;
                alert('track created');
            });
        }, false);


        // time udate
        player.addEventListener('timeupdate', function () {
            // send an event
        }, false);

    }
});