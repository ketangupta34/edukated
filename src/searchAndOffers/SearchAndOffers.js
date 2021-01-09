import React from "react";
import "./searchAndOffer.css";

import ContentComponent from "../mainContent/ContentComponent";

import background from "../assets/background.jpg";
import displayImage from "../assets/displayImg.jpg";
function SearchAndOffers() {
  return (
    <div className="searchAndOffers">
      <div className="search">
        <h3>Advanced Search</h3>
        <div className="SearchBar">
          <input
            type="text"
            placeholder="Start writing something"
            className="searchInput"
          />
          <button className="searchButton">Search</button>
        </div>
      </div>

      <div className="offers">
        <h3>Offers</h3>
        <div style={{ display: "flex" }}>
          <ContentComponent
            background={background}
            image={displayImage}
            heading="Reactjs Course"
            author="Ketan Gupta"
            time="60 min"
            description="Learn to create websites using react in 60 minutes"
          />
        </div>

        <div style={{ display: "flex" }}>
          <ContentComponent
            background={background}
            image={displayImage}
            heading="Reactjs Course"
            author="Ketan Gupta"
            time="60 min"
            description="Learn to create websites using react in 60 minutes"
          />
          <ContentComponent
            background={background}
            image={displayImage}
            heading="Reactjs Course"
            author="Ketan Gupta"
            time="60 min"
            description="Learn to create websites using react in 60 minutes"
          />
        </div>
      </div>

      <div className="endOffers">
        <h3>Special Offers</h3>
        <div className="specialOffer">
          <div>
            <h3 style={{ color: "orange" }}>50 Days of Premium!</h3>
            <p>Get it before 01.01.2020</p>
            <button className="learnMore">Learn More</button>
          </div>
          <img src={displayImage} className="offerImage" />
        </div>
      </div>
    </div>
  );
}

export default SearchAndOffers;
