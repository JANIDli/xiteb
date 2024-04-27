import React from "react";
import "../App.css";
function welcome() {
  return (
    <div className="wcontainer">
      <div className="image-container">
        <img src="Black .png" alt="Warehouse" className="image" />
      </div>
      <div className="content1">
      {/* <div className="orange-box">
          <p className="clients">15,350 +<br/>
          Clients Worldwide</p>
        </div> */}
      <h1 className="title">TransMax Logistics <br />Around<span className="highlight-text"> the World</span></h1>
        <p className="description">
          Transmax is the world's driving worldwide coordinations supplier — we
          uphold industry and exchange the worldwide trade of merchandise
          through land transport.
        </p>

        <p className="description-2">
        “Our worth added administrations guarantee the progression of products proceeds 
        consistently and supply chains stay lean and streamlined for progress.”
        </p>
        <br />
        <button className="button">MORE ABOUT US</button>
      </div>
    </div>
  );
}
export default welcome;
