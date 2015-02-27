/* jslint node: true */
/* global document: true */

'use strict';

var React = require('react');
var Workspace = require('components/Workspace');

React.render(
    <Workspace />,
    document.getElementById('workspace')
);
