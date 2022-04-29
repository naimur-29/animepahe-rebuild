import "./Navbar.scss";

const Navbar = ({ setSearchBarActive, searchBarActive }) => {
  return (
    <div className="navbar">
      <div className="line"></div>
      <div className="container">
        <div className="left">
          <div className="logo">
            <a href="#home">
              <img
                src="https://animepahe.com/app/images/apdoesnthavelogotheysaidapistooplaintheysaid.svg"
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div className="right">
          <ul>
            <li>#stayhome</li>
            <li>anime</li>
            <li>queue</li>
            <li>discord</li>
          </ul>
          <input
            type="text"
            placeholder="Search"
            className={`search-bar ${searchBarActive && "active"}`}
            onClick={() => setSearchBarActive(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
