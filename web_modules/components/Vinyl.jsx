'use strict';

var React = require('react');

require('../../css/components/vinyl.css');

/**
 * @props track
 * @type {*|Function}
 */
var Vinyl = React.createClass({
  render: function(){
    return (
      <div className="vinyl is-playing">
        <div className="vinyl__grooves"></div>
        <div className="vinyl__light"></div>
        <div className="vinyl__light-alt"></div>
        <div className="vinyl__macaron">
          <img className="vinyl__macaron__cover" src={this.props.track.image} />
        </div>
      </div>
    );
  }
});

module.exports = Vinyl;
