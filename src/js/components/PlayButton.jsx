/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');
var _ = require('lodash');

require('css/components/play-button.css');

/**
 * @props track
 * @type {*|Function}
 */
var PlayButton = React.createClass({

  handleClick: function () {
    this.props.onClick(this);
  },

  render: function(){
    var playIcon = this.props.play ? '▷' : '▯▯';

    return (
      <button className='play-button'
              onClick={this.handleClick}>
        {playIcon}
      </button>
    );
  }
});

module.exports = PlayButton;
