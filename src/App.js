import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Notice from "./components/Notice/Notice";

const App = () => {
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [notice, setNotice] = useState(true);
  const [page, setPage] = useState("home");

  const activePage = [page];

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
        setPage={setPage}
      />
      <Notice notice={notice} setNotice={setNotice} />

      {activePage.map((item) =>
        item === "home" ? (
          <Home />
        ) : item === "anime" ? (
          <Home />
        ) : item === "queue" ? (
          <Home />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default App;
