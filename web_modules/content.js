/**
 * Created by nicolasmondon on 16/02/15.
 */

var $ = require('jquery');
var command = require('video/command');

$(function(){
    var player;
    if($('.html5-video-container').length > 0){
        player = $('.html5-main-video').get(0);

        // on video detected
        chrome.runtime.sendMessage({
            cmd: 'video_detected'
        }, function(ret){
            command.execute(ret, player);
        });
    }
});