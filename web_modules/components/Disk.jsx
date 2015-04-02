/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');
var _ = require('lodash');

require('../../css/components/disk.css');

/**
 * @props track
 * @type {*|Function}
 */

module.exports = React.createClass({

  getPlayIcon: function () {
    return this.props.player.play ? '▷' : '▯▯';
  },

  handleClick: function () {
    var player = _.assign(
      this.props.player,
      { play: !this.props.player.play }
    );
    this.props.update({ player: player });
  },

  imageStyle: function () {
    var player = this.props.player;
    var image = player.track &&
                player.track.image ||
                chrome.extension.getURL('images/icon48.png');

    return {
      backgroundImage: 'url(' + image + ')'
    };
  },

  render: function() {
    var diskClasses = React.addons.classSet({
      'disk': true,
      'is-playing': this.props.player.play,
    });

    return (
      <div className={diskClasses}>
        <div className='disk__grooves' />
        <div className='disk__light' />
        <div className='disk__light-alt' />
        <div className='disk__macaron'>
          <div className='disk__macaron__picture' style={this.imageStyle()} />
          <div className='disk__macaron__play-button'
               onClick={this.handleClick}>
            {this.getPlayIcon()}
          </div>
        </div>
      </div>
    );
  }
});
