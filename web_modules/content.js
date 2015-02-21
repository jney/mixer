/**
 * @see https://developer.mozilla.org/fr/docs/Web/HTML/Utilisation_d%27audio_et_video_en_HTML5
 */

'use strict';

var $ = require('jquery');
var command = require('content/command');
var retrieveId = require('content/retrieve-id');


$(function () {
    var track;

    if ($('video').length > 0) {

        track = $('video').get(0);

        // first
        var listenerCreation = track.addEventListener('play', function () {
            // put the track on pause at the currentTime 0
            // send an event
            // and destroy the listener
            // on video detected
            chrome.runtime.sendMessage({
                cmd: 'track_detected',
                track: {
                    image: 'http://img.youtube.com/vi/jUstsqkRLeY/hqdefault.jpg'
                }
            });
        }, false);

        // time udate
        track.addEventListener('timeupdate', function () {
            // send an event
        }, false);




    }
});