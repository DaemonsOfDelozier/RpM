import React from "react";
import SignIn from "./signin.jsx"

export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isMobile: window.innerWidth < 992
        }
    }

    renderLogo() {
        if (this.state.isMobile) return null;
        return (
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <div className="logo-container">
                    <img src="../dist/css/img/rpm-logo.png"/>
                </div>
            </a>
        ); 
    }
    
    render() {
        const signInStyle = this.state.isMobile ? {} : {marginLeft: "150px"};
        return (
            <nav className="navbar navbar-expand-lg fixed-top text-uppercase" id="mainNav">
                <div className="container" style={{maxHeight: "75px", maxWidth: "100%", marginLeft: "0px"}}>
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
                              <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#help">Help</a>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                              <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#account">Account</a>
                            </li>
                        </ul>
                    </div>
                    <div style={signInStyle}>
                        <SignIn user={this.props.user}></SignIn>
                    </div>
                </div>
            </nav>
        );
    }
}