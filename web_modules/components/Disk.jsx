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
    return this.props.play ? '▷' : '▯▯';
  },

  handleClick: function () {
    this.props.onClick(!this.props.play);
  },

  imageStyle: function () {
    var image = this.props.track &&
                this.props.track.image ||
                chrome.extension.getURL('images/icon48.png');

    return {
      backgroundImage: 'url(' + image + ')'
    };
  },

  onDrop: function () {
    console.log(arguments);
  },

  render: function(){
    var diskClasses = React.addons.classSet({
      'disk': true,
      'is-playing': this.props.play,
    });

    return (
      <div className={diskClasses}
           onDrop={this.onDrop}>
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
