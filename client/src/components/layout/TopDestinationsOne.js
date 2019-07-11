import React from "react";
import { Link } from "react-router-dom";

const TopDestinationsOne = ({ post }) => {
  return (
    <div className="col s6 m3 l3">
      <Link to={"/countries/" + post.country}>
        <div className="card">
          <div
            className="card-image"
            style={{
              overflow: "hidden",
              backgroundImage: "linear-gradient(-90deg, Moccasin, Ivory)"
            }}
          >
            <img
              src={"http://silmakyajini.com/pic/" + post.country + ".jpg"}
              alt={post.country}
            />
            <div className="card-action card-title">
              <p className="country-title">
                {post.country.toUpperCase()} <br />
                Avarage Price/Night 35${" "}
              </p>
              {/* country Cat. & avarage price  comes here */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TopDestinationsOne;
