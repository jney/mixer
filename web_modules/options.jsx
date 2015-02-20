'use strict';

var React = require('react');
var Vinyl = require('components/Vinyl');
var _ = require('lodash');

var Container = React.createClass({
    render: function(){
        return (
            <div>
            {this.props.data.map(function(d){
                return <Vinyl image={d.image}/>
            })}
            </div>
        );
    }
})

var data = _.range(0,10).map(function(el){
    return {
        image: 'http://img.youtube.com/jUstsqkRLeY//hqdefault.jpg'
    }
});

React.render(
  <Container data={data}/>,
  document.body
);
