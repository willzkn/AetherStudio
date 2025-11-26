import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h5>Aether Studio</h5>
                    <p>Soluciones web minimalistas para la era moderna.</p>
                </div>
                <div className="footer-links">
                    <div className="link-group">
                        <h5>Servicios</h5>
                        <Link to="/product/1">Portafolio Minimalista</Link>
                        <Link to="/product/2">E-commerce Inicial</Link>
                        <Link to="/product/3">Landing para Agencia</Link>
                    </div>
                    <div className="link-group">
                        <h5>Contáctanos</h5>
                        <div className="footer-social-icons">
                            <a href="https://wa.me/51975372816" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <MessageCircle size={24} />
                            </a>
                            <a href="mailto:williammorenosaavedra3@hotmail.com" aria-label="Email">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
