import RecommendedHolidaysCard from "./RecommendedHolidaysCard";
import "./RecommendedHolidaysContainer.css";

const RecommendedHolidaysContainer = () => {
  return (
    <div className="recommended-holidays-container">
      <div className="rec-title">
        <b className="recommended-holidays">Recommended Holidays</b>
        <a className="view-all-holidays-parent">
          <div className="view-all-holidays">View all holidays</div>
          <img className="arrow-right-icon2" alt="" src="/arrowright2.svg" />
        </a>
      </div>
      <div className="rec-cards-container">
        <RecommendedHolidaysCard
          locationCode="/unsplash5mv818tzxeo@2x.png"
          destinationName="Bali"
          packageDuration="4D3N"
          price="$899"
        />
        <RecommendedHolidaysCard
          locationCode="/unsplashj82dskoxvy8@2x.png"
          destinationName="Switzerland"
          packageDuration="6D5N"
          price="$900"
        />
        <RecommendedHolidaysCard
          locationCode="/unsplash4ezkckxolre@2x.png"
          destinationName="Boracay"
          packageDuration="5D4N"
          price="$699"
        />
        <RecommendedHolidaysCard
          locationCode="/unsplashuyqmxhjr3ne@2x.png"
          destinationName="Palawan"
          packageDuration="4D3N"
          price="$789"
        />
      </div>
      <div className="view-all-bottom1">
        <div className="view-all-holidays1">View all holidays</div>
        <img className="arrow-right-icon2" alt="" src="/arrowright3.svg" />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
