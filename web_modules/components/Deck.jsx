/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');
var _ = require('lodash');
var Disk = require('./Disk');
var PitchControlSlider = require('./PitchControlSlider');

require('../../css/components/deck.css');

var Deck = React.createClass({

  getInitialState: function () {
    return {
      play  : !!this.props.play,
      speed : this.props.speed || 0,
      track : this.props.track,
    };
  },

  onDrop: function () {
    console.log('onDrop', arguments);
  },

  render: function () {
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

  sendPlay: function () {
    var player = _.assign(
      this.props.player,
      { play: !this.props.player.play }
    );
    this.props.update({ player: player });
  },

});

module.exports = Deck;
