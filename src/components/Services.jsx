import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ShoppingCart, Database, ArrowRight } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Services.css';

const ServiceCard = ({ service }) => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <Link to={service.link} ref={ref} className={`service-card fade-up ${isVisible ? 'visible' : ''}`}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <span className="service-link">
                Conocer solución <ArrowRight size={16} />
            </span>
        </Link>
    );
};

const Services = () => {
    const services = [
        {
            title: "Webs Estáticas",
            description: "Desarrollamos sitios rápidos, modernos y seguros sin base de datos. Ideales para portafolios, landing pages y páginas informativas.",
            icon: <Zap size={48} strokeWidth={1.5} />,
            link: "/product/1"
        },
        {
            title: "E-commerce por Catálogo",
            description: "Creamos tiendas online simples para mostrar productos y recibir pedidos mediante WhatsApp, Telegram o Facebook.",
            icon: <ShoppingCart size={48} strokeWidth={1.5} />,
            link: "/product/2"
        },
        {
            title: "E-commerce con Base de Datos",
            description: "Implementamos tiendas más completas con panel administrativo, gestión de productos y mayor escalabilidad.",
            icon: <Database size={48} strokeWidth={1.5} />,
            link: "/product/3"
        }
    ];

    return (
        <section id="services" className="section services fade-to-white">
            <div className="container">
                <div className="section-header">
                    <span className="section-kicker">Servicios</span>
                    <h2 className="section-title">Nuestra Experiencia</h2>
                    <p className="section-subtitle">
                        Diseñamos soluciones claras, rápidas y escalables para cada etapa de tu negocio.
                    </p>
                </div>
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
