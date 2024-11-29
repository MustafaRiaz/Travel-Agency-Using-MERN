import React, { useRef, useEffect } from 'react';
import Card from './Card';
import image1 from '../assets/Slider Images/CardImages/Background1.jpg';
import image2 from '../assets/Slider Images/CardImages/Background2.jpg';
import image3 from '../assets/Slider Images/CardImages/Background3.jpg';
import image4 from '../assets/Slider Images/CardImages/Background4.jpg';
import image5 from '../assets/Slider Images/CardImages/Background5.jpg';
import image6 from '../assets/Slider Images/CardImages/Background6.jpg';

import './CardContainer.css';

const CardContainer = () => {
    const cardRefs = useRef([]);

    // Function to handle intersection observer
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Trigger when 50% of the card is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('card-visible');
                } else {
                    entry.target.classList.remove('card-visible');
                }
            });
        }, options);

        cardRefs.current.forEach((cardRef) => {
            observer.observe(cardRef);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className='Container'>
            <h1 className="heading1">Popular Destinations</h1>
            <h2 className="heading2">Travel Most Popular Place<br/>In The World</h2>
            <div className="card-container">
            <Card ref={(el) => cardRefs.current.push(el)} picture={image1} text1="Dubai" text2="Experience the luxury and futuristic architecture of Dubai." />
            <Card ref={(el) => cardRefs.current.push(el)} picture={image2} text1="Russia" text2="Explore the rich history and diverse culture of Russia." />
            <Card ref={(el) => cardRefs.current.push(el)} picture={image3} text1="Saudi Arabia" text2="Discover the ancient heritage and modern wonders of Saudi Arabia." />
            <Card ref={(el) => cardRefs.current.push(el)} picture={image4} text1="China" text2="Immerse yourself in the vibrant culture and historic landmarks of China." />
            <Card ref={(el) => cardRefs.current.push(el)} picture={image5} text1="Singapore" text2="Enjoy the blend of cultures and the stunning skyline of Singapore." />
            <Card ref={(el) => cardRefs.current.push(el)} picture={image6} text1="America" text2="Experience the diverse landscapes and iconic cities of America." />

            </div>
        </div>
    );
};

export default CardContainer;
