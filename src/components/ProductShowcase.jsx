import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './ProductShowcase.css';
import productsData from '../data/products.json';

const ProductCard = ({ product }) => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <div ref={ref} className={`product-card fade-up ${isVisible ? 'visible' : ''}`}>
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
                <div className="product-header">
                    <h3 className="product-title">{product.name}</h3>
                    <span className="product-price">{product.price}</span>
                </div>
                <p className="product-description">{product.description}</p>
                <Link
                    to={`/product/${product.id}`}
                    className="btn btn-outline btn-sm"
                >
                    Ver Detalles
                </Link>
            </div>
        </div>
    );
};

const ProductShowcase = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Simulating a fetch request, though we're importing directly for this demo
        setProducts(productsData);
    }, []);

    return (
        <section id="showcase" className="section showcase fade-to-gray">
            <div className="container">
                <h2 className="section-title">Soluciones Web</h2>
                <div className="products-grid">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
