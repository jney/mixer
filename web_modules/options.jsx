'use strict';

var React = require('react');
var Vinyl = require('components/Vinyl');
var _ = require('lodash');

var Container = React.createClass({
    getInitialState: function(){
        return {
            tracks: []
        }
    },
    componentDidMount: function(){
        chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
            if(request.cmd === 'update_option_view'){
                console.log('on message video_detected');
                console.log(sender);
                sendResponse();
                this.setState({
                    tracks: request.tracks
                })
            }
        }.bind(this));
    },
    render: function(){
        return (
            <div>
            {this.state.tracks.map(function(t){
                return <Vinyl track={t}/>
            })}
            </div>
        );
    }
})

var data = _.range(0,10).map(function(el){
    return {
        image: 'http://img.youtube.com/jUstsqkRLeY/hqdefault.jpg'
    }
});

React.render(
  <Container/>,
  document.body
);
