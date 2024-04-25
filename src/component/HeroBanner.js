import React, { Component } from 'react'
import './HeroBanner.css';

export class HeroBanner extends Component {
  render() {
    return (
        <div className="hero-banner">
        <div className="content">
          <h1>Best Global Logistics Solutions</h1>
          <p>Real Solution. Real Fast!</p>
          <div className="services">
            <div className="service">
                <img src="" alt="" />
              <h2>Air Freight Services</h2>
              <p>At our Air Service garage, we are fully appreciative how difficult courier jobs for people to find out.</p>
              <button>Read More</button>
            </div>
            <div className="service">
              <h2>Drone Services</h2>
              <p>These are unique and they differ from one industry to the other logistics expertise.</p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroBanner