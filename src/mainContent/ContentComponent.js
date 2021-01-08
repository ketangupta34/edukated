import React from "react";
import "./contentComponent.css";

function ContentComponent({ image, heading, author, time, description }) {
  return (
    <div className="contentComponent">
      <div className="heading">
        <div className="headingLeft">
          <img src={image} className="displayImage" />
          <div className="contentLabel">
            <h4>{heading}</h4>
            <p>{author}</p>
          </div>
        </div>

        <span className="contentTime">{time}</span>
      </div>

      <div className="contentDescription">{description}</div>
    </div>
  );
}

export default ContentComponent;
