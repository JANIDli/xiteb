import React, { Component } from 'react'
import './HeroSection.css'; 

export class HeroSection extends Component {
  render() {
    return (
        <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">LOGISTIC</h1>
          <h2 className="hero-subtitle">Best Shipping Partner</h2>
          <p className="hero-description">Amet, tempus gestas facilisis vulputat viverra metus molestie lobortis posuere maecenas. molestie lobortis posuere maecenas. Egestas sapien, gravida neque.</p>
          <button className="hero-button">DISCOVER MORE</button>
        </div>
        <div className="hero-slide-indicator">2 / 2</div>
      </section>
    )
  }
}

export default HeroSection