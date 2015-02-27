/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');
var _ = require('lodash');

require('../../css/components/vinyl.css');

/**
 * @props track
 * @type {*|Function}
 */
var Vinyl = React.createClass({

  imageStyle: function () {
    var image = this.props.track &&
                this.props.track.image ||
                chrome.extension.getURL('images/icon48.png');

    return {
      backgroundImage: 'url(' + image + ')'
    }
  },

  render: function(){
    var vinylClasses = React.addons.classSet({
      'vinyl': true,
      'is-playing': this.props.play,
    });

    return (
      <div className={vinylClasses}>
        <div className='vinyl__grooves' />
        <div className='vinyl__light' />
        <div className='vinyl__light-alt' />
        <div className='vinyl__macaron' style={this.imageStyle()} />
      </div>
    );
  }
});

module.exports = Vinyl;
