import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

const App = () => {
  const [searchBarActive, setSearchBarActive] = useState(false);

  return (
    <div
      className="app"
      onClick={() => {
        if (searchBarActive) setSearchBarActive(false);
      }}
    >
      <Navbar
        setSearchBarActive={setSearchBarActive}
        searchBarActive={searchBarActive}
      />
      <Home />
    </div>
  );
};

export default App;
