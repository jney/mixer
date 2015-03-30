/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');
var _ = require('lodash');
var Disk = require('./Disk');
var PitchControlSlider = require('./PitchControlSlider');

require('../../css/components/deck.css');

var Deck = React.createClass({

  getInitialState: function() {
    return {
      play  : !!this.props.play,
      speed : this.props.speed || 0,
      track : this.props.track,
    };
  },

  onDrop: function () {
    console.log('onDrop', arguments);
  },

  render: function(){
    return (
      <div className='deck'>
        <Disk onClick={this.sendPlay}
              onDragOver={this.onDragOver}
              onDrop={this.onDrop}
              player={this.props.player}
              update={this.props.update} />
        <PitchControlSlider update={this.props.update}
                            player={this.props.player} />
      </div>
    );
  },

  sendPlay: function (play) {
    var track = this.state.track;

    if (track) {
      chrome.tabs.sendMessage(track.tab, { player: { play: play }});
    }

    this.setState({ play: play });
  },

  sendSpeed: function (speed) {
    var track = this.state.track;

    if (track) {
      chrome.tabs.sendMessage(track.tab, { player: { speed: speed }});
    }

    this.setState({ speed: speed });
  },

  setPlay: function (play) {
    this.setState({
      play: play
    });
  },
});

module.exports = Deck;
