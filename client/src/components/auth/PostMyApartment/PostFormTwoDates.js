import React from "react";
import PickDate from "./PickDate";

const PostFormTwoDates = ({ handleCalender, handleFormTwo, availibility }) => {
  return (
    <div className="section " style={{ minHeight: "10%" }}>
      <h5 className="grey-text text-darken-1 center-align">
        Time to setup the dates!
      </h5>
      <br />
      <h6 className="grey-text text-darken-1 center-align">
        We already selected the next 3 months available.Starting from today.
        <br />
        Please click on the dates <strong>to deselect</strong>
        <br />
      </h6>
      <br />
      <div className="row">
        <div className=" col s12 m6 l6 center-align">
          <h6 className="grey-text text-darken-1 center-align calendar-item">
            Green dates : Available
          </h6>
          <br />
        </div>
        <div className=" col s12 m6 l6 center-align">
          <h6 className="grey-text text-darken-1 center-align inactive">
            Grey dates: NOT available
          </h6>
        </div>
      </div>

      <PickDate handleCalender={handleCalender} availibility={availibility} />

      <button
        className="btn orange lighten-1 center-align"
        style={{ marginTop: "10px", borderRadius: "6px", width: "100%" }}
        onClick={handleFormTwo}
      >
        NEXT(3/5)
      </button>
    </div>
  );
};
export default PostFormTwoDates;
