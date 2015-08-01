"use strict";

var React = require('react');

var Twitter = React.createClass({
    componentDidUpdate: function () {
        alert("blah");

    },
    loadTwitter: function () {
        var d = document;
        var s = "script";
        var id = "twitter"; 
            
        var js, fjs=d.getElementsByTagName(s)[0],
            p=/^http:/.test(d.location)?'http':'https';
        
        //if(!d.getElementById(id)) {
            js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);
        //}

    },
    componentDidMount: function () {
        var d = document;
        var s = "script";
        var id = "twitter"; 
            
        var js, fjs=d.getElementsByTagName(s)[0],
            p=/^http:/.test(d.location)?'http':'https';
        
        if(!d.getElementById(id)) {
            js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);
        }
    },
    render: function () {
        var twitterel = document.getElementById("twitter");
        if(twitterel) {
            this.loadTwitter();
        }
        
        return (
                <a className="twitter-timeline" data-dnt="true" href="https://twitter.com/stephenplaza" data-widget-id="625856147061370880">
                Tweets by @stephenplaza
                </a>
        );


    }
});

module.exports = Twitter;
