import { useMemo } from "react";
import "./TripCard.css";

const TripCard = ({
  destinationPrice,
  destinationPriceRange,
  propBackgroundImage,
  propWidth,
  propWidth1,
  propLeft,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const fromStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <button className="card-1">
      <div className="destination-details-wrapper" style={frameDivStyle}>
        <div className="destination-details">
          <b className="paris">{destinationPrice}</b>
          <div className="parent" style={frameDiv1Style}>
            <div className="div" style={divStyle}>
              {destinationPriceRange}
            </div>
            <div className="from" style={fromStyle}>
              from
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default TripCard;
