'use strict';

var React = require('react');

require('../../css/components/play-button.css');

var PlayButton = React.createClass({
    getInitialState: function() {
        return {play: false};
    },
    handleClick: function () {
        this.setState({
            play: !this.state.play
        });
    },
    render: function(){
        var playIcon = this.state.play ? '▷' : '▯▯';
        return (
            <button className='play-button'
                    onClick={this.handleClick}>{playIcon}</button>
        );
    }
});

module.exports = PlayButton;
