import React, { useState } from "react";
import "./Anime.scss";
import { IndexData } from "./IndexData";

const Anime = () => {
  const [index, setIndex] = useState("A");
  const indexArr = [
    "#",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <div className="anime">
      <p className="heading">Index</p>
      <ul>
        {indexArr.map((item, i) => (
          <li
            className={`index ${index === item && "active"}`}
            onClick={() => setIndex(item)}
            key={i}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="container">
        <div className="left">
          {IndexData.map((item, i) =>
            index !== "#"
              ? item.startsWith(index) &&
                (i + 1) % 2 === 0 && (
                  <a href="/" key={i}>
                    {item}
                  </a>
                )
              : !indexArr.includes(item[0]) &&
                (i + 1) % 2 === 0 && (
                  <a href="/" key={i}>
                    {item}
                  </a>
                )
          )}
        </div>
        <div className="right">
          {IndexData.map((item, i) =>
            index !== "#"
              ? item.startsWith(index) &&
                (i + 1) % 2 !== 0 && (
                  <a href="/" key={i}>
                    {item}
                  </a>
                )
              : !indexArr.includes(item[0]) &&
                (i + 1) % 2 !== 0 && (
                  <a href="/" key={i}>
                    {item}
                  </a>
                )
          )}
        </div>
      </div>
    </div>
  );
};

export default Anime;
