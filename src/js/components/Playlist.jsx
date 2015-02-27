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

  render: function(){
    return (
      <ul>
        my playlist
        {
          this.state.tracks.map(function (track) {
            return <li>{JSON.stringify(track)}</li>;
          })
        }
      </ul>
    );
  }
});

module.exports = Playlist;
