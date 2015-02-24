'use strict';

var React = require('react');

require('../../css/components/vinyl.css');

/**
 * @props track
 * @type {*|Function}
 */
var Vinyl = React.createClass({
  componentDidMount: function() {
    var that = this;
    chrome.runtime.onMessage.addListener(function (request, sender) {

      console.log('recieving', request.cmd, 'in vinyl');

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
