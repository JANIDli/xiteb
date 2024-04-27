import React, { Component } from 'react'
import HeroSection from './HeroSection'
import Nav from './Nav'

export class HederSlid extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <br />
        <br />
        <HeroSection/>
      </div>
    )
  }
}

export default HederSlid