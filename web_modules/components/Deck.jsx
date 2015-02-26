/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');
var PlayButton = require('./PlayButton');
var Vinyl = require('./Vinyl');

require('../../css/components/deck.css');

var Deck = React.createClass({
  render: function(){
    return (
      <div className='deck'>
        <div className='turn-table'>
          <Vinyl onClick={this.sendToBackground} />
          <PlayButton onClick={this.sendToBackground} />
        </div>
      </div>
    );
  },

  sendToBackground: function (e) {
    var track = e.state.track;
    var play = !e.state.play;

    if (track) {
      chrome.tabs.sendMessage(track.tab, {
        cmd: play ? 'play' : 'pause',
        track: track
      });
    }

    e.setState({ play: play });
  },

  setPlay: function (play) {
    this.setState({
      play: play
    });
  },
});

module.exports = Deck;
