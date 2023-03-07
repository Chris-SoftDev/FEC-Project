import { useContext } from "react";
import { ReviewContext } from "../Context/ReviewContext";
import "./ReviewCard.css"

export default function ReviewCard() {
  const { getReviews } = useContext(ReviewContext);
  return (
    <div className="REVIEWS-container">
      {getReviews.map((review) => (
        <div key={review.review_id} className="review-box">
          <div className="inner-container">
            <div className="img-name-date-container">
              <div className="img-container">
                <img src="" alt="" />
              </div>
              <div className="name-date-container">
                <div className="name-container">
                  <h3 className="user">{review.user_name}</h3>
                </div>
                <div className="date-container">
                  <li>Feburay 2023</li>
                </div>
              </div>
            </div>
            <span className="actual-review">{review.comment}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
