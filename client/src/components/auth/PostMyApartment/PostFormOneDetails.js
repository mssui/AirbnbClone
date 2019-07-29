import React from "react";

const PostFormOneDetails = ({
  handleChange,
  handleFormOne,
  title,
  body,
  guest,
  error
}) => {
  const warnings = {
    title:
      "Title should contain at least 2 words. Maximum should contain 15 words.",
    body:
      "Body should contain at least 10 words. Better explanation will bring you more customers",
    max_guest_num: "Please write number",
    guest: "You can except min. 1, max. 99 guests"
  };
  return (
    <div className="section">
      <div className="row">
        <h6 className="grey-text text-darken-1 center-align">
          Here We are! Let's create your apartment listing. First we need some
          information
          <br />
          You will be able to look at all the editable info, on the last step.
        </h6>

        {/* Title */}

        <div className="input-field gap">
          <input type="text" id="title" onChange={handleChange} />
          <label htmlFor="title"> Title</label>
          {title === null && null}
          {title ? (
            <i className="material-icons prefix icon-green">done</i>
          ) : (
            title === false && (
              <h6
                className="orange-text text-lighten-2 right-align"
                style={{ fontSize: "15px" }}
              >
                *{warnings.title}
              </h6>
            )
          )}
        </div>

        {/* Body */}
        <div className="input-field">
          <textarea
            id="body"
            className="materialize-textarea"
            onChange={handleChange}
          />
          <label htmlFor="body"> Content</label>
          {body === null && null}
          {body ? (
            <i className="material-icons prefix icon-green">done</i>
          ) : (
            body === false && (
              <h6
                className="orange-text text-lighten-2 right-align"
                style={{ fontSize: "15px" }}
              >
                *{warnings.body}
              </h6>
            )
          )}
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
          {guest === null && null}
          {guest ? (
            <i className="material-icons prefix icon-green">done</i>
          ) : (
            guest === false && (
              <h6
                className="orange-text text-lighten-2 right-align"
                style={{ fontSize: "15px" }}
              >
                *{warnings.guest}
              </h6>
            )
          )}
        </div>

        <div className="input-field">
          <button
            className="btn orange lighten-1 center-align"
            onClick={handleFormOne}
            style={{ marginTop: "10px", borderRadius: "6px", width: "100%" }}
          >
            NEXT(2/5)
          </button>
          {error ? (
            <h6
              className="orange-text text-lighten-2 right-align"
              style={{ fontSize: "15px" }}
            >
              *{error}
            </h6>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default PostFormOneDetails;
