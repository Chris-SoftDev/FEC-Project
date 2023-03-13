import { useContext } from "react";
import ReviewContext from "../../Context/ReviewContext";
import "./ShowAllReviews.css";
import ReviewModalCard from "./ReviewModalCard";
import ReviewModalCategories from "./ReviewModalCategories";


export default function ShowAllReviews() {
  const { showReview, closeAllRev, totalAvg, getReviews } = useContext(ReviewContext);

  const totalDec = roundToTenth(totalAvg);

  const totalReviews = amountOfReviews(getReviews);

  function amountOfReviews(rev) {
    for (let i = 0; i < rev.length; i++) {
      const element = rev.length;
      return element;
    }
  }
  function roundToTenth(num) {
    return Math.round(num * 10) / 10;
  }

  return (
    <>
      {showReview && (
        <div className="modal-layout">
          <div className="exit-modal-container">
            <div className="exit-modal">
              <div id="close-review-btn" onClick={closeAllRev}>
                <button>
                  <svg viewBox="0 0 32 32">
                    <path d="m6 6 20 20"></path>
                    <path d="m26 6-20 20"></path>
                  </svg>
                </button>
            </div>
              <div className="Modal-review-input-container">
                <div className="star-review-container">
                  <div className="modal-dynamic-reviews">
                  <i className="fa-solid fa-star fa-xs" ></i>
                    {totalDec} · {totalReviews} reviews
                  </div>
                  <div className="show-all-search-input-container">
                    <div className="Loupe-container">
                      <svg viewBox="0 0 32 32">
                        <g fill="none">
                        <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                        </g>
                      </svg>
                    </div>
                    <input
                      
                      className="input"
                      type="text"
                      placeholder="Search here"
                    />
                </div>
                  </div>
              </div>
              <div className="categories-and-reviews-container">
                <div className="modal-categories">
                  <ReviewModalCategories />
                </div>
                <div className="Modal-reviews-modal">
                  <ReviewModalCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
