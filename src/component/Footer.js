import React, { Component } from 'react'
import './Footer.css'; 


export class Footer extends Component {
  render() {
    return (
      <div>
      <footer className="footer">
        <div className="footer-container">
          <div>
            <h2 class="footer-heading">Weekly Newsletter</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available.
            </p>
          </div>
          <div class="newsletter-form">
            <input
              type="email"
              class="newsletter-input"
              placeholder="Enter Your Email"
            />
            <button class="newsletter-button">Subscribe</button>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">About Us</h3>
            <p className="des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ul className="contact-list">
              <li>
                <i className="fas fa-phone"></i> (+91) 144 7755
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> 42 1st Ave, Colombo
                00600
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Latest News</h3>
            <ul className="news-list">
              <li>
                5 Minutes Ago - Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem.
              </li>
              <li>
                5 Minutes Ago - Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem.
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Customer Service</h3>
            <ul className="customer-service-list">
              <li>Support Forums</li>
              <li>Communication</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Rules & Condition</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-column">
            <div class="customer-service">
              <h2 class="customer-service-heading">Customer Service</h2>
              <div class="image-grid">
                <div class="image-item">
                  <img src="image.jpg" alt="Truck" />
                </div>
                <div class="image-item">
                  <img src="images.jpeg" alt="Warehouse" />
                </div>
                <div class="image-item">
                  <img src="meeting.webp" alt="Office" />
                </div>
                <div class="image-item">
                  <img src="office.webp" alt="Shipping" />
                </div>
                <div class="image-item">
                  <img src="shipping.jpg" alt="Team" />
                </div>
                <div class="image-item">
                  <img src="warehouse.webp" alt="Meeting" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          Copyright © 2021 All Rights Reserved. Site by XYZ
          <div class="social-icons">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-linkedin-in"></i>
          </div>
          <div class="up-icon">
            <i class="fas fa-arrow-up"></i>
          </div>
        </div>
      </footer>
    </div>
    );
  }
}

export default Footer;