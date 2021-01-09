import React from "react";
import "./App.css";

import NavBar from "./navigationBar/NavBar";
import Main from "./mainContent/Main";
import SearchAndOffers from "./searchAndOffers/SearchAndOffers";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <SearchAndOffers />
    </div>
  );
}

export default App;
