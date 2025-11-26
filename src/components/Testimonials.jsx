import React from 'react';
import { Star } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Testimonials.css';

const TestimonialCard = ({ quote, author, role }) => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <div ref={ref} className={`testimonial-card fade-up ${isVisible ? 'visible' : ''}`}>
            <div className="stars">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
            </div>
            <p className="testimonial-quote">"{quote}"</p>
            <div className="testimonial-author">
                <p className="author-name">{author}</p>
                <p className="author-role">{role}</p>
            </div>
        </div>
    );
};

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Increíblemente rápido. Mi portafolio carga al instante y el diseño es exactamente lo que buscaba. Muy recomendado.",
            author: "Carlos Mendoza",
            role: "Fotógrafo Profesional"
        },
        {
            quote: "La integración con WhatsApp ha simplificado mis ventas. Los clientes llegan directo a cerrar el trato. Excelente servicio.",
            author: "Ana Lucía Torres",
            role: "Emprendedora de Moda"
        },
        {
            quote: "Buscaba algo simple y sin mantenimiento. Aether Studio me entregó una web perfecta que no me da dolores de cabeza.",
            author: "Miguel Ángel Ruiz",
            role: "Consultor Financiero"
        }
    ];

    return (
        <section id="testimonials" className="section testimonials fade-to-white">
            <div className="container">
                <h2 className="section-title">Lo que dicen nuestros clientes</h2>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
