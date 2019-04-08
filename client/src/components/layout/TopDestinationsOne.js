import React from "react";
import { Link } from "react-router-dom";

const TopDestinationsOne = ({ post }) => {
  return (
    <div className="col s6 m4">
      <div className="card">
        <div
          className="card-image"
          style={{
            height: "200px",
            overflow: "hidden",
            backgroundImage: "linear-gradient(-90deg, Moccasin, Ivory)"
          }}
        >
          <div className="card-action card-title">
            <Link to={"/apartments/" + post.id}> {post.country}</Link>
            {/* country Cat. comes here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestinationsOne;
