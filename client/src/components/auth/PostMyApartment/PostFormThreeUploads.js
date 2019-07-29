import React from "react";

const PostFormThreePhotos = ({
  handleFormThree,
  onFileSubmit,
  onFileChange,
  link
}) => {
  return (
    <div className="section">
      <div className="row ">
        <div className="col s12 ">
          <h6 className="grey-text text-darken-1 center-align">
            Time for the photos of your place!
            <br />
            Upload the best pictures you have taken.
          </h6>

          {link ? (
            <div className="row center-align">
              <img src={"http://localhost:5000" + link} />
              <h6 className="grey-text text-darken-1 center-align">
                Looking good!
              </h6>
            </div>
          ) : (
            <div className="custom-file mb-4">
              <input
                name="apartmentListing"
                type="file"
                encType="multipart/form-data"
                className="custom-file-input"
                id="customFile"
                onChange={e => {
                  e.persist();
                  onFileChange(e);
                }}
              />

              <input
                type="submit"
                value="Upload"
                className="btn btn-primary btn-block mt-4"
                onClick={onFileSubmit}
              />
            </div>
          )}
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
