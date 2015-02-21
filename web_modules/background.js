'use strict';

var $ = require('jquery');
var _ = require('lodash');

var tracks = [];

// executed at the extension installation
chrome.runtime.onInstalled.addListener(function() {
    console.log('on installed');
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.cmd === 'player_detected'){
        console.log(sender);
        sendResponse();

        // a player
        console.log(cmd.player);

        // we create a new track in function of the player datas and tab
        var newTrack = {

        };

        // send the tracks to the options view
        chrome.runtime.sendMessage({
            cmd: 'update_option_view',
            tracks: tracks
        });

        // send created track to the current tab
        sendResponse(newTrack);
    }
});

