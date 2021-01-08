import React from "react";
import "./main.css";
import StreamingNowIcon from "./StreamingNowIcon";

import background from "../assets/background.jpg";
import displayImage from "../assets/displayImg.jpg";
import ContentComponent from "./ContentComponent";

function Main() {
  return (
    <div className="mainContent">
      <div className="streamingNow">
        <h3>Streaming Now</h3>
        <div className="streamingNowList">
          <StreamingNowIcon image={displayImage} />
          <StreamingNowIcon image={displayImage} />
          <StreamingNowIcon image={displayImage} />
          <StreamingNowIcon image={displayImage} />
          <StreamingNowIcon image={displayImage} />
          <StreamingNowIcon image={displayImage} />
          <StreamingNowIcon image={displayImage} />
          <StreamingNowIcon image={displayImage} />
          <StreamingNowIcon image={displayImage} />
          <StreamingNowIcon image={displayImage} />
        </div>
      </div>

      <div className="content">
        <ContentComponent
          background={background}
          image={displayImage}
          heading="reactjs course"
          author="Ketan Gupta"
          time="60 min"
          description="Learn to create websites using react in 60 minutes"
        />
        <ContentComponent
          background={background}
          image={displayImage}
          heading="reactjs course"
          author="Ketan Gupta"
          time="60 min"
          description="Learn to create websites using react in 60 minutes"
        />
      </div>

      <div className="lower">
        <h1>sdvgifnpidfnb</h1>
      </div>
    </div>
  );
}

export default Main;
