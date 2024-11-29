import React from 'react';
import PricingBox from './PricingBox';
import OptionsBox from './OptionsBox';
import { FaUser } from 'react-icons/fa'; // Example icon from react-icons
import './PricingBoxContainer.css'; // We'll define the styles here

const pricingPlans = [
  {
    icon: <FaUser />,
    heading1: "Basic Plan",
    heading2: "For individuals",
    heading3: "Monthly Billing",
    price: "$9.99/mo",
    buttonText: "Subscribe",
  },
  {
    icon: <FaUser />,
    heading1: "Pro Plan",
    heading2: "For small teams",
    heading3: "Annual Billing",
    price: "$19.99/mo",
    buttonText: "Subscribe",
  },
  {
    icon: <FaUser />,
    heading1: "Enterprise Plan",
    heading2: "For large organizations",
    heading3: "Annual Billing",
    price: "$49.99/mo",
    buttonText: "Subscribe",
  },
  {
    icon: <FaUser />,
    heading1: "Enterprise Plan",
    heading2: "For large organizations",
    heading3: "Annual Billing",
    price: "$49.99/mo",
    buttonText: "Subscribe",
  },
  {
    icon: <FaUser />,
    heading1: "Enterprise Plan",
    heading2: "For large organizations",
    heading3: "Annual Billing",
    price: "$49.99/mo",
    buttonText: "Subscribe",
  },
  // Add more plans here if needed
];

const PriceBoxContainer = () => {
  return (
    <div className="pricing-box-container">
      <OptionsBox />
      <div className="pricing-boxes">
        {pricingPlans.map((plan, index) => (
          <PricingBox
            key={index}
            icon={plan.icon}
            heading1={plan.heading1}
            heading2={plan.heading2}
            heading3={plan.heading3}
            price={plan.price}
            buttonText={plan.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default PriceBoxContainer;
