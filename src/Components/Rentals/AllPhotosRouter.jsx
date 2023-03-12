import React from "react";
import "./AllPhotosRouter.css";
import { useNavigate } from 'react-router-dom'

export default function AllPhotosRouter() {
  const navigate = useNavigate();



  return (
    <div className="router-header">
      <div className="link-back-button">
        <button className="btn-close" onClick={() => navigate(-1)}>
          <i className="fa fa-chevron-left"></i>
        </button>
      </div>
      
    </div>
  );
}
