/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');

var Popup = React.createClass({
  render: function(){
    return (
      <div>
        <a href={this.props.link} target="_blank">{this.props.label}</a>
      </div>
    );
  }
});

module.exports = Popup;
