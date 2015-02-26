/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');
var _ = require('lodash');

require('../../css/components/play-button.css');

/**
 * @props track
 * @type {*|Function}
 */
var PlayButton = React.createClass({
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

  handleClick: function () {
    this.props.onClick(this);
  },

  render: function(){
    var playIcon = this.state.play ? '▷' : '▯▯';

    return (
      <button className='play-button'
              onClick={this.handleClick}>
        {playIcon}
      </button>
    );
  }
});

module.exports = PlayButton;
