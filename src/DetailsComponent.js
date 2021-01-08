import React from "react";
import "./detailscomponent.css";

function DetailsComponent({ image, heading, description }) {
  return (
    <div className="detailsComponent">
      <img src={image} className="detailImage" />
      <div className="detailsLabel">
        <h3>{heading}</h3>
        <p style={{ fontSize: "15px", color: "#818181" }}>{description}</p>
      </div>
    </div>
  );
}

export default DetailsComponent;
