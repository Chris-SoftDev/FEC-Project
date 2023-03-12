import React, { useContext } from "react";
import "./AllPhotosRouter.css";
import { useNavigate } from "react-router-dom";
import ReviewContext from "../../Context/ReviewContext";

export default function AllPhotosRouter() {
  const navigate = useNavigate();
  // const { getAllImage } = useContext(ReviewContext);

  return (
    <>
      <div className="router-header">
        <div className="link-back-button">
          <button className="btn-close" onClick={() => navigate(-1)}>
            <i className="fa fa-chevron-left"></i>
          </button>
        </div>
      </div>
      <div className="router-large-img">
        {/* <div className="router-large-img-container"> */}
          {/* <div className="router-large-img"> */}
          <img
            src="https://a0.muscache.com/im/pictures/cf7e5cb9-9e15-44fd-a4f1-625c92d3e5db.jpg?im_w=1200"
            alt=""
          />
          {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
}
