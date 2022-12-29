import React, { useRef, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../../Images/A-removebg-preview.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <header>
                <h3 data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="1500"><img src={Logo} alt="Logo.image"/></h3>
                <nav ref={navRef} data-aos="fade-right" data-aos-duration="1500">
                    <NavLink to="/" exact onClick={showNavbar} activeClassName="linkUnderline active" id='links'>Home</NavLink>
                    <NavLink to="/donation" onClick={showNavbar} activeClassName="linkUnderline active" id='links'>Donation</NavLink>
                    <NavLink to="/event" onClick={showNavbar} activeClassName="linkUnderline active" id='links'>Events</NavLink>
                    <NavLink to="/blog" onClick={showNavbar} activeClassName="linkUnderline active" id='links'>Blog</NavLink>
                    <NavLink to="/about" onClick={showNavbar} activeClassName="linkUnderline active" id='links'>About</NavLink>
                    <NavLink to="/contact" onClick={showNavbar} activeClassName="linkUnderline active" id='links'>Contact</NavLink>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <CloseIcon />
                    </button>
                <span className='callText'>Call Us: +234903213452344</span>
                </nav>
                <button className="nav-btn" onClick={showNavbar} data-aos="fade-left">
                    <MenuIcon />
                </button>
            </header>
        </div>
    );
}

export default Navbar;