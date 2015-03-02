/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');

var Playlist = React.createClass({

  componentDidMount: function() {
    var that = this;
    chrome.runtime.onMessage.addListener(function (request, sender) {

      if (request.cmd === 'update_option_view') {
        that.setState({tracks: request.tracks});
        return;
      }

    });
  },

  getInitialState: function() {
    return {
      tracks: this.props.tracks || []
    };
  },

  getTrackTag: function (track) {
    return (
      <li draggable={true}
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
          onDrop={this.onDrop}>
        {JSON.stringify(track)}
      </li>
    );
  },

  onDragEnd: function () {
    console.log(arguments);
  },

  onDragStart: function () {
    console.log(arguments);
  },

  onDrop: function () {
    console.log(arguments);
  },

  render: function(){
    return (
      <ul>
        my playlist
        { this.state.tracks.map(function (track) {
            return this.getTrackTag(track);
          }, this)
        }
      </ul>
    );
  }
});

module.exports = Playlist;
