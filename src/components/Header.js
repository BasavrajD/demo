import "./Header.css";

const Header = () => {
  return (
    <header className="top-header">
      <div className="top-container">
        <img
          className="fickleflight-logo-icon"
          alt=""
          src="/fickleflight-logo.svg"
        />
        <div className="navigation-right">
          <div className="navigation-menu">
            <div className="explore">Explore</div>
            <div className="search">Search</div>
            <div className="hotels">Hotels</div>
            <div className="offers">Offers</div>
          </div>
          <div className="account-section">
            <img
              className="hamburger-menu-icon"
              alt=""
              src="/notification.svg"
            />
            <img
              className="notification-bell-icon"
              alt=""
              src="/notification1.svg"
            />
            <img
              className="unsplashd1upkifd04a-icon"
              alt=""
              src="/top_avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
