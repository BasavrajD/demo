import "./FormContainer.css";

const FormContainer = () => {
  return (
    <footer className="footer">
      <div className="fickleflight-bio">
        <img className="logo-icon" alt="" src="/logo.svg" />
        <div className="fickle-flight-is">
          Fickle Flight is your one-stop travel portal. We offer hassle free
          flight and hotel bookings. We also have all your flight needs in you
          online shop.
        </div>
        <img className="social-icons" alt="" src="/social-icons.svg" />
      </div>
      <div className="footer-child" />
      <div className="footer-links">
        <div className="company">
          <a className="about-us">About Us</a>
          <div className="company1">Company</div>
          <div className="news">News</div>
          <div className="careers">Careers</div>
          <div className="how-we-work">How we work</div>
        </div>
        <div className="company">
          <div className="account">Account</div>
          <div className="support1">Support</div>
          <div className="support-center">Support Center</div>
          <div className="faq">FAQ</div>
          <div className="accessibility">Accessibility</div>
        </div>
        <div className="more">
          <div className="covid-advisory">Covid Advisory</div>
          <div className="more1">More</div>
          <div className="airline-fees">Airline Fees</div>
          <div className="tips">Tips</div>
          <div className="how-we-work">Quarantine Rules</div>
        </div>
      </div>
    </footer>
  );
};

export default FormContainer;
