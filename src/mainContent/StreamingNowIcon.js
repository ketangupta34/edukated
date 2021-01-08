import React from "react";
import "./streamingNowIcon.css";

function StreamingNowIcon({ image }) {
  return (
    <div className="streamingNowIcon">
      <img src={image} className="streamingNowImage" />
    </div>
  );
}

export default StreamingNowIcon;
