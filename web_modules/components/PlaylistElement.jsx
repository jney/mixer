/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');

var ALLOWED_DROP_EFFECT = 'move';
var DRAG_DROP_CONTENT_TYPE = 'custom_container_type';

var Playlist = React.createClass({
  render: function (track) {
    return (
      <li draggable={true}
          data-id={track.id}
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
          onDrop={this.onDrop}>
        <span onClick={this.setTrackFn(this.props.players[0])}>
          ◀
        </span>
        {JSON.stringify(track)}
        <span onClick={this.setTrackFn(this.props.players[1])}>
          ▶
        </span>
      </li>
    );
  },

  setTrackFn: function (player) {
    return function (e) {
      var trackId = e.currentTarget.parentNode.dataset.id;
      // player.trackId = trackId;
    };
  }
});
