import React from "react";
import { Link } from "react-router-dom";
import Increment from "./Increment";
import WhereTo from "./WhereTo";
import Calendar from "./DatePicker";

const SearchArea = ({ user, handleDate }) => {
  return (
    <React.Fragment>
      <div className="row s12 center-align">
        {user ? (
          <div>Welcome {user}</div>
        ) : (
          <h3>
            Welcome Guest, Wanna <Link to="/signup"> join?</Link>
          </h3>
        )}
      </div>
      <div className="row col s12 center-align">
        <div className=" col s2 " />

        <form>
          <div className="input-field col s4 ">
            <WhereTo user={user} />
            {/* <input id="icon_prefix" type="text" className="validate" />
            <label htmlFor="icon_prefix">Where to go?</label> */}
          </div>
        </form>
        <div className="input-field col s4 ">
          <Increment />
        </div>
        <div className=" col s2 " />
      </div>
      <div className="row col s12 center-align">
        <div className=" col s2 " />
        <Calendar
          placeholder={"Start Date"}
          number={1}
          handleDate={() => handleDate()}
        />
        <Calendar placeholder={"End Date"} />
        <div className=" col s2 " />
      </div>
    </React.Fragment>
  );
};
export default SearchArea;
