/* jslint node: true */
/* global chrome: true */

'use strict';

var React = require('react');
var PlayButton = require('./PlayButton');
var Vinyl = require('./Vinyl');

require('../../css/components/deck.css');

var Deck = React.createClass({
  render: function(){
    return (
      <div className='deck'>
        <div className='turn-table'>
          <Vinyl />
          <PlayButton />
        </div>
      </div>
    );
  },

  setPlay: function (play) {
    this.setState({
      play: play
      });
  },
});

module.exports = Deck;
