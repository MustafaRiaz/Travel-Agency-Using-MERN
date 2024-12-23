import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Slide from "./Components/LandingPage/Slider.jsx";
import CardContainer from "./Components/CardContainer.jsx";
import Footer from './Components/footer.jsx';
import OurServices from './Components/LandingPage/OurServices.jsx';
import FlightSliderContainer from './Components/LandingPage/FlightSliderContainer.jsx';
import CustomerReviews from './Components/LandingPage/CustomerReviews.jsx';
import FavouriteHotel from './Components/LandingPage/FavouriteHotel.jsx';
import SubscribeComponent from './Components/LandingPage/Subscription.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/Signup.jsx';
import Payment from './pages/Payments.jsx';
import Confirm from './pages/Confirm.jsx';
import ConfirmMessage from './pages/confirmMessage.jsx';


function App() {
  return (
    <Router>
      {/* Navbar will be displayed on all pages */}

      {/* Routes definition */}
      <Routes>
        <Route path="/" element={
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
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/message" element={<ConfirmMessage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
