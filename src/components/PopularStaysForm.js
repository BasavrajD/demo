import HotelCardForm1 from "./HotelCardForm1";
import HotelCardForm from "./HotelCardForm";
import "./PopularStaysForm.css";

const PopularStaysForm = () => {
  return (
    <form className="popular-stays">
      <div className="popular-stays-header">
        <b className="popular-stays1">Popular Stays</b>
        <a className="view-all-stays-parent">
          <div className="view-all-stays">View all stays</div>
          <img className="arrow-right-icon4" alt="" src="/arrowright4.svg" />
        </a>
      </div>
      <div className="hotel-cards">
        <HotelCardForm1
          imageDimensions="/unsplashhhrfsdwxxus@2x.png"
          accommodationType="Entire bungalow"
          accommodationName="Matterhorn Suites"
          pricePerNight="$575/night"
          roomDimensions="/video1.svg"
          reviewCount="(60 reviews)"
          rating="4.9"
          imageDimensions2="/vector.svg"
        />
        <HotelCardForm
          imageDimensions="/unsplashtsn8bpopveo@2x.png"
          accommodationType="2-Story beachfront suite"
          accommodationName="Discovery Shores"
          pricePerNight="$360/night"
          reviewCount="(116 reviews)"
          rating="4.8"
          imageDimensions2="/vector1.svg"
        />
        <HotelCardForm
          imageDimensions="/unsplashrlwe8f8anoc@2x.png"
          accommodationType="Single deluxe hut"
          accommodationName="Arctic Hut "
          pricePerNight="$420/night"
          reviewCount="(78 reviews)"
          rating="4.7"
          imageDimensions2="/vector2.svg"
          propWidth="37.58%"
          propRight="62.42%"
        />
        <HotelCardForm1
          imageDimensions="/unsplashyqrybvxug5q@2x.png"
          accommodationType="Deluxe King Room"
          accommodationName="Lake Louise Inn"
          pricePerNight="$244/night"
          roomDimensions="/video2.svg"
          reviewCount="(63 reviews)"
          rating="4.6"
          imageDimensions2="/vector3.svg"
        />
      </div>
      <div className="view-all-stays-group">
        <div className="view-all-stays1">View all stays</div>
        <img className="arrow-right-icon4" alt="" src="/arrowright5.svg" />
      </div>
    </form>
  );
};

export default PopularStaysForm;
