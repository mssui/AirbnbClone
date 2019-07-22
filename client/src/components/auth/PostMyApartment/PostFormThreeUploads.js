import React from "react";

const PostFormThreePhotos = ({ handleFormThree, onFileSubmit }) => {
  return (
    <div className="section">
      <div className="row">
        <div className="col s12">
          <h6 className="grey-text text-darken-1 center-align">
            Time for the photos of your place!
            <br />
            Upload the best pictures you have taken.
          </h6>
          <form onSubmit={onFileSubmit}>
            <div className="custom-file mb-4">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
              />
            </div>

            <input
              type="submit"
              value="Upload"
              className="btn btn-primary btn-block mt-4"
            />
          </form>
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
