import React from 'react';
import Slide from "./Components/LandingPage/Slider.jsx";
import CardContainer from "./Components/CardContainer.jsx";
import Footer from './Components/footer.jsx';
import OurServices from './Components/LandingPage/OurServices.jsx';
import FlightSliderContainer from './Components/LandingPage/FlightSliderContainer.jsx';
import CustomerReviews from './Components/LandingPage/CustomerReviews.jsx';
import FavouriteHotel from './Components/LandingPage/FavouriteHotel.jsx';
import SubscribeComponent from './Components/LandingPage/Subscription.jsx';

const LandingPageContainer = () => {
    return (
        <>
            <Slide />
            <CardContainer />
            <OurServices />
            <FlightSliderContainer />
            <FavouriteHotel />
            <CustomerReviews />
            <SubscribeComponent />
            <Footer />
        </>
    );
};

export default LandingPageContainer;
