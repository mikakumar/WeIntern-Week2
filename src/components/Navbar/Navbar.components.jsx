import React from 'react';

import './Navbar.styles.css';
import navlogo from "../../assets/portfolio.png";

const Navbar = () =>{
    return(
        <div className="nav-container">
                <img src={navlogo} className="nav-logo" alt="" />
                <ul className="nav-menu">
                    <li><a href="">Home</a></li>
                    <li><a href="">About Me</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Portfolio</a></li>
                </ul>
            <span className="contact-button">
                <a href="">Contact me</a>
            </span>
        </div>
    )
}

export default Navbar;