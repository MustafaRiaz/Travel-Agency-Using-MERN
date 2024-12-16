import './App.css'
import Slide from "./Components/LandingPage/Slider.jsx"
import Navbar from "./Components/LandingPage/Navbar.jsx"
import About from './About.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardContainer from "./Components/CardContainer.jsx"
import Footer from './Components/footer.jsx';
import Subscribe from './Components/ContactUs.jsx';
import WhatsAppIcon from './Components/WhatsappIcon.jsx';
import PriceBoxContainer from './Components/PriceBoxContainer.jsx';
import OurServices from './Components/LandingPage/OurServices.jsx';
import Login from './pages/Login.jsx'
import FlightSliderContainer from './Components/LandingPage/FlightSliderContainer.jsx';
import CustomerReviews from './Components/LandingPage/CustomerReviews.jsx';
import FavouriteHotel from './Components/LandingPage/FavouriteHotel.jsx';
function App() {

  return (
    <>
<<<<<<< HEAD
      <Slide />
      <CardContainer />
      <OurServices />
      <FlightSliderContainer />
      <FavouriteHotel />
      <CustomerReviews />
      <Footer />
=======
      <Login />
      {/* <BookingComponent /> */}
<<<<<<< HEAD
>>>>>>> 92dc0ffc62ee9688833ef8cd1eaeca681750413a
=======
>>>>>>> 92dc0ffc62ee9688833ef8cd1eaeca681750413a
    </>
  );
}

export default App