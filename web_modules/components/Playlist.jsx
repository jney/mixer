'use strict';

var React = require('react');

var Playlist = React.createClass({
    render: function(){
        return (
            <div>
                my playlist
                {
                    this.props.tracks.map(function (track) {
                        return track.name;
                    })
                }
            </div>
        );
    }
});

module.exports = Playlist;
