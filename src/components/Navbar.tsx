import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import "../app/styles/navbar.css";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <div className='navbar-brand'>Faria Usman</div>
                <ul className={`navbar-links  ${isMenuOpen ? 'open' : ''}`}>
                    <li><a className='navbar-link' href="#hero">Home</a></li>
                    <li><a className='navbar-link' href="#about">About</a></li>
                    <li><a className='navbar-link' href="#project">Projects</a></li>
                    <li><a className='navbar-link' href="#skills">Skills</a></li>
                    <li><a className='navbar-link' href="#contact">Contact</a></li>
                </ul>
                <div className='navbar-menu-icon' onClick={toggleMenu}>
                    {isMenuOpen ? <AiOutlineClose size={30} /> :
                        <AiOutlineMenu size={30} />
                    }
                </div>
            </div>
            {isMenuOpen && (
                <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
                    <li className='navbar-link'>
                        <a href="#hero" onClick={toggleMenu}>Home</a>
                    </li>

                    <li className='navbarLink'>
                        <a href="#about" onClick={toggleMenu}>About</a>
                    </li>

                    <li className='navbarLink'>
                        <a href="#project" onClick={toggleMenu}>Projects</a>
                    </li>
                    <li className='navbarLink'>
                        <a href="#skills" onClick={toggleMenu}>skills</a>
                    </li>
                    <li className='navbarLink'>
                        <a href="#contact" onClick={toggleMenu}>Contact</a>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Navbar