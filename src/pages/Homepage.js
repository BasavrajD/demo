import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Header from "../components/Header";
import SearchContainer from "../components/SearchContainer";
import FlightContainer from "../components/FlightContainer";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStaysForm from "../components/PopularStaysForm";
import VariantContainedSizeLarge from "../components/VariantContainedSizeLarge";
import FormContainer from "../components/FormContainer";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <section className="hero-section">
        <Header />
        <SearchContainer />
      </section>
      <section className="home-contents">
        <FlightContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysForm />
      </section>
      <section className="footer-section">
        <div className="share-your-travels-form-wrapper">
          <div className="share-your-travels-form">
            <div className="form-header">
              <b className="form-title-subtext">subscribe to our newsletter</b>
              <b className="form-title">Get weekly updates</b>
            </div>
            <div className="form">
              <div className="form-text">
                <div className="fill-in-your">
                  Fill in your details to join the party!
                </div>
              </div>
              <div className="form-fields">
                <div className="form-text">
                  <TextField
                    className="input"
                    color="primary"
                    label="Your name"
                    size="medium"
                    variant="outlined"
                    type="text"
                  />
                </div>
                <div className="form-text">
                  <TextField
                    className="input"
                    color="primary"
                    label="Email address"
                    size="medium"
                    variant="outlined"
                    type="text"
                  />
                </div>
              </div>
              <button className="button1">
                <VariantContainedSizeLarge
                  button="submit"
                  variantContainedSizeLargeBoxSizing="border-box"
                  buttonFontSize="11.21px"
                  buttonLineHeight="19.44px"
                  buttonColor="#fff"
                  buttonDisplay="inline-block"
                />
              </button>
            </div>
          </div>
        </div>
        <FormContainer />
      </section>
    </div>
  );
};

export default Homepage;
