import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignIn from "./signin.jsx"
import Explore from "./Explore.jsx";
import About from "./About.jsx";
import Account from "./Account.jsx";
import RouteMap from "./RouteMap.jsx";

const App = (user) => {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg fixed-top text-uppercase" id="mainNav">
                    <div className="container">
                        <a id="logo" className="navbar-brand js-scroll-trigger" href="#page-top">
                            <div className="logo-container">
                                <img src="../dist/css/img/rpm-logo.png"/>
                            </div>
                        </a>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul id="menu" className="navbar-nav">
                                <li className="nav-item mx-0 mx-lg-1">
                                    <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/explore/">Explore</Link>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/route-map/">Route Map</Link>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/about/">About</Link>
                                </li>
                                <li className="nav-item mx-0 mx-lg-1">
                                    <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/account/">Account</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <SignIn user={user}></SignIn>
                        </div>
                    </div>
                </nav>

                <div className="main-wrap">
                    <Route path="/" exact render={(props) => <Explore {...props} user={user} />} />
                    <Route path="/explore/" render={(props) => <Explore {...props} user={user} />} />
                    <Route path="/route-map/" render={(props) => <RouteMap {...props} user={user} />} />
                    <Route path="/about/" render={(props) => <About {...props} user={user} />} />
                    <Route path="/account/" render={(props) => <Account {...props} user={user} />} />
                </div>
            </div>
        </Router>
    );
}

ReactDOM.render(<App user={window.user}/>, document.getElementById("content"));