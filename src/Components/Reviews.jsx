import "./Review.css";

function Reviews() {
  return (
    <div className="Review-Container">
      <p className="Total-rating-reviews">* 4.93 210 reviews</p>
      <div className="Catergories-rating-bar-container">
        <div className="First-category-div">
            <div>
                <div className="celanliness">cleanliness</div>
                <div className="celanliness-ratingsbar"> -----
                    <span> 5.0</span>
                </div>
            </div>

            <div>Communication</div>
            <div>Check-in</div>
        </div>
        <div className="Second-category-div">
            <div>Accuracy</div>
            <div>Location</div>
            <div>Value</div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
