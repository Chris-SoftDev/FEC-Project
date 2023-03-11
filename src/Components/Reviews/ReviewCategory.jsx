import { useContext } from "react";
import ReviewContext from "../../Context/ReviewContext";
import "./ReviewCategory.css";

export default function ReviewCategory() {
  const {
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

  return (
    <div className="Review-Container">
      <div className="Total-rating-reviews">
        <div className="rating-reviews-icon-container">
          <svg viewBox="0 0 32 32">
            <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path>
          </svg>
        </div>
        {totalDec} · {totalReviews} reviews
      </div>
      <div className="Catergories-rating-bar-container">
        <div className="First-category-div">
          <div className="rating-container">
            <div className="categories-label1">Cleanliness</div>
            <div className="bar-rating-label">
              <div className="progress-bar ">
                <div className="fill" style={{ width: `${clean}%` }}></div>
              </div>
              <span className="avg-score">{cleanDec}</span>
            </div>
          </div>
          <div className="rating-container">
            <div className="categories-label1">Communication</div>
            <div className="bar-rating-label">
              <div className="progress-bar ">
                <div className="fill" style={{ width: `${comu}%` }}></div>
              </div>
              <span className="avg-score"> {comunicationDec}</span>
            </div>
          </div>
          <div className="rating-container">
            <div className="categories-label1">Check-in</div>
            <div className="bar-rating-label">
              <div className="progress-bar ">
                <div className="fill" style={{ width: `${check}%` }}></div>
              </div>
              <span className="avg-score"> {checkDec}</span>
            </div>
          </div>
        </div>
        <div className="Second-category-div">
          <div className="rating-container">
            <div className="categories-label2">Accuracy</div>
            <div className="bar-rating-label2">
              <div className="progress-bar ">
                <div className="fill" style={{ width: `${acu}%` }}></div>
              </div>
              <span className="avg-score"> {accuracyDec}</span>
            </div>
          </div>
          <div className="rating-container">
            <div className="categories-label2">Location</div>
            <div className="bar-rating-label2">
              <div className="progress-bar ">
                <div className="fill" style={{ width: `${loc}%` }}></div>
              </div>
              <span className="avg-score"> {locationDec}</span>
            </div>
          </div>
          <div className="rating-container">
            <div className="categories-label2">Value</div>
            <div className="bar-rating-label2">
              <div className="progress-bar ">
                <div className="fill" style={{ width: `${val}%` }}></div>
              </div>
              <span className="avg-score">{valueDec}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
