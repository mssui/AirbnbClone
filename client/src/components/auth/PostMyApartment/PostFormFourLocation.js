import React from "react";
import LocationSearchInput from "../../layout/search/WhereTo";

const PostFormFourLocation = ({ handleFormFour, formatAddress }) => {
  return (
    <div className="section">
      <div className="row">
        <div className="col s12">
          <h6 className="grey-text text-darken-1 center-align">
            The very last step!
            <br />
            Let's set the location so people can find your apartment on search
            results
          </h6>

          <LocationSearchInput formatAddress={formatAddress} />
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
