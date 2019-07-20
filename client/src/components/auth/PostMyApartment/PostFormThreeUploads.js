import React from "react";
import FileUpload from "./FileUpload";

const PostFormThreePhotos = ({ handleFormThree }) => {
  return (
    <div className="section">
      <div className="row">
        <div className="col s12">
          <h6 className="grey-text text-darken-1 center-align">
            Time for the photos of your place!
            <br />
            Upload the best pictures you have taken.
          </h6>
          <FileUpload />
        </div>
        <button
          className="btn orange lighten-1 center-align"
          style={{ marginTop: "10px", borderRadius: "6px", width: "100%" }}
          onClick={handleFormThree}
        >
          NEXT(4/5)
        </button>
      </div>
    </div>
  );
};
export default PostFormThreePhotos;
