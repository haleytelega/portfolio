import React from 'react';
import { Link } from 'react-router-dom';
import pdf from '../../Resume.pdf'

function Header() {
    return (
    <header className="mb-4 py-2 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h2>
            <a href="/">
                <h4 className="header">Haley Telega's Portfolio</h4>
            </a>
        </h2>
        <nav>
            <Link className="aboutme" to="/About"> About Me</Link>
            <Link className="portfolio" to="/Projects"> Projects</Link>
            <Link className="contact" to="/Contact"> Contact</Link>
            <a className="resume" href={pdf} target="_blank" rel="noreferrer">
            Resume
            </a>
        </nav>
        </div>
    </header>
    );
}

export default Header;
