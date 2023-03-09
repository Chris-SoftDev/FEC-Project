import { useContext } from "react";
import { ReviewContext } from "../../Context/ReviewContext";
import "./ReviewModalCard.css";
export default function ReviewCard() {
  const { getReviews } = useContext(ReviewContext);
  // const limitedReviews = getReviews.slice(0, 6); // Only display the first 6 reviews
  // /////////////this is the review card for the modal
  return (
    <div className="Modal-REVIEWS-container">
      {getReviews.map((review) => (
        <div key={review.review_id} className="Modal-review-box">
          <div className="Modal-inner-container">
            <div className="Modal-img-name-date-container">
              <div className="Modal-img-container">
                <img src={review.img_url} alt="" />
              </div>
              <div className="Modal-name-date-container">
                <div className="Modal-name-container">
                  <h3 className="Modal-user">{review.user_name}</h3>
                </div>
                <div className="Modal-date-container">
                  <li className="">February 2023</li>
                </div>
              </div>
            </div>
            <span className="Modal-actual-review">{review.comment}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
