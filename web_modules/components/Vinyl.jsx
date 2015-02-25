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

  componentDidMount: function() {
    var that = this;
    chrome.runtime.onMessage.addListener(function (request, sender) {

      if (request.cmd === 'pause') {
        that.setState({play: false});
        return;
      }

      if (request.cmd === 'play') {
        that.setState({play: true});
        return;
      }

      if (request.cmd === 'update_option_view') {
        that.setState({track: _.last(request.tracks)});
        return;
      }

    });
  },

  getInitialState: function() {
    return {
      play: !!this.props.play,
      track: this.props.track
    };
  },

  render: function(){
    var cx = React.addons.classSet;
    var vinylClasses = cx({
      'vinyl': true,
      'is-playing': this.state.play,
    });
    var image = this.state.track &&
                this.state.track.image ||
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
