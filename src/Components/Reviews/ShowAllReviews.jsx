import { useContext } from "react";
import { ReviewContext } from "../../Context/ReviewContext";
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
              <div className="container-holding-btn">
                <div className="button-container">
                  <button className="close-modal" onClick={closeAllRev}>
                    X
                  </button>
                </div>
              </div>
              <div className="Modal-review-input-container">
                <div className="Star-review">
                  <div className="modal-dynamic-reviews">
                  <i className="fa-solid fa-star"></i>
                    {totalDec}  {totalReviews} reviews
                  </div>
                  <div className="Modal-input-container">
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
