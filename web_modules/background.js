'use strict';

var $ = require('jquery');
var _ = require('lodash');

// executed at the extension installation
chrome.runtime.onInstalled.addListener(function() {
    console.log('on installed');
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.cmd === 'video_detected'){
        console.log('on message video_detected');
        sendResponse(true);
        // return true from the event listener to indicate we wish to send a response asynchronously
        // return true;
    }
});