import { useContext } from "react";
import { ReviewContext } from "../Context/ReviewContext";
import "./ShowAllReviews.css";
import ReviewModalCard from "./ReviewModalCard";
import ReviewModalCategories from "./ReviewModalCategories";

export default function ShowAllReviews() {
  const { showReview, closeAllRev } = useContext(ReviewContext);

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
              <div className="categories-and-reviews-container">
                <div className="modal-categories">
                  left
                  <ReviewModalCategories />
                </div>
                <div className="reviews-modal">
                  right
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
