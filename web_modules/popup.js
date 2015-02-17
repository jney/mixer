/**
 * Created by nicolasmondon on 17/02/15.
 */

'use strict';

var $ = require('jquery/dist/jquery');

var optionsUrl = chrome.extension.getURL('views/options.html');
var $a = $('<a/>', {
    href: optionsUrl,
    target: '_blank'
}).html('mixer page');

$('body').append($a);