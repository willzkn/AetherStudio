import React from 'react';
import { Lightbulb, Eye, Zap } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div ref={ref} className={`about-content fade-up ${isVisible ? 'visible' : ''}`}>
                    <div className="about-header">
                        <h2 className="section-title">Sobre Nosotros</h2>
                        <p className="about-philosophy">
                            Creemos en la web sin distracciones. <br />
                            <span className="text-gradient">Velocidad pura y diseño intencional.</span>
                        </p>
                    </div>

                    <div className="about-grid">
                        <div className="about-text-column">
                            <p>
                                En un mundo digital saturado, Aether Studio nace con una misión:
                                <strong> simplificar</strong>. Nos especializamos en tecnologías "Static-First"
                                que eliminan bases de datos complejas.
                            </p>
                            <p>
                                No vendemos plantillas; co-creamos tu visión. Trabajamos contigo
                                para integrar tus colores, imágenes y estilo en una herramienta de venta optimizada.
                            </p>
                        </div>

                        <div className="about-values-column">
                            <div className="value-item">
                                <Zap size={24} className="value-icon" />
                                <div>
                                    <h4>Simplicidad</h4>
                                    <p>Menos es más. Eliminamos lo innecesario.</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <Eye size={24} className="value-icon" />
                                <div>
                                    <h4>Transparencia</h4>
                                    <p>Sin costos ocultos ni mantenimientos sorpresa.</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <Lightbulb size={24} className="value-icon" />
                                <div>
                                    <h4>Eficacia</h4>
                                    <p>Diseño enfocado 100% en la conversión.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
