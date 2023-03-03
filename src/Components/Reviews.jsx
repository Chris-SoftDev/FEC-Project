import "./Review.css";

function Reviews() {
  return (
    <div className="Review-Container">
      <p className="Total-rating-reviews">
        <div className="">
        <i className="fa-solid fa-star"></i>
            </div>
            4.93 210 reviews
            </p>
      <div className="Catergories-rating-bar-container">
        <div className="First-category-div">
          <div className="rating-cleanliness-container">
            <div className="categories-label">Cleanliness</div>
            <div className="bar-rating-label">
              {" "}
              -----
              <span> 5.0</span>
            </div>
          </div>
          <div className="rating-comunitaction-container">
            <div className="categories-label">Comunication</div>
            <div className="bar-rating-label">
              {" "}
              -----
              <span> 5.0</span>
            </div>
          </div>
          <div className="rating-checkin-container">
            <div className="categories-label">Check-in</div>
            <div className="bar-rating-label">
              {" "}
              -----
              <span> 5.0</span>
            </div>
          </div>
        </div>
        <div className="Second-category-div">
          <div className="rating-Accuracy-container">
            <div className="categories-label">Accuracy</div>
            <div className="bar-rating-label">
              {" "}
              -----
              <span> 5.0</span>
            </div>
          </div>
          <div className="rating-Location-container">
            <div className="categories-label">Location</div>
            <div className="bar-rating-label">
              {" "}
              -----
              <span> 5.0</span>              
            </div>
          </div>
          <div className="rating-Value-container">
            <div className="categories-label">Value</div>
            <div className="bar-rating-label">
              {" "}
              -----
              <span> 5.0</span>
            </div>
          </div>
        </div>
      </div>
      <div className="REVIEWS-container">
        <div className="Review1">box1</div>
        <div className="Review2">box2</div>
        <div className="Review3">box3</div>
        <div className="Review4">box4</div>
        <div className="Review5">box5</div>
        <div className="Review6">box6</div>
      </div>
    </div>
  );
}

export default Reviews;
