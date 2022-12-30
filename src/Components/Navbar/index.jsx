import React, { useRef, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../../Images/A-removebg-preview.png'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import BookIcon from '@mui/icons-material/Book';
import GroupsIcon from '@mui/icons-material/Groups';
import ContactPageIcon from '@mui/icons-material/ContactPage';

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
                <nav ref={navRef}>
                    <NavLink to="/" exact onClick={showNavbar} className="linkUnderline active" id='links'><HomeIcon className='navIcon'/>Home</NavLink>
                    <NavLink to="/donation" onClick={showNavbar} className="linkUnderline active" id='links'><VolunteerActivismIcon className='navIcon'/>Donation</NavLink>
                    <NavLink to="/event" onClick={showNavbar} className="linkUnderline active" id='links'><EventRepeatIcon className='navIcon'/>Events</NavLink>
                    <NavLink to="/blog" onClick={showNavbar} className="linkUnderline active" id='links'><BookIcon className='navIcon'/>Blog</NavLink>
                    <NavLink to="/about" onClick={showNavbar} className="linkUnderline active" id='links'><GroupsIcon className='navIcon'/>About</NavLink>
                    <NavLink to="/contact" onClick={showNavbar} className="linkUnderline active" id='links'><ContactPageIcon className='navIcon'/>Contact</NavLink>
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