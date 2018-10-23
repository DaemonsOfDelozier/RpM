import React from "react";


export default class Header extends React.Component {


    render() {
        return (
            <nav class="navbar navbar-expand-lg fixed-top text-uppercase" id="mainNav">
                <div class="container">
                    <a class="navbar-brand js-scroll-trigger" href="#page-top">RpM</a>

                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul id="menu" class="navbar-nav">
                            <li class="nav-item mx-0 mx-lg-1">
                              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#explore">Explore</a>
                            </li>
                            <li class="nav-item mx-0 mx-lg-1">
                              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#route-map">Route Map</a>
                            </li>
                            <li class="nav-item mx-0 mx-lg-1">
                              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#help">Help</a>
                            </li>
                            <li class="nav-item mx-0 mx-lg-1">
                              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#account">Account</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}