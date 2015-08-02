"use strict";

var React = require('react');

var Twitter = require('./Twitter.react');
var Carousel = require('./Carousel.react');

var Jumbotron = React.createClass({
    render: function () {
        return (
            <div className="row">
            <div className="col-md-9" >
                <div className="jumbotron" style={{paddingTop: "10px", paddingBottom:"20px"}}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                            <div className="row">
                                <h3>Stephen Plaza, PhD, PMP</h3>
                            </div>
                            <div className="row">
                                <img src="images/profile.jpg" width="100%" style={{maxWidth: "300px"}} />
                            </div>
                            </div>

                            <div className="col-md-8">
                            <p className="text-left smaller" style={{marginTop: "2em"}}>This is Stephen Plaza's personal website.  He is
                            a scientist, computer engineer, and project manager.
                            He currently works at Janelia Research Campus and 
                            enjoys the challenges involved with interdisciplinary
                            research in brain connectomics.  He is also interested
                            in research management theory.  His personal hobbies include
                            playing roller hockey, beekeeping, and reading about everything.
                            </p>
                            <p className="text-left"><a className="btn btn-primary btn-lg" href="mailto:plaza.stephen@gmail.com" role="button">Contact</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <Twitter />
            </div>
            </div>
            );
    }
});

module.exports = Jumbotron;
