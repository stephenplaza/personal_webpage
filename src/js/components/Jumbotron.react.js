"use strict";

var React = require('react');

var Twitter = require('./Twitter.react');
var Carousel = require('./Carousel.react');

var Jumbotron = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3" >
                        <div className="row">
                            <h3>Stephen Plaza, PhD, PMP</h3>
                        </div>
                        <div className="row">
                            <img src="images/profile.jpeg" width="100%" style={{maxWidth: "300px"}} />
                        </div>
                    </div>
                    <div className="col-md-6" style={{marginTop: "2em"}}>
                        <p>This is Stephen Plaza's personal website.  He is
                        a scientist, computer engineer, and project manager.
                        He currently works at Janelia Research Campus and 
                        enjoys the challenges involved with interdisciplinary
                        research in brain connectomics.  He is also interested
                        in research management theory.  His personal hobbies include
                        hockey and beekeeping and reading about everything.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <Twitter />
                    </div>
                </div>
                </div>
            </div>
            );
    }
});

module.exports = Jumbotron;
