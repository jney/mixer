/**
 * Created by nicolasmondon on 16/02/15.
 */

var $ = require('jquery');
var command = require('video/command');

$(function(){
    var player;
    if($('video').length > 0){
        player = $('video').get(0);

        // on video detected
        chrome.runtime.sendMessage({
            cmd: 'track_detected',
            track: {
                image: 'http://img.youtube.com/vi/jUstsqkRLeY/hqdefault.jpg'
            }
        }, function(ret){
            //command.execute(ret, player);
        });
    }
});