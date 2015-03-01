/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');

require('../../css/components/pitch-control-slider.css');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <input className='pitch-control-slider'
               type='range'
               max='100'
               min='0'
               step='5' />
      </div>
    );
  }
});
