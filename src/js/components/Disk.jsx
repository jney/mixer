/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');
var _ = require('lodash');

require('css/components/disk.css');

/**
 * @props track
 * @type {*|Function}
 */
 module.exports = React.createClass({

  imageStyle: function () {
    var image = this.props.track &&
                this.props.track.image ||
                chrome.extension.getURL('images/icon48.png');

    return {
      backgroundImage: 'url(' + image + ')'
    };
  },

  render: function(){
    var diskClasses = React.addons.classSet({
      'disk': true,
      'is-playing': this.props.play,
    });

    return (
      <div className={diskClasses}>
        <div className='disk__grooves' />
        <div className='disk__light' />
        <div className='disk__light-alt' />
        <div className='disk__macaron' style={this.imageStyle()} />
      </div>
    );
  }
});
