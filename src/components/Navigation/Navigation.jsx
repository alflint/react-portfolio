import React from 'react';
import './Navigation.css';

function Navigation() {
    return (
        <div className="header">
            <h1>Al Flint</h1>
            <nav>
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#resume">Resume</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;