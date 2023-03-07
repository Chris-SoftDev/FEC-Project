import { useContext } from "react";
import { ReviewContext } from "../Context/ReviewContext";
import "./ReviewCategory.css"

export default function ReviewCategory() {

  return (
    <div className="Review-Container">
      <div className="Total-rating-reviews">
        <div className="">
          <i className="fa-solid fa-star"></i>
        </div>
        4.93 211 reviews
      </div>
      <div className="Catergories-rating-bar-container">
        <div className="First-category-div">
          <div className="rating-container">
            <div className="categories-label1">Cleanliness</div>
            <div className="bar-rating-label">
              <div className="progress-bar ">
                <div className="fill"></div>
              </div>
              <span className="avg-score"> 5.0</span>
            </div>
          </div>
          <div className="rating-container">
            <div className="categories-label1">Communication</div>
            <div className="bar-rating-label">
              <div className="progress-bar ">
                <div className="fill"></div>
              </div>
              <span className="avg-score"> 5.0</span>
            </div>
          </div>
          <div className="rating-container">
            <div className="categories-label1">Check-in</div>
            <div className="bar-rating-label">
              <div className="progress-bar ">
                <div className="fill"></div>
              </div>
              <span className="avg-score"> 5.0</span>
            </div>
          </div>
        </div>
        <div className="Second-category-div">
          <div className="rating-container">
            <div className="categories-label2">Accuracy</div>
            <div className="bar-rating-label2">
              <div className="progress-bar ">
                <div className="fill"></div>
              </div>
              <span className="avg-score"> 5.0</span>
            </div>
          </div>
          <div className="rating-container">
            <div className="categories-label2">Location</div>
            <div className="bar-rating-label2">
              <div className="progress-bar ">
                <div className="fill"></div>
              </div>
              <span className="avg-score"> 5.0</span>
            </div>
          </div>
          <div className="rating-container">
            <div className="categories-label2">Value</div>
            <div className="bar-rating-label2">
              <div className="progress-bar ">
                <div className="fill"></div>
              </div>
              <span className="avg-score"> 5.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
