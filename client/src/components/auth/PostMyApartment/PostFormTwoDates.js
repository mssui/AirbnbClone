import React from "react";
import PickDate from "./PickDate";

const PostFormTwoDates = ({ handleCalender, handleFormTwo }) => {
  return (
    <div className="section " style={{ minHeight: "10%" }}>
      <h6 className="grey-text text-darken-1 center-align">
        Time to setup the dates! We already selected the next 3 months
        available.Starting from today.
        <br />
        Please click on the dates <strong>that are NOT available</strong>
        <br />
        So those, will not show up on search results.
      </h6>
      <PickDate handleCalender={handleCalender} />

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
