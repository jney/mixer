'use strict';

var React = require('react');

var Vinyl = React.createClass({
  render: function(){
    return (
      <div className="vinyl vinyl-1 paused">
        <div className="grooves"></div>
        <div className="light"></div>
        <div className="light-alt"></div>
        <div className="macaron">
          <img className="cover" src={this.props.image} />
        </div>
      </div>
    );
  }
});

module.exports = Vinyl;
