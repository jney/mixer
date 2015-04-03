/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');

var ALLOWED_DROP_EFFECT = 'move';
var DRAG_DROP_CONTENT_TYPE = 'custom_container_type';

var PlaylistElement = React.createClass({
  render: function () {
    return (
      <li>
        <span onClick={this.addToPlayer(this.props.players[0])}>
          add left
        </span>
        {this.props.track.name}
        <span onClick={this.addToPlayer(this.props.players[1])}>
          add right
        </span>
      </li>
    );
  },

  addToPlayer: function (player) {
    return function (e) {
      var trackId = e.currentTarget.parentNode.dataset.id;
      // player.trackId = trackId;
    };
  }
});

module.exports = PlaylistElement;
