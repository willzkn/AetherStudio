import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Package, MessageCircle } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Services.css';

const ServiceCard = ({ service }) => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <Link to={service.link} ref={ref} className={`service-card fade-up ${isVisible ? 'visible' : ''}`}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
        </Link>
    );
};

const Services = () => {
    const services = [
        {
            title: "Webs Estáticas",
            description: "Sitios web de alto rendimiento sin bases de datos. Ideales para portafolios, landing pages y sitios informativos. Carga instantánea y máxima seguridad.",
            icon: <Zap size={48} strokeWidth={1.5} />,
            link: "/product/1"
        },
        {
            title: "Catálogos Simples",
            description: "Muestra tus productos de forma dinámica. Fácil de actualizar mediante archivos simples, sin necesidad de un panel de administración complejo.",
            icon: <Package size={48} strokeWidth={1.5} />,
            link: "/product/2"
        },
        {
            title: "Landing Pages de Venta",
            description: "Convierte visitantes en clientes. Páginas optimizadas para redirigir el tráfico directamente a tu WhatsApp, perfectas para ventas rápidas y contacto directo.",
            icon: <MessageCircle size={48} strokeWidth={1.5} />,
            link: "/product/3"
        }
    ];

    return (
        <section id="services" className="section services fade-to-white">
            <div className="container">
                <h2 className="section-title">Nuestra Experiencia</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
