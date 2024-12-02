
import './App.css'
import Slide from "./Components/Slider.jsx"
import Navbar from "./Components/Navbar.jsx"
import ContactStrip from './Components/ContactStrip.jsx';
import Service from './Service.jsx';
import About from './About.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardContainer from "./Components/CardContainer.jsx"
import ServiceCardContainer from './Components/ServiceCardContainer.jsx';
import Footer from './Components/footer.jsx';
import Subscribe from './Components/ContactUs.jsx';
import WhatsAppIcon from './Components/WhatsappIcon.jsx';
import PriceBoxContainer from './Components/PriceBoxContainer.jsx';
import Login from './pages/Login.jsx'
function App() {

  return (
    <>
      <Login />

    </>
  );
}

export default App
