import React from "react";

const PostFormOneDetails = ({ handleChange, handleFormOne }) => {
  return (
    <div className="section">
      <div className="row">
        <h6 className="grey-text text-darken-1 center-align">
          Here We are! Let's create your apartment listing. First we need some
          information
          <br />
          You will be able to look at all the editable info, on the last step.
        </h6>

        <form className="white" onSubmit={handleFormOne}>
          {/* Title */}
          <div className="input-field">
            <input type="text" id="title" onChange={handleChange} />
            <label htmlFor="title"> Title</label>
          </div>
          {/* Body */}
          <div className="input-field">
            <textarea
              id="body"
              className="materialize-textarea"
              onChange={handleChange}
            />
            <label htmlFor="body"> Content</label>
          </div>
          {/* City / Country Select */}

          <div className="input-field">
            <input type="text" id="country" onChange={handleChange} />
            <label htmlFor="country"> Write your Country</label>
          </div>

          <div className="input-field">
            <input type="text" id="city" onChange={handleChange} />
            <label htmlFor="city"> Write your City</label>
          </div>

          <div className="input-field">
            <input type="text" id="all" onChange={handleChange} />
            <label htmlFor="all"> Write your Address</label>
          </div>

          <div className="input-field">
            <input type="number" id="max_guest_num" onChange={handleChange} />
            <label htmlFor="max_guest_num">How many guests can stay?</label>
          </div>

          <div className="input-field">
            <button
              className="btn orange lighten-1 center-align"
              style={{ marginTop: "10px", borderRadius: "6px", width: "100%" }}
            >
              NEXT(2/5)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PostFormOneDetails;
