/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');

require('../../css/components/pitch-control-slider.css');

module.exports = React.createClass({
  calculateSpeed: function (v) {
    v = parseInt(v);
    if (v < 0) {
      return 1 + (v/200);
    } else {
      return 1 + (v/100);
    }
  },

  handleChange: function (e) {
    var speed = this.calculateSpeed(e.target.value);
    console.log(speed);
    this.props.onChange(speed);
  },

  render: function () {
    return (
      <div>
        <input className='pitch-control-slider'
               onChange={this.handleChange}
               max='100'
               min='-100'
               type='range'
               step='5' />
      </div>
    );
  }
});
