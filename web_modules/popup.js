/**
 * Created by nicolasmondon on 17/02/15.
 */

'use strict';

var $ = require('jquery');

var optionsUrl = chrome.extension.getURL('views/options.html');
var $a = $('<a/>', {
    href: optionsUrl,
    target: '_blank'
}).html('click here to use the mixer');

$('body').append($a);