'use strict';

var $ = require('jquery');
var _ = require('lodash');

var tracks = [];

// executed at the extension installation
chrome.runtime.onInstalled.addListener(function() {
    tracks = [];
    console.log('on installed');
});

// new player detected
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.cmd === 'player_detected'){
        console.log(sender);

        // we create a new track in function of the player datas and tab
        var newTrack = _.extend({}, request.player, {
            tab: sender.id,
            volume: 1,
            currentTime: 0,
            loop: true,
            pause: true,
            play: false,
            playbackRate: 1
        });

        console.log(newTrack);

        // send created track to the current tab
        sendResponse(newTrack);

        // send the tracks to the options view
        chrome.runtime.sendMessage({
            cmd: 'update_option_view',
            tracks: tracks
        });
    }
});

