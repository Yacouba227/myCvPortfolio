import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="navbar-content">
                <div className="logo">
                    <h1>Soft-TECH</h1>
                </div>
                <div className="navbar">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Resume</a></li>
                        <li><a href="">Testimonial</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
