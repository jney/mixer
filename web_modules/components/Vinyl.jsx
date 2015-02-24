'use strict';

var React = require('react');

require('../../css/components/vinyl.css');

/**
 * @props track
 * @type {*|Function}
 */
var Vinyl = React.createClass({
  componentDidMount: function() {
    chrome.runtime.onMessage.addListener(function (request, sender) {
      if(request.cmd === 'update_option_view') {

      }
    });
  },
  render: function(){
    var image = this.props.track &&
                this.props.track.image ||
                chrome.extension.getURL('images/icon48.png');

    return (
      <div className="vinyl is-playing">
        <div className="vinyl__grooves"></div>
        <div className="vinyl__light"></div>
        <div className="vinyl__light-alt"></div>
        <div className="vinyl__macaron">
          <img className="vinyl__macaron__cover" src={image} />
        </div>
      </div>
    );
  }
});

module.exports = Vinyl;
