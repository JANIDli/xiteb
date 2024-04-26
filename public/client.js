import React from 'react';
import './ClientLogos.css'; // Import CSS file for styling

const ClientLogos = () => {
  return (
    <div className="client-logos-section">
      <h2 className="section-title">Client Logos Section</h2>
      <div className="logos-container">
        <div className="logo-item">
          <img src="reuss_logo.png" alt="Reuss SEO Company" />
        </div>
        <div className="logo-item">
          <img src="genesis_logo.png" alt="Genesis" />
        </div>
        <div className="logo-item">
          <img src="integracorp_logo.png" alt="Integra Corp" />
        </div>
        <div className="logo-item">
          <img src="brainbiz_logo.png" alt="BrainBiz Digital Agency" />
        </div>
        <div className="logo-item">
          <img src="ziz_zag_logo.png" alt="Zik Zag" />
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
