/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');
var PlaylistElement = require('components/PlaylistElement');

var ALLOWED_DROP_EFFECT = 'move';
var DRAG_DROP_CONTENT_TYPE = 'custom_container_type';

var Playlist = React.createClass({

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
        { this.props.tracks.map(function (track) {
            return (
              <PlaylistElement
                players={this.props.player}
                track={track} />
            )
          }, this)
        }
      </ul>
    );
  },

});

module.exports = Playlist;
