'use strict';

var $ = require('jquery');
var _ = require('lodash');

var tracks = [];

// executed at the extension installation
chrome.runtime.onInstalled.addListener(function() {
    console.log('on installed');
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.cmd === 'track_detected'){
        console.log('on message track_detected');
        console.log(sender);
        sendResponse();
        tracks.push(request.track);
        chrome.runtime.sendMessage({
            cmd: 'update_option_view',
            tracks: tracks
        });
    }
});

