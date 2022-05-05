import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Notice from "./components/Notice/Notice";
import Anime from "./components/Anime/Anime";
import SearchResult from "./components/SearchResult/SearchResult";
import { IndexData } from "../src/components/Anime/IndexData";

const App = () => {
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [notice, setNotice] = useState(true);
  const [page, setPage] = useState("home");

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
        setSearchData={setSearchData}
      />

      <div className="container">
        <div
          className={`search-result-wrapper ${
            searchBarActive && searchBarActive && "active"
          }`}
        >
          {searchData &&
            IndexData.filter(
              (item) => item.toLowerCase().startsWith(searchData) && item
            ).map(
              (element, index) => index < 8 && <SearchResult title={element} />
            )}
        </div>
      </div>

      <Notice notice={notice} setNotice={setNotice} />

      {page === "home" ? (
        <Home />
      ) : page === "anime" ? (
        <Anime />
      ) : page === "queue" ? (
        ""
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
