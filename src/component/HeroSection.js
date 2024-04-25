import React, { Component } from 'react';
import './HeroSection.css'; 

export class HeroSection extends Component {
  render() {
    return (
      <section className="hero-section">
        <div className="sidebar">
          <h3>L O G I S T I C</h3>
          <h1>Best Shipping </h1>
          <h2>Partner</h2>
          <br />
          <p>Your company needs a reliable partner for managing large shipments whether they are local or international? We are here to help you transport goods quickly and safely.</p>
          <br />
          <button className='hero-button'>DISCOVER MORE</button>
        </div>
      </section>
    );
  }
}

export default HeroSection;
