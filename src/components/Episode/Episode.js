import React from "react";
import "./Episode.scss";

const Episode = ({ img, title, serial }) => {
  return (
    <div className="episode">
      <a
        href={`https://www.google.com/search?q=${title
          .replace(/\s+/g, "+")
          .toLowerCase()}+episode+${serial}+anime+animepahe`}
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        <div className="wrapper">
          <svg class="play-button" viewBox="0 0 200 200" alt="Play Video">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke-width="15"
              stroke="#fff"
            ></circle>
            <polygon points="70, 55 70, 145 145, 100" fill="#fff"></polygon>
          </svg>
          <div className="text-wrapper">
            <a
              href={`https://www.google.com/search?q=${title
                .replace(/\s+/g, "+")
                .toLowerCase()}+episode+${serial}+anime+animepahe`}
              target="_blank"
              rel="noreferrer"
            >
              {title.length > 35 ? `${title.slice(0, 34)}...` : title}
            </a>
            <h2>{serial}</h2>
          </div>
          <img src={img} alt={title} />
        </div>
      </a>
    </div>
  );
};

export default Episode;
