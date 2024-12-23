import React from 'react'
import "./confirmMessage.css"
import Navigation from "../Components/Navigation";
import Center from "../Components/Center";
import Footer2 from "../Components/footer2";

function ConfirmMessage() {
  return (
    <div className='confirm-message'>
      <Navigation />

        <div className='content'>
            <h1 className='emoji'>🎉</h1>
            <h2 className='heading'>Congratulations! Your Flight is Booked!</h2>
            <p className='message'>Thank you for choosing [Your Company Name]. Your ticket has been successfully booked! Check your email for the booking details and travel itinerary. We’re excited to be part of your journey! ✈️</p>
            <button className='view-details'>View Booking Details</button>
        </div>

      <Center />

      <Footer2 />
    </div>
  )
}

export default ConfirmMessage
