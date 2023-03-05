import { useContext } from "react";
import { ReviewContext } from "../Context/ReviewContext";
import "./ShowAllReviews.css";

export default function ShowAllReviews() {
  const { showReview, closeAllRev } = useContext(ReviewContext);

  return (
    <>
      {showReview && (
        <div className="modal-overlay">
          <div className="cancel-modal-container">
            <div className="cancel-modal">
              <button className="close-cancel-modal" onClick={closeAllRev}>
                X
              </button>
              <div>All Reviews go here </div>
              <h1>the code workded </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
