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

      console.log('recieving message in vinyl');


      if(request.cmd === 'pause') {
        that.state.play = false;
      }

      if(request.cmd === 'play') {
        that.state.play = true;
      }

      if(request.cmd === 'update_option_view') {
        that.props.track = request.track;
      }

    });
  },

  getInitialState: function() {
    return {play: false};
  },

  render: function(){
    var cx = React.addons.classSet;
    var vinylClasses = cx({
      'vinyl': true,
      'is-playing': this.state.play,
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
