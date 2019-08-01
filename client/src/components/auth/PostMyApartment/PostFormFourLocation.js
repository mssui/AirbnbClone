import React from "react";
import LocationSearchInput from "../../layout/search/WhereTo";
import PostFormFourMap from "./PostFormFourMap";

const PostFormFourLocation = ({
  handleFormFour,
  formatAddress,
  defaultProps,
  coordinates,
  onPlacesChanged
}) => {
  console.log(coordinates[0], coordinates[1]);
  return (
    <div className="section">
      <div className="row">
        <div className="col s12">
          <h6 className="grey-text text-darken-1 center-align">
            The very last step!
            <br />
            Let's set the location so people can find your apartment on search
            results
            <br />
            Please write your address and select the most close address from
            suggestions.
            <br />
            You will be able to correct it later.
          </h6>
          {/* <LocationSearchInput formatAddress={formatAddress} /> */}
          <br />

          <div
            style={{
              height: "100vh",
              width: "100%"
            }}
          >
            <PostFormFourMap lat={coordinates[0]} lng={coordinates[1]} />
          </div>
        </div>
        <button
          className="btn orange lighten-1 center-align"
          style={{ marginTop: "10px", borderRadius: "6px", width: "100%" }}
          onClick={handleFormFour}
        >
          NEXT(5/5)
        </button>
      </div>
    </div>
  );
};
export default PostFormFourLocation;
