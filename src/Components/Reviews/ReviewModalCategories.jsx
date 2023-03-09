import { useContext } from "react";
import { ReviewContext } from "../../Context/ReviewContext";
import "./ReviewModalCategories.css";

export default function ReviewCategory() {
  const {
    showReview,
    getReviews,
    cleanliness,
    communication,
    checkIn,
    accuracy,
    location,
    value,
    totalAvg,
  } = useContext(ReviewContext);
  const clean = percentageToRating(cleanliness);
  const comu = percentageToRating(communication);
  const check = percentageToRating(checkIn);
  const acu = percentageToRating(accuracy);
  const loc = percentageToRating(location);
  const val = percentageToRating(value);

  const cleanDec = roundToTenth(cleanliness);
  const comunicationDec = roundToTenth(communication);
  const checkDec = roundToTenth(checkIn);
  const accuracyDec = roundToTenth(accuracy);
  const locationDec = roundToTenth(location);
  const valueDec = roundToTenth(value);

  const totalDec = roundToTenth(totalAvg);

  const totalReviews = amountOfReviews(getReviews);

  function percentageToRating(num) {
    return Math.round((num * 100) / 5);
  }

  function roundToTenth(num) {
    return Math.round(num * 10) / 10;
  }
  function amountOfReviews(rev) {
    for (let i = 0; i < rev.length; i++) {
      const element = rev.length;
      return element;
    }
  }
////////////////////this is the categortes modal //////////////////////////////
  return (
    <div className="Modal-Review-Container">
      <div className="Modal-Total-rating-reviews">
        <div className="">
          <i className="fa-solid fa-star"></i>
        </div>
        {totalDec} - {totalReviews} reviews
      </div>
      <div
      >
        <div className="Modal-First-category-div">
          <div className="Modal-rating-container">
            <div className="Modal-categories-label1">Cleanliness</div>
            <div className="Modal-bar-rating-label">
              <div className="Modal-progress-bar ">
                <div className="Modal-fill" style={{ width: `${clean}%` }}></div>
              </div>
              <span className="Modal-avg-score">{cleanDec}</span>
            </div>
          </div>
          <div className="Modal-rating-container">
            <div className="Modal-categories-label1">Communication</div>
            <div className="Modal-bar-rating-label">
              <div className="Modal-progress-bar ">
                <div className="Modal-fill" style={{ width: `${comu}%` }}></div>
              </div>
              <span className="Modal-avg-score"> {comunicationDec}</span>
            </div>
          </div>
          <div className="Modal-rating-container">
            <div className="Modal-categories-label1">Check-in</div>
            <div className="Modal-bar-rating-label">
              <div className="Modal-progress-bar ">
                <div className="Modal-fill" style={{ width: `${check}%` }}></div>
              </div>
              <span className="Modal-avg-score"> {checkDec}</span>
            </div>
          </div>
        </div>
        <div className="Modal-Second-category-div">
          <div className="Modal-rating-container">
            <div className="Modal-categories-label2">Accuracy</div>
            <div className="Modal-bar-rating-label2">
              <div className="Modal-progress-bar ">
                <div className="Modal-fill" style={{ width: `${acu}%` }}></div>
              </div>
              <span className="Modal-avg-score"> {accuracyDec}</span>
            </div>
          </div>
          <div className="Modal-rating-container">
            <div className="Modal-categories-label2">Location</div>
            <div className="Modal-bar-rating-label2">
              <div className="Modal-progress-bar ">
                <div className="Modal-fill" style={{ width: `${loc}%` }}></div>
              </div>
              <span className="Modal-avg-score"> {locationDec}</span>
            </div>
          </div>
          <div className="Modal-rating-container">
            <div className="Modal-categories-label2">Value</div>
            <div className="Modal-bar-rating-label2">
              <div className="Modal-progress-bar ">
                <div className="Modal-fill" style={{ width: `${val}%` }}></div>
              </div>
              <span className="Modal-avg-score">{valueDec}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
