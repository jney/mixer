'use strict';

var React = require('react');
var Vinyl = require('./Vinyl');

require('../../css/components/deck.css');

// FIXME
var tmpTrack = {
    image: chrome.extension.getURL('images/icon48.png'),
};

var Deck = React.createClass({
    render: function(){
        return (
            <div>
            <Vinyl track={tmpTrack} />
            <Vinyl track={tmpTrack} />
            </div>
        );
    }
});

module.exports = Deck;
