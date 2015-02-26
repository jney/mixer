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

  render: function(){
    var cx = React.addons.classSet;
    var vinylClasses = cx({
      'vinyl': true,
      'is-playing': this.props.play,
    });
    var image = this.props.track &&
                this.props.track.image ||
                chrome.extension.getURL('images/icon48.png');

    return (
      <div className={vinylClasses}>
        <div className='vinyl__grooves'></div>
        <div className='vinyl__light'></div>
        <div className='vinyl__light-alt'></div>
        <div className='vinyl__macaron'>
          <img className='vinyl__macaron__cover' src={image} />
        </div>
      </div>
    );
  }
});

module.exports = Vinyl;
