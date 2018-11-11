import React from "react";
import SignIn from "./signin.jsx"

export default class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    renderLogo() {
        return (
            <a id="logo" className="navbar-brand js-scroll-trigger" href="#page-top">
                <div className="logo-container">
                    <img src="../dist/css/img/rpm-logo.png"/>
                </div>
            </a>
        ); 
    }
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top text-uppercase" id="mainNav">
                <div className="container">
                    {this.renderLogo()}
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul id="menu" className="navbar-nav">
                            <li className="nav-item mx-0 mx-lg-1">
                              <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#explore">Explore</a>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                              <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#route-map">Route Map</a>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                              <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#help">About Us</a>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                              <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#account">Account</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <SignIn user={this.props.user}></SignIn>
                    </div>
                </div>
            </nav>
        );
    }
}