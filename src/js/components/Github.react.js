"use strict";

var React = require('react');

var Github = React.createClass({
    componentDidMount: function () {
        GitHubActivity.feed({
                username: "stephenplaza",
                selector: "#feed",
                limit: 20 // optional
        });
    },
    render: function () {
        return (
            <div id="feed"></div>
        );
    }
});

module.exports = Github;
