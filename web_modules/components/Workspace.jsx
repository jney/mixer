/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');
var Deck = require('components/Deck');
var Playlist = require('components/Playlist');

module.exports = React.createClass({
  render: function(){
    return (
      <div>
        <Deck />
        <Playlist tracks={[]} />
      </div>
    );
  }
});
