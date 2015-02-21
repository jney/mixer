'use strict';

var reg = /\/watch\?v=(.+)$/

module.exports = function(url){
    var matchTab = url.match(reg)[1];
    return matchTab.length ? matchTab[1] : undefined;
};