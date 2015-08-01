"use strict";

var React = require('react');
var NavBar = require('./NavBar.react');
var Bio = require('./Bio.react');
var Software = require('./Software.react');
var Router        = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler  = Router.RouteHandler;
var Home = require('./Home.react');
var Publications = require('./Publications.react');

/*
 * Master component that allows a user to select a
 * DVID server and a corresponding segmentation
 * evaluation experiment. 
*/
var Master = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function () {
        return (
            <div> 
                <NavBar />
                <div className="container-fluid">
                    <RouteHandler />
                </div>
            </div>
        );
        // add tabs
    }
});

var routes = (
  <Route name="home" path="/" handler={Master}>
    <DefaultRoute handler={Home}/>
    <Route name="bio" path="bio" handler={Bio}/>
    <Route name="software" path="software" handler={Software}/>
    <Route name="publications" path="publications" handler={Publications}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});


module.exports = Master;
