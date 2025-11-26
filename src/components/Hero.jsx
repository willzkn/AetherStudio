import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Hero.css';

const Hero = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div ref={ref} className={`container hero-content fade-up ${isVisible ? 'visible' : ''}`}>
                <h1 className="hero-title">
                    Soluciones web <br />
                    <span className="text-gradient">sin complicaciones.</span>
                </h1>
                <p className="hero-subtitle">
                    Sitios estáticos, catálogos simples y landing pages de venta.
                    Minimalista, rápido y efectivo.
                </p>
                <div className="hero-actions">
                    <a href="#services" className="btn btn-primary">Nuestra experiencia</a>
                    <a href="#showcase" className="btn btn-outline">Ver servicios</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
