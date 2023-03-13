import React, { useContext } from "react";
import "./AllPhotosRouter.css";
import { useNavigate } from "react-router-dom";
import ReviewContext from "../../Context/ReviewContext";
import NavContext from "../../Context/NavContext";
import ShareMenu from "../Rentals/ShareMenu";
import LoginMenu from "../NavBar/LoginMenu";




export default function AllPhotosRouter() {
  const navigate = useNavigate();
  const { isLoginMenuVisible, openLoginMenu } = useContext(NavContext);
  const { getAllImage } = useContext(ReviewContext);
  const { openShareMenu, isShareMenuVisible } = useContext(ReviewContext);

  return (
    <>
      <div className="router-header">
        <div className="link-back-button">
          <button className="btn-close" onClick={() => navigate(-1)}>
            <i className="fa fa-chevron-left"></i>
          </button>
        </div>
        <div className="rental-header-property-links">
          <div className="router-rental-header-share-btn-container">
            <button id="header-share-btn" onClick={openShareMenu}>
              <svg viewBox="0 0 32 32">
                <g fill="none">
                  <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
                  <path d="M16 3v23V3z"></path>
                  <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
                </g>
              </svg>
              <div className="header-share-btn-text">Share</div>
            </button>
          </div>
          <div className="rental-header-save-btn-container">
            <button id="header-save-btn" onClick={openLoginMenu}>
              <svg viewBox="0 0 32 32">
                <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
              </svg>
              <div className="header-save-btn-text">Save</div>
            </button>
          </div>
        </div>
      </div>
      <div className="padding-container">
        {getAllImage.map((allImg,index) => (
          <div key={index} className="router-outer-container">
            <div className="router-img-container">
              <div className="router-large-img">
                <img src={allImg.large_img} alt="" />
              </div>
              <div className="double-img-container">
                <div className="left-img-container">
                  <img src={allImg.left_img} alt="" />
                </div>
                <div className="right-img-container">
                  <img src={allImg.right_img} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isShareMenuVisible && <ShareMenu />}
      {isLoginMenuVisible && <LoginMenu />}
    </>
  );
}
