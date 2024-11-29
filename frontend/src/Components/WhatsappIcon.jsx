import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Whatsapp.css';

const WhatsAppIcon = () => {
    return (
        <a 
            href="https://wa.me/923402336666" 
            className="whatsapp-icon"
            target="_blank" 
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={faWhatsapp} />
        </a>
    );
};

export default WhatsAppIcon;
