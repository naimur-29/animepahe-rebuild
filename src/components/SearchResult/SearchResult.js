import React from "react";
import "./SearchResult.scss";

const SearchResult = ({ title }) => {
  return (
    <div className="search-result">
      <div className="wrapper">
        <img
          src="https://i-animepahe-com.cdn.ampproject.org/i/s/i.animepahe.com/posters/2ba407c5f5d33f7d49a79d345b51dbac.th.jpg"
          alt="cover"
        />
        <p className="heading">{title}</p>
      </div>
    </div>
  );
};

export default SearchResult;
