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
        <div className="review-box">
          <div className="inner-container">
            <div className="img-name-date-container">
              <div className="img-container">
                <img src="" alt="" />
              </div>
              <div className="name-date-container">
                <div className="name-container">
                  <h3>Moises</h3>
                </div>
                <div className="date-container">
                  <li>Feburay 2023</li>
                </div>
              </div>
            </div>
            <span className="actual-review">
              We had a great time, the place felt like home! Clean with
              everything you would need.
            </span>
          </div>
        </div>
        <div className="review-box">
          <div className="inner-container">
            <div className="img-name-date-container">
              <div className="img-container">
                <img src="" alt="" />
              </div>
              <div className="name-date-container">
                <div className="name-container">
                  <h3>Christopher</h3>
                </div>
                <div className="date-container">
                  <li>Feburay 2023</li>
                </div>
              </div>
            </div>
            <span className="actual-review">
              Great location, easy to understand directions, and not far from
              Idaho City which was a bonus!
            </span>
          </div>
        </div>
        <div className="review-box">
          <div className="inner-container">
            <div className="img-name-date-container">
              <div className="img-container">
                <img src="" alt="" />
              </div>
              <div className="name-date-container">
                <div className="name-container">
                  <h3>Caleb</h3>
                </div>
                <div className="date-container">
                  <li>Feburay 2023</li>
                </div>
              </div>
            </div>
            <span className="actual-review">
              We had a great time, the place felt like home! Clean with
              everything you would need.
            </span>
          </div>
        </div>
        <div className="review-box">
          <div className="inner-container">
            <div className="img-name-date-container">
              <div className="img-container">
                <img src="" alt="" />
              </div>
              <div className="name-date-container">
                <div className="name-container">
                  <h3>Sounisa</h3>
                </div>
                <div className="date-container">
                  <li>Feburay 2023</li>
                </div>
              </div>
            </div>
            <span className="actual-review">
              We had a great time, the place felt like home! Clean with
              everything you would need.
            </span>
          </div>
        </div>
        <div className="review-box">
          <div className="inner-container">
            <div className="img-name-date-container">
              <div className="img-container">
                <img src="" alt="" />
              </div>
              <div className="name-date-container">
                <div className="name-container">
                  <h3>Ben</h3>
                </div>
                <div className="date-container">
                  <li>Feburay 2023</li>
                </div>
              </div>
            </div>
            <span className="actual-review">
              Very nice place loved the views it offred and would 100% recomend.
            </span>
          </div>
        </div>
        <div className="review-box">
          <div className="inner-container">
            <div className="img-name-date-container">
              <div className="img-container">
                <img src="" alt="" />
              </div>
              <div className="name-date-container">
                <div className="name-container">
                  <h3>Garret</h3>
                </div>
                <div className="date-container">
                  <li>December 1942</li>
                </div>
              </div>
            </div>
            <span className="actual-review">
              We had a great time, the place felt like home! Clean with
              everything you would need. And i drive a Tesla
            </span>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button className="show-all">Show all 211 reviews</button>
      </div>
    </div>
  );
}

export default Reviews;
