import React from "react";
import "./userItem.css";

function UserItem({ image, heading, description, cross }) {
  return (
    <div className="userComponent">
      <img src={image} className="profileImage" />
      <div className="userComLabel">
        <h4>{heading}</h4>
        <p style={{ fontSize: "15px" }}>{description}</p>
      </div>
    </div>
  );
}

export default UserItem;
