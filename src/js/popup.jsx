/**
 * Created by nicolasmondon on 17/02/15.
 */

 /* jslint node: true */
 /* global chrome: true */

'use strict';

var React = require('react');
var $ = require('jquery');
var Popup = require('js/components/Popup');

React.render(
    <Popup link={chrome.extension.getURL('views/options.html')} label={'click here'} />,
    $('body').get(0)
);
