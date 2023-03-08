import { useContext } from "react";
import { ReviewContext, ReviewProvider } from "../../Context/ReviewContext";
import "./Reviews.css";
import ShowAllReviews from "./ShowAllReviews";
import ReviewCard from "./ReviewCard";
import ReviewCategory from "./ReviewCategory";

function Reviews() {
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
    <div className="Review-Container">
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
