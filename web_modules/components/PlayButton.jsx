'use strict';

var React = require('react');

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
        that.state.play = false;
      }

      if (request.cmd === 'play') {
        that.state.play = true;
      }

      if (request.cmd === 'update_option_view') {
        that.props.track = request.track;
      }

    });
  },

  getInitialState: function() {
    return {play: false};
  },

  handleClick: function () {
    var track = this.props.track;
    var play = !this.state.play;

    if (track) {
      chrome.tabs.sendMessage(track.tab, {
        cmd: play ? 'play' : 'pause',
        track: track
      });
    }

    this.setState({ play: play });
  },

  render: function(){
    var playIcon = this.state.play ? '▷' : '▯▯';

    return (
      <button className='play-button'
              onClick={this.handleClick}>{playIcon}</button>
    );
  }
});

module.exports = PlayButton;
