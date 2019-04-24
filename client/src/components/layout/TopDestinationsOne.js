import React from "react";
import { Link } from "react-router-dom";

const TopDestinationsOne = ({ post }) => {
  console.log("Top destinationsa gelen", post);
  return (
    <div className="col s6 m3">
      <div className="card">
        <div
          className="card-image"
          style={{
            height: "200px",
            overflow: "hidden",
            backgroundImage: "linear-gradient(-90deg, Moccasin, Ivory)"
          }}
          src={"http://silmakyajini.com/pic/" + post.country + ".jpg"}
        >
          <div className="card-action card-title">
            <Link to={"/countries/" + post.country}> {post.country}</Link>
            {/* country Cat. comes here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestinationsOne;
