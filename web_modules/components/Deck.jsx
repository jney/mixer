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
      play: !!this.props.play,
      track: this.props.track
    };
  },

  render: function(){
    return (
      <div className='deck'>
        <Disk onClick={this.sendToBackground}
              play={this.state.play}
              track={this.state.track} />
        <PitchControlSlider />
      </div>
    );
  },

  sendToBackground: function (e) {
    var track = e.props.track;
    var play = !e.props.play;

    if (track) {
      chrome.tabs.sendMessage(track.tab, {
        cmd: play ? 'play_track' : 'pause_track',
        track: track
      });
    }

    this.setState({ play: play });
  },

  setPlay: function (play) {
    this.setState({
      play: play
    });
  },
});

module.exports = Deck;
