'use strict';

var React = require('react');
var PlayButton = require('./PlayButton');
var Vinyl = require('./Vinyl');

require('../../css/components/deck.css');

// FIXME
var tmpTrack = {
    image: chrome.extension.getURL('images/icon48.png'),
};

var Deck = React.createClass({
    render: function(){
        return (
            <div className='deck'>
                <div className='turn-table'>
                    <Vinyl play={false} track={null} />
                    <PlayButton play={false} />
                </div>
                <div className='turn-table'>
                    <Vinyl play={false} track={null} />
                    <PlayButton play={false} />
                </div>
            </div>
        );
    },
    setPlay: function (play) {
        this.setState({
            play: play
        });
    },
});

module.exports = Deck;
