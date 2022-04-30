import React from "react";
import "./Notice.scss";

const Notice = ({ notice, setNotice }) => {
  return (
    <div className={`notice ${!notice && "hidden"}`}>
      <div className="container">
        <div className="left">
          Beware of fake websites, our only domains are{" "}
          <a href="/">animepahe.com,</a> <a href="/">animepahe.org</a> and{" "}
          <a href="/">animepahe.ru.</a>
        </div>
        <div className="right" onClick={() => setNotice(false)}>
          ×
        </div>
      </div>
    </div>
  );
};

export default Notice;
