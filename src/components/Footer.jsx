import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>Aether Studio</h3>
                    <p>Soluciones web minimalistas para la era moderna.</p>
                </div>
                <div className="footer-links">
                    <div className="link-group">
                        <h4>Servicios</h4>
                        <a href="product/1">Portafolio Minimalista</a>
                        <a href="product/2">E-commerce Inicial</a>
                        <a href="product/3">Landing para Agencia</a>
                    </div>
                    <div className="link-group">
                        <h4>Contáctanos</h4>
                        <a href="https://wa.me/51975372816" target="_blank" rel="noopener noreferrer">WhatsApp: +51 975 372 816</a>
                        <a href="mailto:williammorenosaavedra3@hotmail.com">Email: williammorenosaavedra3@hotmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
