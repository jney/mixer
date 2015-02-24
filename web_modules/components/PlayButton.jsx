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

      console.log('recieving', request.cmd, 'in play-button');
      console.log(request);

      if (request.cmd === 'pause') {
        that.setState({play: false});
        return;
      }

      if (request.cmd === 'play') {
        that.setState({play: true});
        return;
      }

      if (request.cmd === 'update_option_view') {
        console.log('it should update track with', request.tracks[0]);
        console.log(request.tracks);
        that.setState({track: request.tracks[0]});
      }

    });
  },

  getInitialState: function() {
    return {
      play: this.props.play,
      track: this.props.track
    };
  },

  handleClick: function () {
    var track = this.state.track;
    var play = !this.state.play;

    console.log(track);

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
