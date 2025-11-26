import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <a href="#" className="logo-container">
                    <img src="/logo.png" alt="Aether Studio" className="logo-img" />
                    <span className="logo-text">Aether Studio</span>
                </a>
                <div className="nav-links">
                    <a href="/#services">Servicios</a>
                    <a href="/#showcase">Diseños</a>
                    <a href="/#about">Nosotros</a>
                    <a href="https://wa.me/51975372816" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Contacto</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
