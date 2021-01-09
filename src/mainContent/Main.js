import React from "react";
import "./main.css";
import StreamingNowIcon from "./StreamingNowIcon";

import background from "../assets/background.jpg";
import background2 from "../assets/background2.jpg";

import displayImage from "../assets/displayImg.jpg";
import ContentComponent from "./ContentComponent";
import TutorsComponent from "./TutorsComponent";

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

      <div className="centerContent">
        <h3>Popular This Week</h3>
        <div className="content">
          <ContentComponent
            background={background}
            image={displayImage}
            heading="Reactjs Course"
            author="Ketan Gupta"
            time="60 min"
            description="Learn to create websites using react in 60 minutes"
          />
          <ContentComponent
            background={background2}
            image={displayImage}
            heading="Reactjs Course"
            author="Ketan Gupta"
            time="60 min"
            description="Learn to create websites using react in 60 minutes"
          />
        </div>
      </div>

      <div className="lower">
        <h3>Top Tutors</h3>
        <div className="tutorsList">
          <div style={{ display: "flex" }}>
            <TutorsComponent
              image={displayImage}
              name="Ketan Gupta"
              username="Ketangupta34"
            />
            <TutorsComponent
              image={displayImage}
              name="Ketan Gupta"
              username="Ketangupta34"
            />
          </div>
          <div style={{ display: "flex" }}>
            <TutorsComponent
              image={displayImage}
              name="Ketan Gupta"
              username="Ketangupta34"
            />
            <TutorsComponent
              image={displayImage}
              name="Ketan Gupta"
              username="Ketangupta34"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
