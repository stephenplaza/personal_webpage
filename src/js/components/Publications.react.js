"use strict";

var React = require('react');

var PubList = [
    {
        title: "Focused proofreading: efficiently extracting connectomes from segmented EM images",
        authors: "Stephen Plaza",
        venue: "ArXiV",
        year: "2014",
        type: "manuscript",
        link: "http://arxiv.org/abs/1409.1199",
        highlight: true
    }, 
    {
        title: "Small sample learning of superpixel classifiers for EM segmentation",
        authors: "Toufiq Parag, Stephen Plaza, Louis Scheffer",
        venue: "MICCAI",
        year: "2014",
        type: "conference",
        link: "res/miccai.pdf",
        highlight: false
    },
    {
        title: "Protecting integrated circuits from piracy with test-aware logic locking",
        authors: "Stephen Plaza, Igor Markov",
        venue: "ICCAD",
        year: "2014",
        type: "conference",
        link: "res/iccad14-epicfail.pdf",
        highlight: false
    },
    {
        title: "Toward large-scale connectome reconstructions",
        authors: "Stephen Plaza, Louis Scheffer, Dmitri Chklovskii",
        venue: "Current Opinion in Neurobiology",
        year: "2014",
        type: "journal",
        link: "http://www.sciencedirect.com/science/article/pii/S095943881400035X",
        highlight: true
    },
    {
        title: "Graph-based active learning of agglomeration (GALA): a Python library to segment 2D and 3D neuroimages",
        authors: "Juan Nunez-Iglesias, Ryan Kennedy, Stephen Plaza, Anirban Chakraborty, William Katz",
        venue: "Frontiers in Neuroinformatics",
        year: "2014",
        type: "journal",
        link: "http://journal.frontiersin.org/article/10.3389/fninf.2014.00034/abstract",
        highlight: false
    },
    {
        title: "A Visual Motion Detection Circuit Suggested by Drosophila Connectomics",
        authors: "Takemura et al",
        venue: "Nature",
        year: "2013",
        type: "journal",
        link: "http://www.nature.com/nature/journal/v500/n7461/full/nature12450.html",
        highlight: true
    },
    {
        title: "Minimizing Manual Image Segmentation Turn-Around Time for Neuronal Reconstruction by Embracing Uncertainty",
        authors: "Stephen Plaza, Louis Scheffer, Mathew Saunders",
        venue: "PLOS ONE",
        year: "2012",
        type: "journal",
        link: "http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0044448",
        highlight: false
    },
    {
        title: "Multi-mode Redundancy Removal",
        authors: "Stephen M. Plaza, Prashant Saxena, Thomas Shiple, Pei-Hsin Ho",
        venue: "ISQED (Patent 2011012167, 2011)",
        year: "2011",
        type: "conference",
        link: "res/rr.pdf",
        highlight: false
    },
    {
        title: "Signature-Based SER Analysis and Design of Logic Circuits",
        authors: "Smita Krishnaswamy, Stephen M. Plaza, Igor L. Markov, John P. Hayes",
        venue: "TCAD",
        year: "2009",
        type: "journal",
        link: "",
        highlight: false
    },
    {
        title: "Optimizing Non-monotonic Interconnect Using Functional Simulation and Logic Restructuring",
        authors: "Stephen M. Plaza, Igor L. Markov, Valeria Bertacco",
        venue: "TCAD",
        year: "2008",
        type: "journal",
        link: "res/tcad09-nmf.pdf",
        highlight: false
    },
    {
        title: "Low-latency SAT Solving on Multicore Processors with Priority Scheduling and XOR Partitioning",
        authors: "Stephen M. Plaza, Igor L. Markov, Valeria Bertacco",
        venue: "IWLS",
        year: "2008",
        type: "manuscript",
        link: "",
        highlight: false
    },
    {
        title: "Optimizing Non-Monotonic Interconnect using Functional Simulation and Logic Restructuring (Best Paper Award)",
        authors: "Stephen M. Plaza, Igor L. Markov, Valeria Bertacco",
        venue: "ISPD",
        year: "2008",
        type: "conference",
        link: "res/nmf.pdf",
        highlight: true
    },
    {
        title: "Random Stimulus Generation using Entropy and XOR Constraints",
        authors: "Stephen M. Plaza, Igor L. Markov, Valeria Bertacco",
        venue: "DATE",
        year: "2008",
        type: "conference",
        link: "res/randsim.pdf",
        highlight: true
    },
    {
        title: "Enhancing Design Robustness with Reliability-aware Resynthesis and Logic Simulation",
        authors: "Smita Krishnaswamy, Stephen M. Plaza, Igor L. Markov, and John P. Hayes",
        venue: "ICCAD",
        year: "2007",
        type: "conference",
        link: "res/iccad07-rel.pdf",
        highlight: false
    },
    {
        title: "AnSER: A Lightweight Reliability Evaluator for use in Logic Synthesis (2nd Place in IWLS Programming Challenge)",
        authors: "Smita Krishnaswamy, Stephen M. Plaza, Igor L. Markov, and John P. Hayes",
        venue: "IWLS",
        year: "2007",
        type: "manuscript",
        link: "",
        highlight: false
    },
    {
        title: "Toggle: A Coverage-guided Random Stimulus Generator",
        authors: "Stephen M. Plaza, Igor L. Markov, and Valeria Bertacco",
        venue: "IWLS",
        year: "2007",
        type: "hide",
        link: "",
        highlight: false
    },
    {
        title: "Reliability-aware Synthesis using Logic Simulation",
        authors: "Smita Krishnaswamy, Stephen M. Plaza, Igor L. Markov, and John Hayes",
        venue: "IWLS",
        year: "2007",
        type: "hide",
        link: "",
        highlight: false
    },   
    {
        title: "Node Mergers in the Presence of Don't Cares",
        authors: "Stephen M. Plaza, Kai-hui Chang, Igor L. Markov, and Valeria Bertacco",
        venue: "ASP-DAC",
        year: "2007",
        type: "conference",
        link: "res/aspdac07odc.pdf",
        highlight: false
    },
    {
        title: "Architecting a Reliable CMP Switch Architecture",
        authors: "Kypros Constantinides, Stephen Plaza, Jason Blome, Bin Zhang, Valeria Bertacco, Scott Mahlke, Todd Austin, and Michael Orshansky",
        venue: "Transactions on Architecture and Code Optimization (TACO)",
        year: "2007",
        type: "journal",
        link: "res/TACO07.pdf",
        highlight: false
    },   
    {
        title: "Advances and Insights into Parallel SAT Solving",
        authors: "Stephen Plaza, Ian Kountanis, Zaher Andraus, Valeria Bertacco, and Trevor Mudge",
        venue: "IWLS",
        year: "2005",
        type: "manuscript",
        link: "res/IWLS06psat.pdf",
        highlight: false
    }, 
    {
        title: "BulletProof: A Defect Tolerant CMP Switch Architecture",
        authors: "Kypros Constantinides, Stephen Plaza, Jason Blome, Bin Zhang, Valeria Bertacco, Scott Mahlke, Todd Austin, and Michael Orshansky",
        venue: "HPCA",
        year: "2006",
        type: "conference",
        link: "res/HPCA05.pdf",
        highlight: true
    },
    {
        title: "Assessing SEU Vulnerability via Circuit-Level Timing Analysis",
        authors: "Kypros Constantinides, Stephen Plaza, Jason Blome, Bin Zhang, Valeria Bertacco, Scott Mahlke, Todd Austin, and Michael Orshansky",
        venue: "Workshop on Architectural Reliability (WAR-1)",
        year: "2005",
        type: "manuscript",
        link: "res/WAR05.pdf",
        highlight: false
    },
    {
        title: "Boolean Operations on Decomposed Functions",
        authors: "Stephen Plaza and Valeria Bertacco",
        venue: "IWLS",
        year: "2005",
        type: "manuscript",
        link: "res/IWLS05Deco.pdf",
        highlight: false
    },
    {
        title: "STACCATO: Disjoint Support Decompositions from BDDs through Symbolic Kernels",
        authors: "Stephen Plaza and Valeria Bertacco",
        venue: "ASP-DAC",
        year: "2005",
        type: "conference",
        link: "res/ASPDAC05staccato.pdf",
        highlight: true
    },
    {
        title: "Solving the Third-Shift Problem in IC Piracy with Test-aware Logic Locking",
        authors: "Stephen M Plaza and Igor L Markov",
        venue: "TCAD",
        year: "2015",
        type: "journal",
        link: "http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=7045595",
        highlight: true
    },
    {
        title: "A common evolutionary origin for the ON-and OFF-edge motion detection pathways of the Drosophila visual system",
        authors: "Kazunori Shinomiya, Shin-ya Takemura, Patricia K Rivlin, Stephen M Plaza, Louis K Scheffer, Ian A Meinertzhagen",
        venue: "Frontiers in Neural Circuits",
        year: "2015",
        type: "journal",
        link: "res/evol.pdf",
        highlight: false
    },
    {
        title: "A Context-Aware Delayed Agglomeration Framework for Electron Microscopy Segmentation",
        authors: "Toufiq Parag, Anirban Chakraborty, Stephen Plaza, Louis Scheffer",
        venue: "PLOS ONE",
        year: "2015",
        type: "journal",
        link: "http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0125825",
        highlight: false
    },
    {
        title: "Automatic Neuron Type Identification by Neurite Localization in the Drosophila Medulla",
        authors: "Ting Zhao, Stephen M Plaza",
        venue: "ArXiV",
        year: "2014",
        type: "manuscript",
        link: "http://arxiv.org/abs/1409.1892",
        highlight: false
    },
    {
        title: "Annotating Synapses in Large EM Datasets",
        authors: "Stephen M. Plaza, Toufiq Parag, Gary B. Huang, Donald J. Olbris, Mathew A. Saunders, Patricia K. Rivlin",
        venue: "ArXiV",
        year: "2014",
        type: "manuscript",
        link: "http://arxiv.org/abs/1409.1801",
        highlight: false
    },
    {
        title: "Identifying Synapses Using Deep and Wide Multiscale Recursive Networks",
        authors: "Gary B. Huang, Stephen Plaza",
        venue: "ArXiV",
        year: "2014",
        type: "manuscript",
        link: "http://arxiv.org/abs/1409.1789",
        highlight: true
    },
    {
        title: "DISSERTATION: Synthesis and Verification of Digital Circuits using Functional Simulation and Boolean Satisfiability",
        authors: "Gary B. Huang, Stephen Plaza",
        venue: "",
        year: "2008",
        type: "dissertation",
        link: "res/dissertation.pdf",
        highlight: true
    }
];

