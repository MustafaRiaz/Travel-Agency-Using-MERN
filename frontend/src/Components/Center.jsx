import React, { Component } from 'react'
import "./center_footer.css";

export class Center extends Component {
  render() {
    return (
        <div className="center">
        <p>Seamless Payment Gateway Integration</p>
        <div className="center-logos">
          <img src="bank.png" alt="Bank" />
          <img src="visa.png" alt="Visa" />
          <img src="mastercard.png" alt="Mastercard" />
        </div>
      </div>
    )
  }
}

export default Center
