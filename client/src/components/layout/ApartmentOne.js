import React from "react";
import { Link } from "react-router-dom";

const ApartmentOne = ({ post }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">
          <Link to={"/apartments/" + post.id}>{post.title}</Link>
        </span>
        <p>Posted by Aslı</p>
        <p className="grey-text">Date</p>
      </div>
    </div>
  );
};
export default ApartmentOne;
