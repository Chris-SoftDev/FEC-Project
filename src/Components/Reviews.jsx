import { useContext } from "react";
import { ReviewContext, ReviewProvider } from "../Context/ReviewContext";
import "./Review.css";
import ShowAllReviews from "./ShowAllReviews";
import ReviewCard from "./ReviewCard";
import ReviewCategory from "./ReviewCategory";

function Reviews() {
  const { openAllRev, showReview } = useContext(ReviewContext);
  const { getReviews } = useContext(ReviewContext);

  return (
    <div className="Review-Container">
      <ReviewCategory />
      <ReviewCard />
      <div className="btn-container">
        <button className="show-all" onClick={openAllRev}>
          Show all 211 reviews
        </button>
      </div>
      {showReview && <ShowAllReviews />}
    </div>
  );
}

export default Reviews;
