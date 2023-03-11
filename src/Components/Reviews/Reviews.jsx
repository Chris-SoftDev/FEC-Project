import { useContext } from "react";
import ReviewContext from "../../Context/ReviewContext";
import MiniNavContext from "../../Context/MiniNavContext";
import "./Reviews.css";
import ShowAllReviews from "./ShowAllReviews";
import ReviewCard from "./ReviewCard";
import ReviewCategory from "./ReviewCategory";

function Reviews() {
  const { reviewsRef } = useContext(MiniNavContext)
  const { openAllRev, showReview } = useContext(ReviewContext);
  const { getReviews } = useContext(ReviewContext);
  const totalReviews = amountOfReviews(getReviews)
  
  function amountOfReviews (rev) {
    for (let i = 0; i < rev.length; i++) {
      const element = rev.length;
      return element
    }
  }

  return (
    <div className="Review-Container" ref={reviewsRef}>
      <ReviewCategory />
      <ReviewCard />
      <div className="btn-container">
        <button className="show-all" onClick={openAllRev}>
          Show all {totalReviews} reviews
        </button>
      </div>
      {showReview && <ShowAllReviews />}
    </div>
  );
}

export default Reviews;
