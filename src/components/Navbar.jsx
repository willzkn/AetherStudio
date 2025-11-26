import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <Link to="/" className="logo-container" onClick={closeMenu}>
                    <img src="/logo.png" alt="Aether Studio" className="logo-img" />
                    <span className="logo-text">Aether Studio</span>
                </Link>

                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="/#services" onClick={closeMenu}>Servicios</a>
                    <a href="/#showcase" onClick={closeMenu}>Diseño</a>
                    <a href="/#about" onClick={closeMenu}>Nosotros</a>
                    <a href="https://wa.me/51975372816" target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={closeMenu}>Contacto</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
