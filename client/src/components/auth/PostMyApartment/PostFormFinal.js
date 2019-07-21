import React from "react";

const PostFormFinal = ({ postApartment }) => {
  return (
    <div className="section">
      <div className="row">
        <div className="col s12">
          <h6 className="grey-text text-darken-1 center-align">
            The very last step!
            <br />
            Your listings looks like this. If you're satisfied with it, click
            List My Apartment button.
            <br />
            Or you can go back and change the areas you want.
          </h6>
        </div>
        <button
          className="btn orange lighten-1 center-align"
          style={{ marginTop: "10px", borderRadius: "6px", width: "100%" }}
          onClick={postApartment}
        >
          LIST MY APARTMENT
        </button>
      </div>
    </div>
  );
};
export default PostFormFinal;
