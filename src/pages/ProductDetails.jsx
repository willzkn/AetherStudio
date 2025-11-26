import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Shield, Zap } from 'lucide-react';
import productsData from '../data/products.json';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = productsData.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
        window.scrollTo(0, 0);
    }, [id]);

    const handleGoBack = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    if (!product) {
        return <div className="container section">Cargando...</div>;
    }

    const whatsappMessage = `Hola, estoy interesado en comprar la plantilla "${product.name}". ¿Me podrían dar más información sobre el proceso de pago y entrega?`;
    const whatsappLink = `https://wa.me/51975372816?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <>
            <Navbar />
            <div className="container section product-details-page">
                <a href="#" onClick={handleGoBack} className="back-link">
                    <ArrowLeft size={20} /> Volver
                </a>

                <div className="product-details-grid">
                    <div className="product-image-wrapper">
                        <img src={product.image} alt={product.name} className="detail-image" />
                    </div>

                    <div className="product-content">
                        <h1 className="detail-title">{product.name}</h1>
                        <p className="detail-price">{product.price}</p>
                        <p className="detail-description">{product.description}</p>

                        <div className="info-box">
                            <div className="info-item">
                                <Zap className="info-icon" size={24} />
                                <div>
                                    <h4>Sin Base de Datos</h4>
                                    <p>Este producto no requiere base de datos. Todo se gestiona mediante archivos estáticos para máxima velocidad y seguridad.</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <Shield className="info-icon" size={24} />
                                <div>
                                    <h4>Entrega Segura</h4>
                                    <p>Recibirás todos los archivos necesarios y una guía de instalación paso a paso.</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <CheckCircle className="info-icon" size={24} />
                                <div>
                                    <h4>Proceso de Compra</h4>
                                    <p>Al hacer clic en comprar, serás redirigido a WhatsApp para coordinar el pago y la entrega directamente con nosotros.</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg btn-block"
                        >
                            Comprar Ahora en WhatsApp
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;
