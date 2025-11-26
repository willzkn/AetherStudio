import React from 'react';
import { Code, Globe, Lock, Smartphone, Zap, Database } from 'lucide-react';
import './TechTicker.css';

const TechTicker = () => {
    const techs = [
        { name: "React", icon: <Code size={20} /> },
        { name: "Vite", icon: <Zap size={20} /> },
        { name: "HTML5", icon: <Globe size={20} /> },
        { name: "CSS3", icon: <Code size={20} /> },
        { name: "WhatsApp API", icon: <Smartphone size={20} /> },
        { name: "No-Database", icon: <Database size={20} /> },
        { name: "Secure", icon: <Lock size={20} /> },
    ];

    return (
        <div className="tech-ticker-container">
            <div className="tech-ticker-track">
                {/* First set of items */}
                <div className="ticker-list">
                    {techs.map((tech, index) => (
                        <div key={`set1-${index}`} className="tech-item">
                            {tech.icon}
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
                {/* Second set of items (duplicate) */}
                <div className="ticker-list">
                    {techs.map((tech, index) => (
                        <div key={`set2-${index}`} className="tech-item">
                            {tech.icon}
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechTicker;
