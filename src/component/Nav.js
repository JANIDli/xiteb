import React, { Component } from 'react'
import './Nav.css';

export class Nav extends Component {
  render() {
    return (
      <div>
          <nav className="navbar">
        
            <div className="logo">Cargo </div>
            <blockquote className='n-blockquote'>
            <div className="nav-links">
                <a href="http://">HOME</a>
                <a href="http://">PAGES</a>
                <a href="http://">TRACKING</a>
                <a href="http://">SERVICES</a>
                <a href="http://">BLOG</a>
            </div>
            </blockquote>
        {/* <div className="nav-links">
          <NavLink to="/" exact>HOME</NavLink>
          <NavLink to="/pages">PAGES</NavLink>
          <NavLink to="/tracking">TRACKING</NavLink>
          <NavLink to="/services">SERVICES</NavLink>
          <NavLink to="/blog">BLOG</NavLink>
        </div> */}
        <div className="nav-actions">
          <button className="quote-btn">GET A QUOTE</button>
          <button className="sign-in-btn">SIGN IN</button>
        </div>
      </nav>
      </div>
    )
  }
}

export default Nav