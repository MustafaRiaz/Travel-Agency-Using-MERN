import React from "react";
import ServiceCard from "./ServiceCard";
import './ServiceCardContainer.css'; // Ensure to import the CSS file

const ServiceCardContainer = () => {
    return (
        <div className="Container">
            <h1>Our Services</h1>
            <h2>What we offer for you</h2>
            <div className="service-card-container">
                <ServiceCard
                    ref={(el) => cardRefs.current.push(el)}
                    title="Umrah"
                    description="Experience a spiritual journey with our Umrah packages."
                    icon={<i className="fas fa-kaaba"></i>}
                />
                <ServiceCard
                    ref={(el) => cardRefs.current.push(el)}
                    title="Hajj"
                    description="Join our guided Hajj tours for a fulfilling pilgrimage."
                    icon={<i className="fas fa-mosque"></i>}
                />
                <ServiceCard
                    ref={(el) => cardRefs.current.push(el)}
                    title="Travel Packages"
                    description="Discover amazing travel packages to various destinations."
                    icon={<i className="fas fa-plane"></i>}
                />
                <ServiceCard
                    ref={(el) => cardRefs.current.push(el)}
                    title="Hotel Bookings"
                    description="Book the best hotels for your stay with our special rates."
                    icon={<i className="fas fa-hotel"></i>}
                />
                <ServiceCard
                    ref={(el) => cardRefs.current.push(el)}
                    title="Visa Assistance"
                    description="Get professional assistance with your visa applications."
                    icon={<i className="fas fa-passport"></i>}
                />
                <ServiceCard
                    ref={(el) => cardRefs.current.push(el)}
                    title="Travel Insurance"
                    description="Ensure your travel is safe with our comprehensive insurance plans."
                    icon={<i className="fas fa-shield-alt"></i>}
                />
            </div>
        </div>
    );
};

export default ServiceCardContainer;
