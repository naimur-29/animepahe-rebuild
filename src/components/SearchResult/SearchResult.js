import React from "react";
import "./SearchResult.scss";

const SearchResult = ({ title }) => {
  return (
    <div className="search-result">
      <a
        href={`https://www.google.com/search?q=${title
          .replace(/\s+/g, "+")
          .toLowerCase()}+anime+animepahe`}
        target="_blank"
        rel="noreferrer"
        className="wrapper"
      >
        <img
          src="https://d1nxzqpcg2bym0.cloudfront.net/google_play/com.HmZyy.animepahe/944653a4-62f1-11eb-9bee-1f8d46103352/128x128"
          alt="cover"
        />
        <p className="heading">{title}</p>
      </a>
    </div>
  );
};

export default SearchResult;
