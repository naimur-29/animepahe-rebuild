import "./Navbar.scss";

const Navbar = ({
  setSearchBarActive,
  searchBarActive,
  setPage,
  setSearchData,
  hamburgerMenu,
  setHamburgerMenu,
}) => {
  return (
    <div className={`navbar ${hamburgerMenu && "active"}`}>
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
          <div
            className="hamburger-menu"
            onClick={() => setHamburgerMenu(!hamburgerMenu)}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="right">
          <ul>
            <li
              onClick={() => {
                setPage("home");
                setHamburgerMenu(!hamburgerMenu);
              }}
            >
              #stayhome
            </li>
            <li
              onClick={() => {
                setPage("anime");
                setHamburgerMenu(!hamburgerMenu);
              }}
            >
              anime
            </li>
            <li
              onClick={() => {
                setPage("queue");
                setHamburgerMenu(!hamburgerMenu);
              }}
            >
              queue
            </li>
            <li
              onClick={() => {
                setPage("discord");
                setHamburgerMenu(!hamburgerMenu);
              }}
            >
              discord
            </li>
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
