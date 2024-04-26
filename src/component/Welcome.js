import React from "react";
import "../App.css";
function welcome() {
  return (
    <div className="container">
      <div className="image-container">
        <img src="Black .png" alt="Warehouse" className="image" />
      </div>
      <div className="content1">
      {/* <div className="orange-box">
          <p className="clients">15,350 +<br/>
          Clients Worldwide</p>
        </div> */}
        <h1 className="title">TransMax Logistics Around the World</h1>
        <p className="description">
          Transmax is the world's driving worldwide coordinations supplier — we
          uphold industry and exchange the worldwide trade of merchandise
          through land transport.
        </p>
        <button className="button">MORE ABOUT US</button>
      </div>
    </div>
  );
}
export default welcome;
