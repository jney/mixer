'use strict';

var React = require('react');
var Playlist = require('components/Playlist');
var Vinyl = require('components/Vinyl');

// FIXME
var tmpTack = {
    image: chrome.extension.getURL('images/icon48.png'),
};

React.render(
    <Vinyl track={tmpTack} />,
    document.querySelector('.console')
);

React.render(
    <Playlist tracks={[]} />,
    document.querySelector('.playlist')
);
