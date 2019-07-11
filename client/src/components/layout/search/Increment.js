import React from "react";

const Increment = ({ counter, increment, decrement }) => {
  return (
    <React.Fragment>
      <div className="col s4 ">
        <p>Guests</p>
      </div>
      <div className="col s2 ">
        <i
          className="fa fa-minus-square"
          style={{ fontSize: "48px", color: "#b2dfdb" }}
          onClick={decrement}
        />
      </div>
      <div className="col s2 " style={{ fontSize: "35px", marginLeft: "15px" }}>
        {counter}
      </div>

      <div className="col s2 ">
        <i
          className="fa fa-plus-square"
          style={{ fontSize: "48px", color: "#b2dfdb" }}
          onClick={increment}
        />
      </div>
      <div className="col s2 " />
    </React.Fragment>
  );
};

export default Increment;
