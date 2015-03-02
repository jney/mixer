/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');
var Deck = require('components/Deck');
var Playlist = require('components/Playlist');

module.exports = React.createClass({

  onDrop: function () {
    console.log(arguments);
  },

  render: function(){
    return (
      <div onDrop={this.onDrop}>
        <Deck />
        <Playlist tracks={[]} />
      </div>
    );
  }
});
