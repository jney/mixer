'use strict';

var React = require('react');
var Playlist = require('components/Playlist');
var Deck = require('components/Deck');


React.render(
    <Deck />,
    document.querySelector('.console')
);

React.render(
    <Playlist tracks={[]} />,
    document.querySelector('.playlist')
);
