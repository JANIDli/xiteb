import React, { Component } from 'react'
import './TrustedClients .css';
 

export class TrustedClients  extends Component {
  render() {
    return (
      <div className="Trust-container ">
      <div className="section">
        <h1>TRUSTED CLIENTS</h1>
        <blockquote>
          <p className='p'>"L r e m  i p s u m  d o l o r  s i t  a m e t  c o n s e c t e t u r"</p>
          <br />
        <br />
          <img src="Trust.png" alt="" />
          <footer>
            — John Doe,
            <p className='fp'>  Managing Director</p>
          </footer>
        </blockquote>
      </div>
      <div className="section">
        <h1>WHY CHOOSE US</h1>
        <p className='p'>"L r e m  i p s u m  d o l o r  s i t  a m e t  c o n s e c t e t u r"</p>
        <br />
        <br />
        <ul>
          <hr />
          <li>Duis ac hendrerit elementum quam ipsum accumsan <button className='btn1'>+</button> </li>
          <br />
          <hr />
          <li>Maecenas magna et lobortis volutpat <button className='btn2'>+</button></li>
          <br />
          <hr />
          <li>Sed est nibh ornare lorem varius faucibus suspendisse <button className='btn3'>+</button> </li>
          <br />
          <hr />
          <li>Nulla scelerisque dui hendrerit elementum quamico <button className='btn4'>+</button></li>
        </ul>
      </div>
    </div>
    )
  }
}

export default TrustedClients 