/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');
var Deck = require('./Deck');
var Playlist = require('./Playlist');

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
