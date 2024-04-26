import React from 'react';
import '../App.css';
function App() {
  return (
    <div className="container">
     <header>
        <nav className="navbar">
          <div className="navbar-logo">Cargo <span className="logo-icon">TON</span></div>
          <ul className="navbar-nav">
            <li className="nav-item active"><a href="#">Home <i className="fas fa-caret-down"></i></a></li>
            <li className="nav-item">
              <a href="#">
                Pages <i className="fas fa-caret-down"></i>
              </a>
            </li>
            <li className="nav-itecdm"><a href="#">Tracking <i className="fas fa-caret-down"></i></a></li>
            <li className="nav-item"><a href="#">Services <i className="fas fa-caret-down"></i></a></li>
            <li className="nav-item"><a href="#">Blog <i className="fas fa-caret-down"></i></a></li>
          </ul>
          <div className="navbar-buttons">
            <button className="quote-btn">GET A QUOTE</button>
            <button className="sign-in-btn">SIGN IN</button>
          </div>
        </nav>
      </header>
      <main>
        <div className="content">
          <h1>LOGISTIC</h1>
          <h2>Best Shipping Partner</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
          <button className="discover-btn">DISCOVER MORE</button>
        </div>
        <div className="image">
          <img src="https://via.placeholder.com/800x600" alt="Shipping Container" />
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Cargo TM. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
