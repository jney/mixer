'use strict';

var React = require('react');
var Vinyl = require('components/Vinyl');

React.render(
  <Vinyl image={chrome.extension.getURL('images/icon48.png')} />,
  document.body
);
