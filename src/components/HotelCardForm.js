import { useMemo } from "react";
import "./HotelCardForm.css";

const HotelCardForm = ({
  imageDimensions,
  accommodationType,
  accommodationName,
  pricePerNight,
  reviewCount,
  rating,
  imageDimensions2,
  propWidth,
  propRight,
}) => {
  const vectorIconStyle = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  return (
    <div className="hotel-card-2">
      <a className="hotel-card1">
        <img
          className="unsplashtsn8bpopveo-icon"
          alt=""
          src={imageDimensions}
        />
        <div className="stay-details1">
          <div className="story-beachfront-suite-parent">
            <div className="story-beachfront-suite">{accommodationType}</div>
            <b className="discovery-shores">{accommodationName}</b>
            <div className="night1">{pricePerNight}</div>
          </div>
        </div>
        <div className="rating1">
          <div className="reviews1">{reviewCount}</div>
          <div className="frame-div">
            <div className="div3">{rating}</div>
            <img
              className="vector-icon1"
              alt=""
              src={imageDimensions2}
              style={vectorIconStyle}
            />
          </div>
        </div>
        <button className="more-details-button1">
          <div className="button4">More details</div>
        </button>
      </a>
    </div>
  );
};

export default HotelCardForm;
