import "./HotelCardForm1.css";

const HotelCardForm1 = ({
  imageDimensions,
  accommodationType,
  accommodationName,
  pricePerNight,
  roomDimensions,
  reviewCount,
  rating,
  imageDimensions2,
}) => {
  return (
    <div className="hotel-card-1">
      <a className="hotel-card">
        <img
          className="unsplashhhrfsdwxxus-icon"
          alt=""
          src={imageDimensions}
        />
        <div className="stay-details">
          <div className="entire-bungalow-parent">
            <div className="entire-bungalow">{accommodationType}</div>
            <b className="matterhorn-suites">{accommodationName}</b>
            <div className="night">{pricePerNight}</div>
          </div>
          <img className="video-icon1" alt="" src={roomDimensions} />
        </div>
        <div className="rating">
          <div className="reviews">{reviewCount}</div>
          <div className="group">
            <div className="div2">{rating}</div>
            <img className="vector-icon" alt="" src={imageDimensions2} />
          </div>
        </div>
        <button className="more-details-button">
          <div className="button3">More details</div>
        </button>
      </a>
    </div>
  );
};

export default HotelCardForm1;
