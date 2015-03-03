/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');
var _ = require('lodash');
var Disk = require('./Disk');
var PitchControlSlider = require('./PitchControlSlider');

require('../../css/components/deck.css');

var Deck = React.createClass({

  componentDidMount: function() {
    var that = this;
    chrome.runtime.onMessage.addListener(function (request, sender) {

      if (request.cmd === 'pause_track') {
        that.setState({play: false});
        return;
      }

      if (request.cmd === 'play_track') {
        that.setState({play: true});
        return;
      }

      if (request.cmd === 'update_option_view') {
        that.setState({track: _.last(request.tracks)});
        return;
      }

    });
  },

  getInitialState: function() {
    return {
      play  : !!this.props.play,
      speed : this.props.speed || 0,
      track : this.props.track,
    };
  },

  render: function(){
    return (
      <div className='deck'>
        <Disk onClick={this.sendPlay}
              play={this.state.play}
              track={this.state.track} />
        <PitchControlSlider onChange={this.sendSpeed}
                            track={this.state.track} />
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
