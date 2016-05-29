"use strict";

var React = require('react');

var Bio = React.createClass({
    render: function () {
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src="images/profile.jpg" />
                </div>
                <div className="col-md-8">
                    <h2>Professional Biography</h2>
                    <p className="text-justify">Stephen Plaza is the project manager and a technical lead for the FlyEM Project at Janelia Research Campus.  The goal of FlyEM is to identify the connectivity of neurons in the fly brain using both automatic and manual techniques with the hope of understanding brain functionality and uncovering neurological motifs potentially relevant across many organisms.</p>
                    <p className="text-justify">Steve received a PhD in computer engineering from the University of Michigan, researching computer architecture, wiring and transistor-level chip optimization, and computational algorithms.  After spending some time in electronic design automation for semi-conductor optimization at Synopsys, Inc., where he was able to patent a logic optimization algorithm, he shifted focus to bio-informatics at Janelia Research Campus.  While working on image segmentation and graph-based optimization strategies, he transitioned to more of a technical and managerial lead and received certification as a Project Management Professional (PMP).</p>
                    <p className="text-justify">Steve started a consulting business for interdisciplinary research and research management.  He is a consultant for Johns Hopkins Applied Physics Lab for the MICrONS project, which aims to greatly improve machine learning algorithms by examining cortical neural circuitry.</p>
                </div>
            </div>
            </div>
        );
    }

});

module.exports = Bio;

