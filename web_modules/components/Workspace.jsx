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

      if (request.cmd === 'pause_track') {
        this.setState({play: false});
        return;
      }

      if (request.cmd === 'play_track') {
        this.setState({play: true});
        return;
      }

      if (request.cmd === 'update_option_view') {
        var player = this.state.leftPlayer;
        player.track = _.last(request.tracks);
        this.setState({leftPlayer: player});
        return;
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
    console.log(d);
    chrome.runtime.sendMessage(d);
  },
});
