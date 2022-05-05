import "./Navbar.scss";

const Navbar = ({
  setSearchBarActive,
  searchBarActive,
  setPage,
  setSearchData,
}) => {
  return (
    <div className="navbar">
      <div className="line"></div>
      <div className="container">
        <div className="left">
          <div className="logo" onClick={() => setPage("home")}>
            <a href="/">
              <img
                src="https://animepahe.com/app/images/apdoesnthavelogotheysaidapistooplaintheysaid.svg"
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div className="right">
          <ul>
            <li onClick={() => setPage("home")}>#stayhome</li>
            <li onClick={() => setPage("anime")}>anime</li>
            <li onClick={() => setPage("queue")}>queue</li>
            <li onClick={() => setPage("discord")}>discord</li>
          </ul>
          <input
            type="text"
            placeholder="Search"
            className={`search-bar ${searchBarActive && "active"}`}
            onClick={() => setSearchBarActive(true)}
            onChange={(event) => setSearchData(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
