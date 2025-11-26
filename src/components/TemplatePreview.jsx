import React from 'react';
import './TemplatePreview.css';

const TemplatePreview = () => {
    const templates = [
        {
            id: 1,
            name: "Portafolio Minimalista",
            image: "/portfolio.png",
            category: "Personal"
        },
        {
            id: 2,
            name: "E-commerce Moderno",
            image: "/ecommerce.png",
            category: "Negocios"
        },
        {
            id: 3,
            name: "Agencia Creativa",
            image: "/agency.png",
            category: "Corporativo"
        }
    ];

    return (
        <section id="templates" className="section templates">
            <div className="container">
                <h2 className="section-title">Plantillas Premium</h2>
                <p className="section-subtitle">Comienza con una base impresionante. Personalízala a la perfección.</p>
                <div className="templates-grid">
                    {templates.map((template) => (
                        <div key={template.id} className="template-card">
                            <div className="template-image-wrapper">
                                <img src={template.image} alt={template.name} className="template-image" />
                                <div className="template-overlay">
                                    <button className="btn btn-primary btn-sm">Vista Previa</button>
                                </div>
                            </div>
                            <div className="template-info">
                                <h3 className="template-name">{template.name}</h3>
                                <span className="template-category">{template.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TemplatePreview;
