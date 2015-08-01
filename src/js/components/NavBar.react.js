"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

window.$ = window.jQuery = require('jquery');
require('bootstrap');


var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');
var CollapsibleNav = require('react-bootstrap/lib/CollapsibleNav');
var DropdownButton = require('react-bootstrap/lib/DropdownButton');
var MenuItem = require('react-bootstrap/lib/MenuItem');
var React = require('react');

var NavBar = React.createClass({
    render: function () {
        return (
            <nav className="navbar  navbar-inverse">
            <div className="container-fluid">
            
            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Stephen Plaza</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
            <li><Link to="home">Home <span className="sr-only">(current)</span></Link></li>
            <li><Link to="bio">Bio</Link></li>
            <li><Link to="software">Software</Link></li>
            <li><Link to="publications">Publications</Link></li>
            <li><a target="_blank" href="res/resume.pdf">Resume<span className="glyphicon glyphicon-download-alt" style={{marginLeft: "1em"}} aria-hidden="true"></span></a></li>
            </ul>
            <ul className="nav navbar-brand navbar-right">
                   <li>plaza.stephen@gmail.com</li>
            </ul> 

            </div>
            </div>
            </nav>


        );

/*
        return (
                <Navbar brand='React-Bootstrap' toggleNavKey={0}>
                    <CollapsibleNav eventKey={0}> {}
                <Nav navbar>
                    <NavItem eventKey={1} href='#'>Link</NavItem>
                    <NavItem eventKey={2} href='#'>Link</NavItem>
                    <NavItem eventKey={3} href='#'>Link</NavItem>
                    <NavItem eventKey={4} href='#'>Link</NavItem>
                    <NavItem eventKey={5} href='#'>Link</NavItem>
                    <NavItem eventKey={6} href='#'>Link</NavItem>
                    <NavItem eventKey={7} href='#'>Link</NavItem>
                    <NavItem eventKey={8} href='#'>Link</NavItem>
                    <DropdownButton eventKey={3} title='Dropdown'>
                    <MenuItem eventKey='1'>Action</MenuItem>
                    <MenuItem eventKey='2'>Another action</MenuItem>
                    <MenuItem eventKey='3'>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey='4'>Separated link</MenuItem>
                    </DropdownButton>
                    </Nav>
                    <Nav navbar right>
                    <NavItem eventKey={1} href='#'>Link Right</NavItem>
                    <NavItem eventKey={2} href='#'>Link Right</NavItem>
                    </Nav>
                    </CollapsibleNav>
                    </Navbar>
               );*/
    }

});











module.exports = NavBar;
