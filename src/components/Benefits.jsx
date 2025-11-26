import React from 'react';
import { Rocket, Shield, Wallet, Star } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Benefits.css';

const BenefitCard = ({ icon, title, description }) => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <div ref={ref} className={`benefit-card fade-up ${isVisible ? 'visible' : ''}`}>
            <div className="benefit-icon">{icon}</div>
            <h3 className="benefit-title">{title}</h3>
            <p className="benefit-description">{description}</p>
        </div>
    );
};

const Benefits = () => {
    const benefits = [
        {
            icon: <Rocket size={40} strokeWidth={1.5} />,
            title: "Velocidad Extrema",
            description: "Sin bases de datos pesadas que ralenticen tu sitio. Carga instantánea para una mejor experiencia de usuario y SEO."
        },
        {
            icon: <Shield size={40} strokeWidth={1.5} />,
            title: "Seguridad Total",
            description: "Tu web es una roca: sin bases de datos ni contraseñas que robar, es técnicamente imposible de hackear. Más segura que tiendas complejas porque no tiene puntos débiles."
        },
        {
            icon: <Wallet size={40} strokeWidth={1.5} />,
            title: "Costo Cero Mantenimiento",
            description: "Olvídate de pagar por actualizaciones de plugins, parches de seguridad o servidores complejos. Solo pagas una vez."
        },
        {
            icon: <Star size={40} strokeWidth={1.5} />,
            title: "Diseño Premium",
            description: "Estética minimalista y moderna que transmite profesionalismo y confianza a tus clientes desde el primer segundo."
        }
    ];

    return (
        <section id="benefits" className="section benefits fade-to-gray">
            <div className="container">
                <h2 className="section-title">¿Por qué elegirnos?</h2>
                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} {...benefit} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
