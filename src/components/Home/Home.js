import React, { useState } from "react";
import "./Home.scss";
import Episode from "../Episode/Episode";
import { pages } from "./episodes-data";

const Home = () => {
  const [page, setPage] = useState(0);

  return (
    <div className="home">
      <p>{pages[page].length ? "Latest Releases" : "Loading..."}</p>
      <div className="container">
        {pages[page] &&
          pages[page].map((item, i) => (
            <Episode
              img={item.img}
              title={item.title}
              serial={item.serial}
              key={i}
            />
          ))}
      </div>
      <div className="page-scrollbar">
        <ul>
          <li onClick={() => pages && setPage(0)}>«</li>
          <li onClick={() => pages[page - 1] && setPage(page - 1)}>‹</li>
          <li>{page + 1}</li>
          <li onClick={() => pages[page + 1] && setPage(page + 1)}>›</li>
          <li onClick={() => pages && setPage(pages.length - 1)}>»</li>
        </ul>
      </div>
      <h5>uwu</h5>
    </div>
  );
};

export default Home;
