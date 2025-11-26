import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <>
            <Navbar />
            <div className="about-page">
                <div className="container">
                    <div ref={ref} className={`about-content fade-up ${isVisible ? 'visible' : ''}`}>
                        <h1 className="about-title">Sobre Aether Studio</h1>
                        <p className="about-philosophy">
                            Creemos en la web sin distracciones. <br />
                            <span className="text-gradient">Velocidad pura y diseño intencional.</span>
                        </p>

                        <div className="about-text">
                            <p>
                                En un mundo digital saturado de información y sitios web lentos, Aether Studio nace con una misión clara:
                                simplificar la presencia digital de los negocios.
                            </p>
                            <p>
                                Nos especializamos en tecnologías modernas que eliminan la necesidad de bases de datos complejas
                                y mantenimientos costosos. Nuestro enfoque "Static-First" garantiza que tu sitio web sea
                                increíblemente rápido, seguro y económico de mantener.
                            </p>
                            <p>
                                No vendemos solo plantillas; vendemos herramientas de venta optimizadas para conectar
                                directamente con tus clientes a través de los canales que ya usan, como WhatsApp.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
