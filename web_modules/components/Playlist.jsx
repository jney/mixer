/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');

var ALLOWED_DROP_EFFECT = 'move';
var DRAG_DROP_CONTENT_TYPE = 'custom_container_type';

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
          data-id={track.id}
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
          onDrop={this.onDrop}>
        <span onClick={this.setTrackFn('left')}>◀</span>
        {JSON.stringify(track)}
        <span onClick={this.setTrackFn('left')}>▶</span>
      </li>
    );
  },

  onDragEnd: function (e) {
    console.log('onDragEnd', arguments);
    console.log('onDragEnd', e.currentTarget);
  },

  onDragStart: function (e) {
    console.log('onDragStart', e.currentTarget.dataset);

    var trackId = e.currentTarget.dataset.id;
    e.dataTransfer.effectAllowed = ALLOWED_DROP_EFFECT;
    e.dataTransfer.setData(DRAG_DROP_CONTENT_TYPE, trackId);

    // this.setState({ selected: selectedIndex });
  },

  onDrop: function () {
    console.log(arguments);
  },

  render: function(){
    return (
      <ul>
        <li draggable={true}
            data-id={this.props.id}
            onDragStart={this.onDragStart}
            onDragEnd={this.onDragEnd}
            onDrop={this.onDrop}>
        </li>
        { this.state.tracks.map(function (track) {
            return this.getTrackTag(track);
          }, this)
        }
      </ul>
    );
  },

  setTrackFn: function (player) {
    return function (e) {
      var trackId = e.currentTarget.parentNode.dataset.id;
      // player.trackId = trackId;
    };
  }

});

module.exports = Playlist;
