'use strict';

var React = require('react');

require('components/vinyl.scss');

/**
 * @props track
 * @type {*|Function}
 */
var Vinyl = React.createClass({
  render: function(){
    return (
      <div style={vinylStyle}>
        <div className="grooves"></div>
        <div style={lightStyle}></div>
        <div style={macaronStyle}>
          <img style={coverStyle} src={this.props.track.image} />
        </div>
      </div>
    );
  }
});

var coverStyle = {
  borderRadius: '50%',
  height: '100%',
  width: '100%'

};

var lightStyle = {
  backgroundImage: 'linear-gradient(-160deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)'
};

var macaronStyle = {
  borderRadius: '50%',
  height: '33.33%',
  left: '50%',
  margin: '-16% 0 0 -16%',
  position: 'absolute',
  top: '50%',
  width: '33.33%',
  zIndex: '10',
};

var vinylStyle = {
  position: 'relative',
  display: 'inline-block',
  margin: '50px 50px 0',
  width: '400px',
  height: '400px',
  borderRadius: '50%',
  backgroundColor: '#040504',
  boxShadow: '1px 1px 10px #000'
};

module.exports = Vinyl;
