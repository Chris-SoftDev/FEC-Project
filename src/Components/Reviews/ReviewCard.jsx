import { useContext } from "react";
import ReviewContext from "../../Context/ReviewContext";
import "./ReviewCard.css"     
export default function ReviewCard() {
  const { getReviews } = useContext(ReviewContext);
  const limitedReviews = getReviews.slice(0, 6); // Only display the first 6 reviews

  return (
    <div className="REVIEWS-container">
      {limitedReviews.map((review) => (
        <div key={review.review_id} className="review-box">
          <div className="inner-container">
            <div className="img-name-date-container">
              <div className="img-container">
                <img src={review.img_url} alt="" />
              </div>
              <div className="name-date-container">
                <div className="name-container">
                  <h3 className="user">{review.user_name}</h3>
                </div>
                <div className="date-container">
                  <li className="">February 2023</li>
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
