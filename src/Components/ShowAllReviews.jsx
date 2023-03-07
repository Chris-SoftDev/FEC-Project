import { useContext } from "react";
import { ReviewContext } from "../Context/ReviewContext";
import "./ShowAllReviews.css";

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
              <div className="overall-container">
                <div className="start-rating-container">
                  <p className="Total-rating-reviews">
                    <div className="">
                      <i className="fa-solid fa-star"></i>
                    </div>
                    4.93 211 reviews
                  </p>
                </div>
                <div className="left-container">Left container</div>
                <div className="right-container"> right container </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
