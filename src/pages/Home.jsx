import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TechTicker from '../components/TechTicker';

import Benefits from '../components/Benefits';
import Services from '../components/Services';
import ProductShowcase from '../components/ProductShowcase';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <TechTicker />
            <Benefits />
            <Services />
            <ProductShowcase />
            <Testimonials />
            <About />
            <Footer />
        </>
    );
};

export default Home;
