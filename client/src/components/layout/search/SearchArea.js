import React from "react";
import DatePicker from "./DatePicker";
import { Link } from "react-router-dom";

const SearchArea = ({ user }) => {
  return (
    <div className="section">
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

        <form className="col s12 ">
          <div className="input-field col s4 center-align">
            <input id="icon_prefix" type="text" className="validate" />
            <label htmlFor="icon_prefix">Where to go?</label>
          </div>
          <div className="input-field col s4 center-align">
            <input id="icon_prefix" type="text" className="validate" />
            <label htmlFor="icon_prefix">How many people?</label>
          </div>
          <div className="col s4 center-align">
            <DatePicker />
          </div>
          <div className=" col s2 " />
        </form>
      </div>
    </div>
  );
};
export default SearchArea;
