/* jslint node: true */
/* global chrome: true */

'use strict';

var React    = require('react');

// components
var Console  = require('components/Console');
var Deck     = require('components/Deck');
var Playlist = require('components/Playlist');

// objects
var Player      = require('objects/Player');
var leftPlayer  = Player('left');
var rightPlayer = Player('right');

module.exports = React.createClass({

  componentDidMount: function() {
    chrome.runtime.onMessage.addListener(function (request, sender) {
      // TODO
      if ('tracks' in request) {
        console.log('should update tracks with', request.tracks);
        this.setState({ tracks: request.tracks });
      }
    }.bind(this));
  },

  getInitialState: function() {
    return {
      leftPlayer  : leftPlayer,
      rightPlayer : rightPlayer,
      tracks      : [],
    };
  },

  onDrop: function () {
    console.log(arguments);
  },

  render: function(){
    return (
      <div onDrop={this.onDrop}>
        <Deck
          player={this.state.leftPlayer}
          update={this.update} />
        <Console
          players={[ this.state.leftPlayer, this.state.rightPlayer ]}
          update={this.update} />
        <Deck
          player={this.state.rightPlayer}
          update={this.update} />
        <Playlist
          players={[ this.state.leftPlayer, this.state.rightPlayer ]}
          tracks={this.state.tracks}
          update={this.update} />
      </div>
    );
  },

  // update everything
  // update a track :
  // { track: trackObject }
  // update a player :
  // { player: playerObject }
  update: function (d) {
    d.from = 'client';
    chrome.runtime.sendMessage(d);
  },
});
