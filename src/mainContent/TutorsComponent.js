import React from "react";
import "./tutorsComponent.css";

import AddIcon from "@material-ui/icons/Add";

function TutorsComponent({ image, name, username }) {
  return (
    <div className="tutorComponent">
      <div className="tutors">
        <img src={image} className="profileImage" />
        <div className="tutorLabel">
          <h4>{name}</h4>
          <p style={{ fontSize: "15px", color: "#818181" }}>{username}</p>
        </div>
      </div>

      <div className="addTutor">
        <AddIcon />
      </div>
    </div>
  );
}

export default TutorsComponent;
