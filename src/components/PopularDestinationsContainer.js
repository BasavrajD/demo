import TripCard from "./TripCard";
import "./PopularDestinationsContainer.css";

const PopularDestinationsContainer = () => {
  return (
    <div className="pop-destinations-main">
      <div className="destinations-titles">
        <div className="title-container">
          <b className="plan-your-next">Plan your next trip</b>
          <b className="most-popular-destinations">Most Popular Destinations</b>
        </div>
        <a className="view-all-top">
          <div className="view-all-destinations">View all destinations</div>
          <img className="arrow-right-icon" alt="" src="/arrowright.svg" />
        </a>
      </div>
      <div className="cards-container">
        <TripCard destinationPrice="Paris" destinationPriceRange="$699" />
        <TripCard
          destinationPrice="Greece"
          destinationPriceRange="$1079"
          propBackgroundImage="url('/frame-697@3x.png')"
          propWidth="74.7px"
          propWidth1="74.01px"
          propLeft="35.43px"
        />
        <TripCard
          destinationPrice="Norway"
          destinationPriceRange="$895"
          propBackgroundImage="url('/frame-698@3x.png')"
          propWidth="67.97px"
          propWidth1="67.97px"
          propLeft="28.7px"
        />
        <TripCard
          destinationPrice="Tuscany"
          destinationPriceRange="$1245"
          propBackgroundImage="url('/frame-699@3x.png')"
          propWidth="75.22px"
          propWidth1="75.22px"
          propLeft="35.95px"
        />
      </div>
      <div className="view-all-bottom">
        <div className="view-all-destinations1">View all destinations</div>
        <img className="arrow-right-icon" alt="" src="/arrowright1.svg" />
      </div>
    </div>
  );
};

export default PopularDestinationsContainer;
