"use strict";

var React = require('react');
var Github = require('./Github.react');

var Software = React.createClass({
    render: function () {
        return (
            <div className="container">
                <h2>Software Projects</h2>
                <div className="row">
                    <div className="col-md-8">
                        <p>Over the years I have written several pieces of software, some proprietary, some open-source. I have expertise in C/C++ and Python and am proficient in writing algorithms.  I am also have familiarity with SQL/NoSQL systems and Javascript/web page development and design simple GUIs and 3D visualization with VTK and Qt.  I have written code in both research and industrial settings.    This page contains some links to more recent software efforts that I am involved in.</p>
                        <ul>
                        <li><a href="https://github.com/janelia-flyem/dvidsparkservices" target="_blank">DVIDSparkServices</a>: Lead Author -- Spark implemented workflow for EM reconstruction algorithms</li>

                        <li><a href="https://github.com/janelia-flyem/neuroproof" target="_blank">NeuroProof</a>: Lead Author --  Toolkit for Graph-based Image Segmentation and Analysis</li>

                        <li><a href="https://github.com/janelia-flyem/segmentationevaluationconsole" target="_blank">Segmentation Evaluation Console</a>: Lead Author --  Web Interface to Evaluate EM Segmentation</li>

                        <li><a href="https://github.com/janelia-flyem/dvid" target="_blank">DVID</a>: Contributor -- Distributed, Versioned, Image-Oriented Datastore</li>
                        <li><a href="https://github.com/janelia-flyem/gala" target="_blank">Gala</a>: Contributor -- Python tool for segmenting nD images</li>

                        <li><a href="https://openwiki.janelia.org/wiki/display/flyem/Raveler" target="_blank">Raveler</a>: Contributor -- Software for annotating and editing (proofreading) large, segmented image data</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <Github />
                    </div>
                </div>
            </div>        
        );
    }

});

module.exports = Software;

