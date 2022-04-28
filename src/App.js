import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";

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
    </div>
  );
};

export default App;
