import React from "react";
import "./navBar.css";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import MessageIcon from "@material-ui/icons/Message";
import SettingsIcon from "@material-ui/icons/Settings";
import UserItem from "./UserItem";
import DetailsComponent from "./DetailsComponent";

function NavBar() {
  return (
    <div className="navBar">
      <div className="logo">
        <img src="https://img.icons8.com/windows/64/000000/love-circled.png" />
        <h2>
          Edu<span className="colored">kated</span>
        </h2>
      </div>
      <div>
        <div className="navigation">
          <div className="navigationItem">
            <HomeIcon className="navIcons" />
            <p className="navLabel">Home</p>
          </div>
          <div className="navigationItem">
            <SearchIcon className="navIcons" />
            <p className="navLabel">Discover</p>
          </div>
          <div className="navigationItem">
            <MessageIcon className="navIcons" />
            <p className="navLabel">Messages</p>
          </div>
          <div className="navigationItem">
            <SettingsIcon className="navIcons" />
            <p className="navLabel">Settings</p>
          </div>
        </div>

        <UserItem
          image="https://img.icons8.com/ios-filled/50/4a90e2/submt-idea.png"
          heading="Updated Courses"
          description="by ketangupta"
        />
      </div>

      <div>
        <div className="userDetails">
          <DetailsComponent
            image="https://img.icons8.com/ios-filled/50/4a90e2/submt-idea.png"
            heading="1800"
            description="points"
          />
          <DetailsComponent
            image="https://img.icons8.com/ios-filled/50/4a90e2/submt-idea.png"
            heading="45.35%"
            description="complete"
          />
        </div>
        <UserItem
          image="https://img.icons8.com/ios-filled/50/4a90e2/submt-idea.png"
          heading="Updated Courses"
          description="by ketangupta"
        />
      </div>
    </div>
  );
}

export default NavBar;
