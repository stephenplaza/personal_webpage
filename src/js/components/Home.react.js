"use strict";

var React = require('react');
var Jumbotron = require('./Jumbotron.react');
var Twitter = require('./Twitter.react');
var Github = require('./Github.react');
var Carousel = require('./Carousel.react');

var Home = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function () {
        return (
            <div>
                <Jumbotron />
            </div>
        );
        // add tabs
    }
});

module.exports = Home;