function sortYear (a, b) {
    return parseInt(b.year) - parseInt(a.year);
}

var Publications = React.createClass({
    getInitialState: function () {
        return {
            highlights: false,
            conference: false,
            journal: false,
            unpublished: false
        }          
    },
    getAll: function () {
        this.setState({
            highlights: false,
            conference: false,
            journal: false,
            unpublished: false
        });
    },
    getConf: function () {
        this.setState({
            highlights: false,
            conference: true,
            journal: false,
            unpublished: false
        });
    },
    getJourn: function () {
        this.setState({
            highlights: false,
            conference: false,
            journal: true,
            unpublished: false
        });
    },
    getUnpub: function () {
        this.setState({
            highlights: false,
            conference: false,
            journal: false,
            unpublished: true
        });
    },
    getBest: function () {
        this.setState({
            highlights: true,
            conference: false,
            journal: false,
            unpublished: false
        });
    },
    render: function () {
        var publications = [];

        if (this.state.highlights) {
            for (var i = 0; i < PubList.length; i++) {
                if (PubList[i].highlight) {
                    publications.push(PubList[i]);
                }
            } 
        } else if (this.state.conference) {
            for (var i = 0; i < PubList.length; i++) {
                if (PubList[i].type == "conference") {
                    publications.push(PubList[i]);
                }
            } 
        } else if (this.state.journal) {
            for (var i = 0; i < PubList.length; i++) {
                if (PubList[i].type == "journal") {
                    publications.push(PubList[i]);
                }
            } 
        } else if (this.state.unpublished) {
            for (var i = 0; i < PubList.length; i++) {
                if (PubList[i].type == "manuscript") {
                    publications.push(PubList[i]);
                }
            } 
        } else {
            for (var i = 0; i < PubList.length; i++) {
                if (PubList[i].type != "hide") {
                    publications.push(PubList[i]);
                }
            }
        } 
        publications.sort(sortYear);
              
        return (
            <div className="container">
                <div className="row">
                <h2>Publications and Manuscripts</h2>
                <h4>My <a href="http://wwwp.oakland.edu/enp/" target="_blank">
                Erd{'\u00F6'}s Number</a> is 3 (through Professor John Hayes)</h4>
                <div className="btn-group" role="group" aria-label="pubsel">
                <button type="button" className="btn btn-default" onClick={this.getAll}>All</button>
                <button type="button" className="btn btn-default" onClick={this.getBest}>Highlights</button>
                <button type="button" className="btn btn-default" onClick={this.getJourn}>Journals</button>
                <button type="button" className="btn btn-default" onClick={this.getConf}>Conferences</button>
                <button type="button" className="btn btn-default" onClick={this.getUnpub}>Unpublished</button>
                </div>

                <div className="list-group col-md-8" style={{marginTop: "1em"}}>
                {publications.map(function(val) {
                    var pubstr = val.authors + ", <i>" + val.venue + "</i>, " + val.year + ".";
                    var itemstart = <li className="list-group-item">;
                    var itemfinish = </li>;
                    
                    if (val.link != "") {
                        return (
                            <a className="list-group-item" href={val.link} target="_blank">
                                <h4 className="list-group-item-heading">
                                {val.title}
                                </h4>
                                <p className="list-group-item-text">
                                {val.authors  + ", "}
                                <i>{val.venue}</i>
                                {", " + val.year + "."}
                                </p>
                            </a>
                        );
                    } else {
                        return (
                            <li className="list-group-item">
                                <h4 className="list-group-item-heading">
                                {val.title}
                                </h4>
                                <p className="list-group-item-text">
                                {val.authors  + ", "}
                                <i>{val.venue}</i>
                                {", " + val.year + "."}
                                </p>
                            </li>
                        );
                    }
                })}
                </div>
                </div>
            </div>        
        );
    }

});

module.exports = Publications;

