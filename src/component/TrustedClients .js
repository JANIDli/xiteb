import React, { Component } from 'react'
import './TrustedClients .css';
 

export class TrustedClients  extends Component {
  render() {
    return (
      <div className="Testimonials-container">
        <div className="trusted">
            <h1>TRUSTED CLIENT</h1>
            <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
            <br />
        
            <div className="iconn">
                <p>Integer congue elit non semper laoreet sed lectus orci posuere nisl tempor se felis ac mauris. 
                    Pellentesque iny urna. Integer vitae felis vel magna posu eu vestibulum. Nam rutrum congue diam.
                     Aliquam malesuada mauris etug met Curabitur laoreet convallis nislal pellentesque bibendum.</p>
            </div>
        </div>
        <div className="what-we">
            <h1>WHY CHOOSE US</h1>
        </div>
      </div>
    )
  }
}

export default TrustedClients 