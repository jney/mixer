'use strict';

var React = require('react');

// components
var Deck = require('components/Deck');
var Playlist = require('components/Playlist');


React.render(
    <Deck />,
    document.querySelector('.console')
);

React.render(
    <Playlist tracks={[]} />,
    document.querySelector('.playlist')
);
