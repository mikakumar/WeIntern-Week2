import React, { useContext } from 'react';
import { useState, useEffect} from 'react';

import { ThemeContext } from '../Context';

import navlogo from "../assets/briefcase.png";
const Navbar = () =>{

    const [activeLink, setActiveLink] = useState('home');
    const {theme, toggleTheme} = useContext(ThemeContext);


    return(
        <div className={theme === "dark" ? "nav-container-dark font-dm":"nav-container-light font-dm"}>
                <img src={navlogo} className="nav-logo" alt="" />
                {theme==="dark" && 
                <ul className="nav-menu">
                    <li><a href="#home" onClick={()=>setActiveLink('home')} className={activeLink==='home' ? 'active-link-dark': ''}>Home</a></li>
                    <li><a href="#about" onClick={()=>setActiveLink('about')} className={activeLink==='about' ? 'active-link-dark': ''}>About Me</a></li>
                    <li><a href="#service" onClick={()=>setActiveLink('service')} className={activeLink==='service' ? 'active-link-dark': ''}>Services</a></li>
                    <li><a href="#portfolio" onClick={()=>setActiveLink('portfolio')} className={activeLink==='portfolio' ? 'active-link-dark': ''}>Portfolio</a></li>
                </ul>
}
{theme==="light" && 
                <ul className="nav-menu">
                    <li><a href="#home" onClick={()=>setActiveLink('home')} className={activeLink==='home' ? 'active-link-light': ''}>Home</a></li>
                    <li><a href="#about" onClick={()=>setActiveLink('about')} className={activeLink==='about' ? 'active-link-light': ''}>About Me</a></li>
                    <li><a href="#service" onClick={()=>setActiveLink('service')} className={activeLink==='service' ? 'active-link-light': ''}>Services</a></li>
                    <li><a href="#portfolio" onClick={()=>setActiveLink('portfolio')} className={activeLink==='portfolio' ? 'active-link-light': ''}>Portfolio</a></li>
                </ul>

}

<span className="contact-button-dark">
            <a href="" onClick={toggleTheme}>
                {theme=="dark" &&
                <p>Light Mode</p>
                }
                {theme=="light" && <p>Dark Mode</p>}
            </a>
        </span> 
        </div>
    )
}




export default Navbar;