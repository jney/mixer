/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');
var _ = require('lodash');

require('../../css/components/pitch-control-slider.css');

function rateToSpeed(r) {
  // body...
}

function speedToRate(s) {
  s = parseInt(s);
  if (s < 0) {
    return 1 + (s/200);
  } else {
    return 1 + (s/100);
  }
}

module.exports = React.createClass({
  handleChange: function (e) {
    var player = _.assign(
      this.props.player,
      { playbackRate: speedToRate(e.target.value) }
    );
    this.props.update({ player: player });
  },

  render: function () {
    return (
      <div className='pitch-control'>
        <input className='pitch-control__slider'
               onChange={this.handleChange}
               max='100'
               min='-100'
               type='range'
               step='5' />
      </div>
    );
  }
});
