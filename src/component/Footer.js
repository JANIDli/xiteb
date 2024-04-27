import React, { Component } from 'react'
import './Footer.css'; 

export class Janth extends Component {
  render() {
    return (
      <div>
        <footer className="footer-container">
  <div>
    <h2 className="footer-heading-text">Weekly Newsletter</h2>
    <p>There are many variations of passages of Lorem Ipsum available.</p>
    <div className="newsletter-form-container">
      <input type="email" className="newsletter-input-field" placeholder="Enter Your Email" />
      <button className="newsletter-button">Subscribe</button>
    </div>
  </div>
  <div className="footer-column-container">
    <h3 className="footer-heading-text">About Us</h3>
    <p className="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <ul className="footer-list">
      <li className="footer-list-item"><i className="fas fa-phone"></i> (+91) 144 7755</li>
      <li className="footer-list-item"><i className="fas fa-map-marker-alt"></i> 42 1st Ave, Colombo 00600</li>
    </ul>
  </div>
  <div className="footer-column-container">
    <h3 className="footer-heading-text">Latest News</h3>
    <ul className="footer-list">
      <li className="footer-list-item">5 Minutes Ago - Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</li>
      <li className="footer-list-item">5 Minutes Ago - Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</li>
    </ul>
</div>
  <div className="customer-service-container">
    <h2 className="customer-service-heading">Customer Service</h2>
    <div className="image-grid-container">
      <div className="image-item-container">
        <img src="1.jpg" alt="Truck" />
      </div>
      <div className="image-item-container">
        <img src="1.jpg" alt="Warehouse" />
      </div>
      <div className="image-item-container">
        <img src="1.jpg" alt="Office" />
      </div>
      <div className="image-item-container">
        <img src="1.jpg" alt="Shipping" />
      </div>
      <div className="image-item-container">
        <img src="1.jpg" alt="Team" />
      </div>
      <div className="image-item-container">
        <img src="1.jpg" alt="Meeting" />
      </div>
    </div>
  </div>
 <div className="copyright-container">
    Copyright © 2021 All Rights Reserved. Site by XYZ
    <div className="social-icons-container">
      <i className="social-icon fab fa-facebook-f"></i>
      <i className="social-icon fab fa-twitter"></i>
      <i className="social-icon fab fa-instagram"></i>
      <i className="social-icon fab fa-linkedin-in"></i>
    </div>
  </div>
</footer>
      </div>
    )
  }
}

export default Janth