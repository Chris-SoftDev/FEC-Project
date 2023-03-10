import { useContext } from "react";
import { ReviewContext } from "../../Context/ReviewContext";
import "./ShareMenu.css";

export default function ShareLink() {
  const { closeShareMenu, shareMenuRef } = useContext(ReviewContext);

  return (
    <div className="cover-screen">
      <div className="share-container" ref={shareMenuRef}>
        <div className="share-header">
          <div id="share-menu-close-btn" onClick={closeShareMenu}>
            <button>
              <svg viewBox="0 0 32 32">
                <path d="m6 6 20 20"></path>
                <path d="m26 6-20 20"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="share-body"></div>
      </div>
    </div>
  );
}
