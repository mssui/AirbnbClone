import React from "react";
import { Link } from "react-router-dom";

const ApartmentOne = ({ post }) => {
  return (
    <div className="col s6 m4">
      <div className="card">
        <div
          className="card-image"
          style={{ height: "200px", overflow: "hidden" }}
        >
          <img src={post.img[0]} />

          <span className="card-title" />
        </div>
        <div className="card-content">
          <p>{post.body.slice(0, 100)}...</p>
        </div>
        <div className="card-action">
          <Link to={"/apartments/" + post.id}>
            {post.title.length > 19
              ? post.title.slice(0, 19) + "..."
              : post.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApartmentOne;
